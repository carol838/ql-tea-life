import './PageTemplates.css';

export default function PrivacyPolicy() {
  return (
    <main className="content-page privacy-policy-page">
      <section className="page-hero">
        <p className="page-eyebrow">QL Tea Life</p>
        <h1>Privacy Policy</h1>
        <p>How we handle information submitted through this website.</p>
      </section>

      <section className="page-section privacy-policy-content">
        <p><strong>Effective date:</strong> October 22, 2026</p>

        <h2>Information We Collect</h2>
        <p>
          When you contact us or request our catalogue, we collect the information you choose to provide, such as
          your name, business email, company or brand name, country or region, business type, WhatsApp number, and
          inquiry details.
        </p>

        <h2>How We Use Information</h2>
        <p>
          We use submitted information to provide requested materials, respond to business inquiries, discuss tea
          sourcing or private label projects, maintain service security, and prevent misuse. A catalogue request does
          not automatically subscribe you to marketing emails.
        </p>

        <h2>Service Providers and Analytics</h2>
        <p>
          Website inquiry notifications are processed through Resend, our email delivery provider. We also use
          website analytics to understand general site activity. Catalogue analytics events do not include the
          personal information entered in the request form.
        </p>

        <h2>Retention and Security</h2>
        <p>
          We retain business inquiry information only as needed to respond, maintain relevant business records, and
          protect the website from abuse. We use reasonable safeguards, but no internet transmission or storage
          system can be guaranteed completely secure.
        </p>

        <h2>Your Choices</h2>
        <p>
          You may ask us to correct or delete information you submitted, subject to any records we need to retain for
          legitimate business or legal purposes.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions or requests, email{' '}
          <a className="article-inline-link" href="mailto:carol@nbqltrading.com">carol@nbqltrading.com</a>.
        </p>
      </section>
    </main>
  );
}
