const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const REQUEST_TIMEOUT_MS = 10_000;

export class EmailConfigurationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'EmailConfigurationError';
  }
}

export class EmailDeliveryError extends Error {
  constructor(status) {
    super('The email provider did not accept the message.');
    this.name = 'EmailDeliveryError';
    this.status = status;
  }
}

export function readEmailConfiguration(environment = process.env) {
  const apiKey = environment.RESEND_API_KEY?.trim();
  const from = environment.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !from) {
    throw new EmailConfigurationError('RESEND_API_KEY and CONTACT_FROM_EMAIL must be configured.');
  }

  if (/[\r\n]/.test(from) || !from.includes('@')) {
    throw new EmailConfigurationError('CONTACT_FROM_EMAIL must be a valid verified sender address.');
  }

  return { apiKey, from };
}

export async function sendEmail(message, options = {}) {
  const environment = options.environment ?? process.env;
  const fetchImplementation = options.fetchImplementation ?? fetch;
  const { apiKey, from } = readEmailConfiguration(environment);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetchImplementation(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': message.idempotencyKey,
      },
      body: JSON.stringify({
        from,
        to: [message.to],
        subject: message.subject,
        text: message.text,
        html: message.html,
        reply_to: message.replyTo,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new EmailDeliveryError(response.status);
    }

    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}
