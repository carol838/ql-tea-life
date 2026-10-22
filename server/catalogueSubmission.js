export const CATALOGUE_RECIPIENT = 'carol@nbqltrading.com';
export const CATALOGUE_SUBJECT = 'New Catalogue Request – QL Tea Life';
export const CATALOGUE_NAME = 'QL Tea Life – Wholesale Tea Product Catalogue';
export const CATALOGUE_FILENAME = 'QL_Tea_Life_Wholesale_Tea_Catalogue_Web.pdf';
export const MAX_CATALOGUE_REQUEST_BYTES = 12 * 1024;

export const BUSINESS_TYPES = Object.freeze([
  'Tea Importer / Distributor',
  'Tea Shop / Retailer',
  'Private Label / New Brand',
  'Wholesaler',
  'Other',
]);

export const CATALOGUE_LIMITS = Object.freeze({
  email: 254,
  country: 120,
  company: 160,
  businessType: 40,
  whatsapp: 60,
  sourcePage: 100,
  website: 200,
  submissionId: 100,
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMISSION_ID_PATTERN = /^[A-Za-z0-9_-]{16,100}$/;
const ALLOWED_SOURCE_PAGES = new Set(['/', '/private-label', '/contact']);

function readString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateCatalogueSubmission(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { ok: false, errors: { form: 'Invalid submission.' } };
  }

  const data = {
    email: readString(payload.email).toLowerCase(),
    country: readString(payload.country),
    company: readString(payload.company),
    businessType: readString(payload.businessType),
    whatsapp: readString(payload.whatsapp),
    sourcePage: readString(payload.sourcePage),
    website: readString(payload.website),
    submissionId: readString(payload.submissionId),
  };

  if (data.website) {
    return { ok: true, spam: true, data };
  }

  const errors = {};

  if (!data.email) {
    errors.email = 'Please enter your business email.';
  } else if (data.email.length > CATALOGUE_LIMITS.email || !EMAIL_PATTERN.test(data.email)) {
    errors.email = 'Please enter a valid business email.';
  }

  if (!data.country) {
    errors.country = 'Please enter your country or region.';
  } else if (data.country.length > CATALOGUE_LIMITS.country) {
    errors.country = `Country or region must be ${CATALOGUE_LIMITS.country} characters or fewer.`;
  }

  if (!data.company) {
    errors.company = 'Please enter your company or brand name.';
  } else if (data.company.length > CATALOGUE_LIMITS.company) {
    errors.company = `Company or brand name must be ${CATALOGUE_LIMITS.company} characters or fewer.`;
  }

  if (!BUSINESS_TYPES.includes(data.businessType)) {
    errors.businessType = 'Please select your business type.';
  }

  if (data.whatsapp.length > CATALOGUE_LIMITS.whatsapp) {
    errors.whatsapp = `WhatsApp must be ${CATALOGUE_LIMITS.whatsapp} characters or fewer.`;
  }

  if (!ALLOWED_SOURCE_PAGES.has(data.sourcePage) || data.sourcePage.length > CATALOGUE_LIMITS.sourcePage) {
    errors.form = 'Invalid catalogue source page.';
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
      email: data.email,
      country: data.country,
      company: data.company,
      businessType: data.businessType,
      whatsapp: data.whatsapp,
      sourcePage: data.sourcePage,
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

export function buildCatalogueEmail(request, submittedAt = new Date()) {
  const submittedAtText = submittedAt.toISOString();
  const whatsappText = request.whatsapp || 'Not provided';

  return {
    to: CATALOGUE_RECIPIENT,
    replyTo: request.email,
    subject: CATALOGUE_SUBJECT,
    idempotencyKey: `catalogue/${request.submissionId}`,
    text: [
      'New catalogue request received.',
      '',
      `Business Email: ${request.email}`,
      `Country / Region: ${request.country}`,
      `Company / Brand Name: ${request.company}`,
      `Business Type: ${request.businessType}`,
      `WhatsApp: ${whatsappText}`,
      `Source Page: ${request.sourcePage}`,
      `Submitted At: ${submittedAtText}`,
      `Catalogue: ${CATALOGUE_NAME}`,
    ].join('\n'),
    html: [
      '<h2>New catalogue request received</h2>',
      `<p><strong>Business Email:</strong> ${escapeHtml(request.email)}</p>`,
      `<p><strong>Country / Region:</strong> ${escapeHtml(request.country)}</p>`,
      `<p><strong>Company / Brand Name:</strong> ${escapeHtml(request.company)}</p>`,
      `<p><strong>Business Type:</strong> ${escapeHtml(request.businessType)}</p>`,
      `<p><strong>WhatsApp:</strong> ${escapeHtml(whatsappText)}</p>`,
      `<p><strong>Source Page:</strong> ${escapeHtml(request.sourcePage)}</p>`,
      `<p><strong>Submitted At:</strong> ${submittedAtText}</p>`,
      `<p><strong>Catalogue:</strong> ${escapeHtml(CATALOGUE_NAME)}</p>`,
    ].join(''),
  };
}
