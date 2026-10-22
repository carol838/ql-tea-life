import assert from 'node:assert/strict';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  checkCatalogueRateLimit,
  clearCatalogueRateLimitStore,
  handleCatalogueRequest,
} from '../api/catalogue-request.js';
import {
  buildCatalogueEmail,
  CATALOGUE_FILENAME,
  CATALOGUE_NAME,
  CATALOGUE_RECIPIENT,
  CATALOGUE_SUBJECT,
  validateCatalogueSubmission,
} from '../server/catalogueSubmission.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cataloguePath = path.join(projectRoot, 'private', 'catalogues', CATALOGUE_FILENAME);
const fakeCatalogue = Buffer.from('%PDF-1.4\nMock catalogue for endpoint tests.');
const validPayload = {
  email: 'buyer@example.com',
  country: 'Canada',
  company: 'Example Tea Co.',
  businessType: 'Tea Importer / Distributor',
  whatsapp: '+1 555 0100',
  sourcePage: '/private-label',
  website: '',
  submissionId: '12345678-1234-4234-8234-123456789abc',
};

function createRequest(payload = validPayload, headers = {}) {
  return new Request('https://www.qltealife.com/api/catalogue-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: 'https://www.qltealife.com',
      'x-vercel-forwarded-for': '203.0.113.20',
      ...headers,
    },
    body: JSON.stringify(payload),
  });
}

const validation = validateCatalogueSubmission(validPayload);
assert.equal(validation.ok, true);
assert.equal(validation.spam, false);
assert.equal(validateCatalogueSubmission({ ...validPayload, email: 'invalid' }).ok, false);
assert.equal(validateCatalogueSubmission({ ...validPayload, country: '' }).ok, false);
assert.equal(validateCatalogueSubmission({ ...validPayload, company: '' }).ok, false);
assert.equal(validateCatalogueSubmission({ ...validPayload, businessType: 'Unknown' }).ok, false);
assert.equal(validateCatalogueSubmission({ ...validPayload, sourcePage: '/unexpected' }).ok, false);
assert.equal(validateCatalogueSubmission({ ...validPayload, website: 'spam.example' }).spam, true);

const email = buildCatalogueEmail(validation.data, new Date('2026-10-22T00:00:00.000Z'));
assert.equal(email.to, CATALOGUE_RECIPIENT);
assert.equal(email.subject, CATALOGUE_SUBJECT);
assert.equal(email.replyTo, validPayload.email);
assert.equal(email.idempotencyKey, `catalogue/${validPayload.submissionId}`);
assert.match(email.text, /Example Tea Co\./);
assert.match(email.text, /Tea Importer \/ Distributor/);
assert.match(email.text, /\/private-label/);
assert.match(email.text, new RegExp(CATALOGUE_NAME));

clearCatalogueRateLimitStore();
let deliveredEmail;
let catalogueLoaded = false;
const successfulResponse = await handleCatalogueRequest(createRequest(), {
  deliverEmail: async (message) => {
    assert.equal(catalogueLoaded, true, 'The catalogue must be available before the email is sent.');
    deliveredEmail = message;
  },
  loadCatalogue: async () => {
    catalogueLoaded = true;
    return fakeCatalogue;
  },
  now: () => new Date('2026-10-22T00:00:00.000Z'),
});

assert.equal(successfulResponse.status, 200);
assert.equal(successfulResponse.headers.get('content-type'), 'application/pdf');
assert.match(successfulResponse.headers.get('content-disposition') ?? '', new RegExp(CATALOGUE_FILENAME));
assert.equal(successfulResponse.headers.get('cache-control'), 'private, no-store, max-age=0');
assert.equal(deliveredEmail.replyTo, validPayload.email);
assert.deepEqual(Buffer.from(await successfulResponse.arrayBuffer()), fakeCatalogue);

clearCatalogueRateLimitStore();
const bundledCatalogueResponse = await handleCatalogueRequest(createRequest({
  ...validPayload,
  submissionId: 'catalogue-real-file-1234567890',
}), {
  deliverEmail: async () => {},
});
assert.equal(bundledCatalogueResponse.status, 200);
assert.equal(bundledCatalogueResponse.headers.get('content-type'), 'application/pdf');
assert.equal(Number(bundledCatalogueResponse.headers.get('content-length')), 3_856_239);
assert.equal(Buffer.from(await bundledCatalogueResponse.arrayBuffer()).subarray(0, 5).toString('ascii'), '%PDF-');

clearCatalogueRateLimitStore();
let failedDeliveryLoaded = false;
const originalConsoleError = console.error;
console.error = () => {};
let failedDeliveryResponse;
try {
  failedDeliveryResponse = await handleCatalogueRequest(createRequest(), {
    deliverEmail: async () => {
      throw new Error('Provider unavailable');
    },
    loadCatalogue: async () => {
      failedDeliveryLoaded = true;
      return fakeCatalogue;
    },
  });
} finally {
  console.error = originalConsoleError;
}
assert.equal(failedDeliveryLoaded, true);
assert.equal(failedDeliveryResponse.status, 502);
assert.match(failedDeliveryResponse.headers.get('content-type') ?? '', /application\/json/);

clearCatalogueRateLimitStore();
const invalidResponse = await handleCatalogueRequest(createRequest({ ...validPayload, email: 'not-an-email' }), {
  deliverEmail: async () => assert.fail('Invalid submissions must not send email.'),
  loadCatalogue: async () => assert.fail('Invalid submissions must not load the catalogue.'),
});
assert.equal(invalidResponse.status, 400);

const spamResponse = await handleCatalogueRequest(createRequest({ ...validPayload, website: 'spam.example' }), {
  deliverEmail: async () => assert.fail('Honeypot submissions must not send email.'),
  loadCatalogue: async () => assert.fail('Honeypot submissions must not load the catalogue.'),
});
assert.equal(spamResponse.status, 200);
assert.match(spamResponse.headers.get('content-type') ?? '', /application\/json/);

const rejectedOriginResponse = await handleCatalogueRequest(
  createRequest(validPayload, { Origin: 'https://attacker.example' }),
);
assert.equal(rejectedOriginResponse.status, 403);

const oversizedResponse = await handleCatalogueRequest(
  createRequest(validPayload, { 'Content-Length': '13000' }),
);
assert.equal(oversizedResponse.status, 413);

clearCatalogueRateLimitStore();
for (let count = 0; count < 3; count += 1) {
  assert.equal(checkCatalogueRateLimit('test-ip', 1_000).allowed, true);
}
assert.equal(checkCatalogueRateLimit('test-ip', 1_000).allowed, false);
assert.equal(checkCatalogueRateLimit('test-ip', 601_001).allowed, true);

const catalogueStats = await stat(cataloguePath);
assert.equal(catalogueStats.size, 3_856_239);
assert.ok(catalogueStats.size < 4_500_000);
assert.equal(cataloguePath.includes(`${path.sep}public${path.sep}`), false);

console.log('Catalogue validation, email, protected PDF response and abuse-protection tests passed.');
