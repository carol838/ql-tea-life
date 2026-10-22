export const CONTACT_RECIPIENT = 'carol@nbqltrading.com';
export const CONTACT_SUBJECT = 'New Website Inquiry – QL Tea Life';
export const MAX_REQUEST_BYTES = 16 * 1024;

export const CONTACT_LIMITS = Object.freeze({
  name: 100,
  email: 254,
  message: 5000,
  website: 200,
  submissionId: 100,
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMISSION_ID_PATTERN = /^[A-Za-z0-9_-]{16,100}$/;

function readString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateContactSubmission(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { ok: false, errors: { form: 'Invalid submission.' } };
  }

  const data = {
    name: readString(payload.name),
    email: readString(payload.email).toLowerCase(),
    message: readString(payload.message),
    website: readString(payload.website),
    submissionId: readString(payload.submissionId),
  };

  if (data.website) {
    return { ok: true, spam: true, data };
  }

  const errors = {};

  if (!data.name) {
    errors.name = 'Please enter your name.';
  } else if (data.name.length > CONTACT_LIMITS.name) {
    errors.name = `Name must be ${CONTACT_LIMITS.name} characters or fewer.`;
  }

  if (!data.email) {
    errors.email = 'Please enter your email address.';
  } else if (data.email.length > CONTACT_LIMITS.email || !EMAIL_PATTERN.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.message) {
    errors.message = 'Please enter your inquiry.';
  } else if (data.message.length > CONTACT_LIMITS.message) {
    errors.message = `Message must be ${CONTACT_LIMITS.message} characters or fewer.`;
  }

  if (!data.submissionId || !SUBMISSION_ID_PATTERN.test(data.submissionId)) {
    errors.form = 'Invalid submission identifier. Please refresh the page and try again.';
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    spam: false,
    data: {
      name: data.name,
      email: data.email,
      message: data.message,
      submissionId: data.submissionId,
    },
  };
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function buildContactEmail(contact, submittedAt = new Date()) {
  const submittedAtText = submittedAt.toISOString();
  const safeName = escapeHtml(contact.name);
  const safeEmail = escapeHtml(contact.email);
  const safeMessage = escapeHtml(contact.message).replaceAll('\n', '<br>');

  return {
    to: CONTACT_RECIPIENT,
    replyTo: contact.email,
    subject: CONTACT_SUBJECT,
    idempotencyKey: `contact/${contact.submissionId}`,
    text: [
      'New website inquiry received.',
      '',
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      '',
      'Message:',
      contact.message,
      '',
      `Submitted at: ${submittedAtText}`,
      'Source: QL Tea Life contact form',
    ].join('\n'),
    html: [
      '<h2>New website inquiry received</h2>',
      `<p><strong>Name:</strong> ${safeName}</p>`,
      `<p><strong>Email:</strong> ${safeEmail}</p>`,
      `<p><strong>Message:</strong><br>${safeMessage}</p>`,
      `<p><strong>Submitted at:</strong> ${submittedAtText}<br><strong>Source:</strong> QL Tea Life contact form</p>`,
    ].join(''),
  };
}
