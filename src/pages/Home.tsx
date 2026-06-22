import './Home.css';

const advantages = [
  {
    title: 'Direct Tea Sourcing',
    description: 'Selected directly from trusted Chinese tea origins.',
    icon: 'leaf',
  },
  {
    title: 'Small MOQ Available',
    description: 'Flexible order quantities for growing tea businesses.',
    icon: 'box',
  },
  {
    title: 'OEM & Private Label',
    description: 'Tailored tea products prepared for your own brand.',
    icon: 'tag',
  },
  {
    title: 'Export Experience',
    description: 'Reliable support for international tea shipments.',
    icon: 'globe',
  },
  {
    title: 'Flexible Packaging',
    description: 'Multiple formats for retail and foodservice markets.',
    icon: 'package',
  },
];

function AdvantageIcon({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    leaf: (
      <>
        <path d="M20 4c-7.5.5-13 4.7-13 10.4 0 3.1 2.4 5.6 5.5 5.6C18.2 20 21 13.7 20 4Z" />
        <path d="M5 21c2.7-5.2 6.8-8.5 12.5-10.5" />
      </>
    ),
    box: (
      <>
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z" />
        <path d="M12 11v10" />
      </>
    ),
    tag: (
      <>
        <path d="M20 13 13 20l-9-9V4h7l9 9Z" />
        <circle cx="8.5" cy="8.5" r="1.5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.7 2.5 4 5.5 4 9s-1.3 6.5-4 9c-2.7-2.5-4-5.5-4-9s1.3-6.5 4-9Z" />
      </>
    ),
    package: (
      <>
        <path d="M5 8h14v12H5V8Z" />
        <path d="M3 5h18v4H3V5ZM12 5v15" />
        <path d="M12 5c-1.8 0-4-1-4-2.5C8 1.6 8.8 1 9.7 1 11.1 1 12 3 12 5Zm0 0c1.8 0 4-1 4-2.5 0-.9-.8-1.5-1.7-1.5C12.9 1 12 3 12 5Z" />
      </>
    ),
  };

  return (
    <svg className="home-advantage__icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

const teaCategories = [
  ['Jasmine Tea', '/jasmine-tea', '/images/tea-collection/categories/jasmine-tea.webp'],
  ['Green Tea', '/green-tea', '/images/tea-collection/categories/green-tea.webp'],
  ['Black Tea', '/black-tea', '/images/tea-collection/categories/black-tea.webp'],
  ['Oolong Tea', '/oolong-tea', '/images/tea-collection/categories/oolong-tea.webp'],
  ['Herbal Tea', '/herbal-tea', '/images/tea-collection/categories/herbal-tea.webp'],
  ['Flavoured Tea', '/flavoured-tea', '/images/tea-collection/categories/flavoured-tea.webp'],
];

const privateLabelFeatures = [
  'Tea Bags',
  'Custom Packaging',
  'Private Label',
  'Custom Tea Blends',
  'Retail & Gift Packaging',
];

const oemProcess = [
  'Choose Your Tea',
  'Select Packaging',
  'Customize Branding',
  'Ship Worldwide',
];

const articles = [
  [
    'How to Choose High-Quality Chinese Tea for Your Business',
    '/tea-knowledge/how-to-choose-high-quality-chinese-tea-for-your-business',
    '/images/tea-knowledge/chinese-tea-quality-guide.webp',
    'Chinese green tea being evaluated in a glass brewing bowl',
  ],
  [
    'Chinese Tea Types Explained: Green Tea, Black Tea, Oolong and Herbal Tea',
    '/tea-knowledge/chinese-tea-types-explained',
    '/images/tea-knowledge/chinese-tea-types-guide.webp',
    'Fresh Chinese tea leaves drying in traditional round trays',
  ],
  [
    'Private Label Tea: How to Build Your Own Tea Brand',
    '/tea-knowledge/private-label-tea-guide',
    '/images/tea-knowledge/private-label-tea-guide.webp',
    'Custom private label flower and fruit tea pouch packaging',
  ],
];

const faqs = [
  [
    'What is the MOQ for wholesale tea?',
    'MOQ depends on the tea category, packing format and customization required. Small MOQ options are available for selected projects.',
  ],
  [
    'Do you provide private label tea packaging?',
    'Yes. We support tea bags, pyramid tea bags, custom packaging and OEM tea programs.',
  ],
  [
    'Can I order mixed tea varieties in one shipment?',
    'Mixed tea varieties can be arranged depending on order volume, packaging and production requirements.',
  ],
  [
    'What certifications are available for export?',
    'Available certifications depend on the tea, origin, production facility and destination market requirements.',
  ],
  [
    'Do you export worldwide?',
    'Yes. We work with international buyers and support wholesale tea export enquiries for global markets.',
  ],
];

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <section className="home-hero" aria-label="QL Tea Life hero">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Naturally Pure · Tea for Life</p>
          <h1>
            Premium Chinese Tea
            <br />
            For Global Buyers
          </h1>
          <div
            className="home-hero__trust-signals--desktop"
            aria-label="Wholesale service highlights"
          >
            <span>MOQ 10kg</span>
            <span>Private Label Available</span>
            <span>Worldwide Shipping</span>
          </div>
          <a
            className="home-hero__cta"
            href="https://wa.me/8618767158838"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.('event', 'whatsapp_click', {
                location: 'hero_button',
              });
            }}
          >
            Get Wholesale Quote
          </a>
          <div
            className="home-hero__trust-signals--mobile"
            aria-label="Wholesale service highlights"
          >
            <span>MOQ 10kg</span>
            <span>Private Label</span>
            <span>Worldwide Shipping</span>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__heading">
          <p className="home-section__eyebrow">B2B Tea Partner</p>
          <h2>Why Choose QL Tea Life</h2>
        </div>
        <div className="home-advantage-grid">
          {advantages.map((advantage, index) => (
            <article className="home-advantage" key={advantage.title}>
              <div className="home-advantage__top">
                <AdvantageIcon type={advantage.icon} />
                <span className="home-advantage__number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section--tinted">
        <div className="home-section__heading">
          <p className="home-section__eyebrow">Wholesale Categories</p>
          <h2>Chinese Tea Collection</h2>
          <p>Explore tea categories available for wholesale, OEM and private label projects.</p>
        </div>
        <div className="home-category-grid">
          {teaCategories.map(([name, path, image]) => (
            <a className="home-category-card" href={path} key={path}>
              <img
                className="home-category-card__image"
                src={image}
                alt={`${name} loose leaf tea`}
                width="1000"
                height="1000"
                loading="lazy"
                decoding="async"
              />
              <h3>{name}</h3>
              <span>Explore category</span>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section home-private-label">
        <div className="home-private-label__layout">
          <div className="home-private-label__content">
            <p className="home-section__eyebrow">Private Label Tea Solutions</p>
            <h2>Build Your Own Tea Brand</h2>
            <p className="home-private-label__description">
              Flexible OEM and private label services for tea shops, tea brands, distributors, and importers.
            </p>
            <ul className="home-private-label__features">
              {privateLabelFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className="home-button home-button--primary" href="/contact">
              Request a Quote
            </a>
          </div>
          <figure className="home-private-label__visual">
            <img
              src="/images/private-label/jasmine-green-tea-packaging.webp"
              alt="Private label jasmine green tea bags and retail packaging"
              width="800"
              height="500"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <div className="home-oem-process" aria-label="OEM tea process">
          {oemProcess.map((step, index) => (
            <div className="home-oem-process__step" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__heading home-section__heading--row">
          <div>
            <p className="home-section__eyebrow">Buyer Resources</p>
            <h2>Tea Knowledge</h2>
          </div>
          <a className="home-text-link" href="/tea-knowledge">View all articles</a>
        </div>
        <div className="home-article-grid">
          {articles.map(([title, path, image, alt]) => (
            <article className="home-article-card" key={path}>
              <img
                className="home-article-card__image"
                src={image}
                alt={alt}
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <p className="home-section__eyebrow">Tea Knowledge</p>
              <h3>{title}</h3>
              <a className="home-text-link" href={path}>Read article</a>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-faq">
        <div className="home-section__heading">
          <p className="home-section__eyebrow">Buyer Questions</p>
          <h2>Wholesale Tea FAQ</h2>
        </div>
        <div className="home-faq__list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="home-final-cta">
        <div>
          <p className="home-section__eyebrow">Start an Inquiry</p>
          <h2>Ready to Source Tea from China?</h2>
          <p>Talk with our team about tea sourcing,<br />private label solutions and packaging options.</p>
        </div>
        <a className="home-button home-button--primary" href="/contact">Request a Quote</a>
      </section>
    </main>
  );
}
