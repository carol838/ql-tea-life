import './Contact.css';

const WHATSAPP_URL = 'https://wa.me/8618767158838';

export default function Contact() {
  const trackWhatsAppClick = () => {
    window.gtag?.('event', 'whatsapp_click', {
      contact_method: 'whatsapp',
      location: 'contact_page',
    });
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
              <dt>WhatsApp</dt>
              <dd>+86 187 6715 8838</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:info@qltealife.com">info@qltealife.com</a>
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

        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />

          <button type="submit">Submit Inquiry</button>
        </form>
      </section>
    </main>
  );
}
