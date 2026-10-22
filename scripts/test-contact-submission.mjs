import assert from 'node:assert/strict';
import { checkRateLimit, clearRateLimitStore, handleContactRequest } from '../api/contact.js';
import { buildContactEmail, CONTACT_RECIPIENT, CONTACT_SUBJECT, validateContactSubmission } from '../server/contactSubmission.js';
import { EmailConfigurationError, readEmailConfiguration, sendEmail } from '../server/emailDelivery.js';

const validPayload = {
  name: 'Tea Buyer',
  email: 'buyer@example.com',
  message: 'Please send wholesale black tea information.',
  website: '',
  submissionId: '12345678-1234-4234-8234-123456789abc',
};

const validResult = validateContactSubmission(validPayload);
assert.equal(validResult.ok, true);
assert.equal(validResult.spam, false);

assert.equal(validateContactSubmission({ ...validPayload, name: '' }).ok, false);
assert.equal(validateContactSubmission({ ...validPayload, email: 'invalid' }).ok, false);
assert.equal(validateContactSubmission({ ...validPayload, message: 'x'.repeat(5001) }).ok, false);
assert.equal(validateContactSubmission({ ...validPayload, website: 'spam.example' }).spam, true);

const email = buildContactEmail(validResult.data, new Date('2026-10-22T00:00:00.000Z'));
assert.equal(email.to, CONTACT_RECIPIENT);
assert.equal(email.subject, CONTACT_SUBJECT);
assert.equal(email.replyTo, validPayload.email);
assert.match(email.text, /Tea Buyer/);
assert.match(email.text, /Please send wholesale black tea information/);

assert.throws(() => readEmailConfiguration({}), EmailConfigurationError);

let capturedRequest;
await sendEmail(email, {
  environment: {
    RESEND_API_KEY: 'test-key',
    CONTACT_FROM_EMAIL: 'QL Tea Life Website <website@qltealife.com>',
  },
  fetchImplementation: async (url, options) => {
    capturedRequest = { url, options };
    return new Response(JSON.stringify({ id: 'email-id' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  },
});

const providerPayload = JSON.parse(capturedRequest.options.body);
assert.equal(capturedRequest.url, 'https://api.resend.com/emails');
assert.equal(providerPayload.from, 'QL Tea Life Website <website@qltealife.com>');
assert.deepEqual(providerPayload.to, [CONTACT_RECIPIENT]);
assert.equal(providerPayload.reply_to, validPayload.email);
assert.equal(capturedRequest.options.headers['Idempotency-Key'], email.idempotencyKey);

clearRateLimitStore();
for (let count = 0; count < 5; count += 1) {
  assert.equal(checkRateLimit('test-ip', 1_000).allowed, true);
}
assert.equal(checkRateLimit('test-ip', 1_000).allowed, false);
assert.equal(checkRateLimit('test-ip', 601_001).allowed, true);

clearRateLimitStore();
let deliveredEmail;
const successfulResponse = await handleContactRequest(
  new Request('https://www.qltealife.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: 'https://www.qltealife.com',
      'x-vercel-forwarded-for': '203.0.113.10',
    },
    body: JSON.stringify(validPayload),
  }),
  {
    deliverEmail: async (message) => {
      deliveredEmail = message;
    },
    now: () => new Date('2026-10-22T00:00:00.000Z'),
  },
);

assert.equal(successfulResponse.status, 200);
const successfulBody = await successfulResponse.json();
assert.equal(successfulBody.ok, true);
assert.equal(successfulBody.delivered, true);
assert.equal(deliveredEmail.replyTo, validPayload.email);

const spamResponse = await handleContactRequest(
  new Request('https://www.qltealife.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...validPayload, website: 'spam.example' }),
  }),
  { deliverEmail: async () => assert.fail('Honeypot submissions must not send email.') },
);

const spamBody = await spamResponse.json();
assert.equal(spamResponse.status, 200);
assert.equal(spamBody.ok, true);
assert.equal(spamBody.delivered, false);

const invalidResponse = await handleContactRequest(
  new Request('https://www.qltealife.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...validPayload, email: 'not-an-email' }),
  }),
  { deliverEmail: async () => assert.fail('Invalid submissions must not send email.') },
);

assert.equal(invalidResponse.status, 400);
assert.equal((await invalidResponse.json()).ok, false);

const oversizedResponse = await handleContactRequest(
  new Request('https://www.qltealife.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Content-Length': '20000' },
    body: JSON.stringify(validPayload),
  }),
);

assert.equal(oversizedResponse.status, 413);

console.log('Contact submission validation, email adapter, rate limit and API handler tests passed.');
