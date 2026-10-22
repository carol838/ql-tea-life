import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import {
  buildCatalogueEmail,
  CATALOGUE_FILENAME,
  MAX_CATALOGUE_REQUEST_BYTES,
  validateCatalogueSubmission,
} from '../server/catalogueSubmission.js';
import { EmailConfigurationError, EmailDeliveryError, sendEmail } from '../server/emailDelivery.js';

const CATALOGUE_FILE_PATH = fileURLToPath(
  new URL(`../private/catalogues/${CATALOGUE_FILENAME}`, import.meta.url),
);
const MAX_CATALOGUE_RESPONSE_BYTES = 4_500_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const rateLimitStore = globalThis.__qlTeaCatalogueRateLimit ?? new Map();

globalThis.__qlTeaCatalogueRateLimit = rateLimitStore;

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

export function checkCatalogueRateLimit(identifier, now = Date.now()) {
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

export function clearCatalogueRateLimitStore() {
  rateLimitStore.clear();
}

function isSameOriginRequest(request) {
  const origin = request.headers.get('origin');

  if (!origin) {
    return false;
  }

  try {
    return origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

async function loadBundledCatalogue() {
  return readFile(CATALOGUE_FILE_PATH);
}

function isValidCatalogueBuffer(catalogue) {
  return (
    catalogue instanceof Uint8Array &&
    catalogue.byteLength > 5 &&
    catalogue.byteLength < MAX_CATALOGUE_RESPONSE_BYTES &&
    Buffer.from(catalogue.subarray(0, 5)).toString('ascii') === '%PDF-'
  );
}

export async function handleCatalogueRequest(request, dependencies = {}) {
  const deliverEmail = dependencies.deliverEmail ?? sendEmail;
  const loadCatalogue = dependencies.loadCatalogue ?? loadBundledCatalogue;
  const now = dependencies.now ?? (() => new Date());

  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, message: 'Method not allowed.' }, 405, { Allow: 'POST' });
  }

  if (!isSameOriginRequest(request)) {
    return jsonResponse({ ok: false, message: 'Request origin is not allowed.' }, 403);
  }

  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return jsonResponse({ ok: false, message: 'Content-Type must be application/json.' }, 415);
  }

  const declaredLength = Number(request.headers.get('content-length') ?? 0);

  if (Number.isFinite(declaredLength) && declaredLength > MAX_CATALOGUE_REQUEST_BYTES) {
    return jsonResponse({ ok: false, message: 'Request is too large.' }, 413);
  }

  let rawBody;

  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ ok: false, message: 'Unable to read the submission.' }, 400);
  }

  if (Buffer.byteLength(rawBody, 'utf8') > MAX_CATALOGUE_REQUEST_BYTES) {
    return jsonResponse({ ok: false, message: 'Request is too large.' }, 413);
  }

  let payload;

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, message: 'Invalid JSON submission.' }, 400);
  }

  const validation = validateCatalogueSubmission(payload);

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
    return jsonResponse({ ok: true, delivered: false, message: 'Thank you. Your request has been received.' });
  }

  const rateLimit = checkCatalogueRateLimit(getClientIdentifier(request));

  if (!rateLimit.allowed) {
    return jsonResponse(
      { ok: false, message: 'Too many requests. Please wait and try again.' },
      429,
      { 'Retry-After': String(rateLimit.retryAfter) },
    );
  }

  let catalogue;

  try {
    catalogue = await loadCatalogue();
  } catch (error) {
    console.error('Catalogue file could not be loaded.', error instanceof Error ? error.name : 'UnknownError');
    return jsonResponse({ ok: false, message: 'The catalogue is temporarily unavailable.' }, 503);
  }

  if (!isValidCatalogueBuffer(catalogue)) {
    console.error('Catalogue file failed integrity or response-size validation.');
    return jsonResponse({ ok: false, message: 'The catalogue is temporarily unavailable.' }, 503);
  }

  try {
    await deliverEmail(buildCatalogueEmail(validation.data, now()));
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      console.error('Catalogue email service is not configured.');
      return jsonResponse({ ok: false, message: 'The catalogue service is temporarily unavailable.' }, 503);
    }

    if (error instanceof EmailDeliveryError) {
      console.error(`Catalogue email provider rejected the request with status ${error.status}.`);
    } else {
      console.error('Catalogue email delivery failed.', error instanceof Error ? error.name : 'UnknownError');
    }

    return jsonResponse({ ok: false, message: 'We could not process your request. Please try again.' }, 502);
  }

  return new Response(catalogue, {
    status: 200,
    headers: {
      'Cache-Control': 'private, no-store, max-age=0',
      'Content-Disposition': `attachment; filename="${CATALOGUE_FILENAME}"`,
      'Content-Length': String(catalogue.byteLength),
      'Content-Type': 'application/pdf',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

export default {
  fetch(request) {
    return handleCatalogueRequest(request);
  },
};
