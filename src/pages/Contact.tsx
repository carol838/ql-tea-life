import { FormEvent, useRef, useState } from 'react';
import { generateLead, trackEmailClick, trackWhatsAppLead } from '../utils/analytics';
import './Contact.css';

const WHATSAPP_URL = 'https://wa.me/8618767158838';

export default function Contact() {
  const submissionInProgress = useRef(false);
  const [submissionState, setSubmissionState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const trackWhatsAppClick = () => {
    trackWhatsAppLead({
      contact_method: 'whatsapp',
      cta_location: 'contact_page',
    });
  };

  const trackContactEmailClick = () => {
    trackEmailClick({
      cta_location: 'contact_page',
    });
  };

  const submitInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionInProgress.current) {
      return;
    }

    submissionInProgress.current = true;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submissionId = crypto.randomUUID();

    setSubmissionState('sending');
    setSubmissionMessage('Sending your inquiry…');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          website: formData.get('website'),
          submissionId,
        }),
      });
      const result = await response.json().catch(() => null) as { delivered?: boolean; message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message ?? 'We could not send your inquiry. Please try again.');
      }

      form.reset();
      setSubmissionState('success');
      setSubmissionMessage(result?.message ?? 'Thank you. Your inquiry has been sent successfully.');
      if (result?.delivered === true) {
        generateLead({
          method: 'contact_form',
          page_path: '/contact',
          form_name: 'contact_inquiry',
        });
      }
    } catch (error) {
      setSubmissionState('error');
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : 'We could not send your inquiry. Please try again or email us directly.',
      );
    } finally {
      submissionInProgress.current = false;
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <p className="contact-eyebrow">Wholesale Tea Inquiry</p>
          <h1>Contact Us</h1>
          <p className="contact-hero__response">We respond within 24 hours</p>

          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:carol@nbqltrading.com" onClick={trackContactEmailClick}>carol@nbqltrading.com</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>China</dd>
            </div>
          </dl>

          <a
            className="contact-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
          >
            Chat on WhatsApp
          </a>
        </div>

        <figure className="contact-hero__visual">
          <img
            src="/images/contact/tea-processing-workshop.jpg"
            alt="Tea processing workshop with production trays for global wholesale supply"
            width="2048"
            height="1171"
            decoding="async"
          />
          <figcaption>Reliable Tea Production for Global Buyers</figcaption>
        </figure>
      </section>

      <section className="contact-inquiry">
        <div className="contact-inquiry__heading">
          <p className="contact-eyebrow">Project Details</p>
          <h2>Send an Inquiry</h2>
          <p>Tell us about the tea, packaging, quantity, and market you are planning for.</p>
        </div>

        <form className="contact-form" onSubmit={submitInquiry}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" maxLength={100} required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" maxLength={5000} required />

          <div className="contact-form__honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" autoComplete="off" maxLength={200} tabIndex={-1} />
          </div>

          <button type="submit" disabled={submissionState === 'sending'} aria-busy={submissionState === 'sending'}>
            {submissionState === 'sending' ? 'Sending…' : 'Submit Inquiry'}
          </button>

          {submissionMessage ? (
            <p
              className={`contact-form__status contact-form__status--${submissionState}`}
              role={submissionState === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {submissionMessage}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}


