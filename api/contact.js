import { buildContactEmail, MAX_REQUEST_BYTES, validateContactSubmission } from '../server/contactSubmission.js';
import { EmailConfigurationError, EmailDeliveryError, sendEmail } from '../server/emailDelivery.js';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = globalThis.__qlTeaContactRateLimit ?? new Map();

globalThis.__qlTeaContactRateLimit = rateLimitStore;

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders,
    },
  });
}

function getClientIdentifier(request) {
  return (
    request.headers.get('x-vercel-forwarded-for') ??
    request.headers.get('x-forwarded-for') ??
    'unknown'
  ).split(',')[0].trim();
}

export function checkRateLimit(identifier, now = Date.now()) {
  for (const [key, value] of rateLimitStore) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const existing = rateLimitStore.get(identifier);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export function clearRateLimitStore() {
  rateLimitStore.clear();
}

function isSameOriginRequest(request) {
  const origin = request.headers.get('origin');

  if (!origin) {
    return true;
  }

  try {
    return origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export async function handleContactRequest(request, dependencies = {}) {
  const deliverEmail = dependencies.deliverEmail ?? sendEmail;
  const now = dependencies.now ?? (() => new Date());

  if (request.method !== 'POST') {
    return jsonResponse(
      { ok: false, message: 'Method not allowed.' },
      405,
      { Allow: 'POST' },
    );
  }

  if (!isSameOriginRequest(request)) {
    return jsonResponse({ ok: false, message: 'Request origin is not allowed.' }, 403);
  }

  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return jsonResponse({ ok: false, message: 'Content-Type must be application/json.' }, 415);
  }

  const declaredLength = Number(request.headers.get('content-length') ?? 0);

  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ ok: false, message: 'Request is too large.' }, 413);
  }

  let rawBody;

  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ ok: false, message: 'Unable to read the submission.' }, 400);
  }

  if (Buffer.byteLength(rawBody, 'utf8') > MAX_REQUEST_BYTES) {
    return jsonResponse({ ok: false, message: 'Request is too large.' }, 413);
  }

  let payload;

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, message: 'Invalid JSON submission.' }, 400);
  }

  const validation = validateContactSubmission(payload);

  if (!validation.ok) {
    return jsonResponse(
      {
        ok: false,
        message: 'Please review the highlighted information and try again.',
        fieldErrors: validation.errors,
      },
      400,
    );
  }

  if (validation.spam) {
    return jsonResponse({ ok: true, delivered: false, message: 'Thank you. Your inquiry has been received.' });
  }

  const rateLimit = checkRateLimit(getClientIdentifier(request));

  if (!rateLimit.allowed) {
    return jsonResponse(
      { ok: false, message: 'Too many submissions. Please wait and try again.' },
      429,
      { 'Retry-After': String(rateLimit.retryAfter) },
    );
  }

  try {
    const email = buildContactEmail(validation.data, now());
    await deliverEmail(email);
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      console.error('Contact email service is not configured.');
      return jsonResponse(
        { ok: false, message: 'The inquiry service is temporarily unavailable. Please email us directly.' },
        503,
      );
    }

    if (error instanceof EmailDeliveryError) {
      console.error(`Contact email provider rejected the request with status ${error.status}.`);
    } else {
      console.error('Contact email delivery failed.', error instanceof Error ? error.name : 'UnknownError');
    }

    return jsonResponse(
      { ok: false, message: 'We could not send your inquiry. Please try again or email us directly.' },
      502,
    );
  }

  return jsonResponse({ ok: true, delivered: true, message: 'Thank you. Your inquiry has been sent successfully.' });
}

export default {
  fetch(request) {
    return handleContactRequest(request);
  },
};
