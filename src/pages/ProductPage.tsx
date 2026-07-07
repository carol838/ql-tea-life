import './ProductPage.css';

export const JASMINE_FLOWERS_PRODUCT_URL = '/products/jasmine-tea-with-flowers';
export const JASMINE_FLOWERS_PRODUCT_TITLE = 'Jasmine Tea With Flowers for Wholesale & Private Label | QL Tea Life';
export const JASMINE_FLOWERS_PRODUCT_DESCRIPTION =
  'Wholesale jasmine tea with visible flowers for retail brands, gift packaging, tea shops and private label projects. MOQ from 10kg.';
export const JASMINE_FLOWERS_PRODUCT_IMAGE = '/images/products/jasmine-tea-with-flowers/dry-tea.webp';

const WHATSAPP_URL = 'https://wa.me/8618767158838';

const highlights = [
  'Visible Jasmine Blossoms',
  'Fresh Floral Appearance',
  'Retail Ready Style',
  'Private Label Available',
];

const recommendedFor = [
  'Tea shops',
  'Retail brands',
  'Gift sets',
  'Lifestyle tea products',
  'Private label projects',
];

const galleryImages = [
  {
    src: '/images/products/jasmine-tea-with-flowers/dry-tea.webp',
    alt: 'Loose jasmine tea with visible dried jasmine flowers',
  },
  {
    src: '/images/products/jasmine-tea-with-flowers/tea-soup.webp',
    alt: 'Brewed jasmine tea with flower petals in a white tasting cup',
  },
  {
    src: '/images/products/jasmine-tea-with-flowers/tea-soup-with-glass.webp',
    alt: 'Jasmine tea infusion served in a clear glass',
  },
  {
    src: '/images/products/jasmine-tea-with-flowers/jasmine-tea-retail-pouch.webp',
    alt: 'Retail pouch packaging concept for jasmine tea',
  },
  {
    src: '/images/products/jasmine-tea-with-flowers/jasmine-tea-premium-packaging.webp',
    alt: 'Premium tin packaging concept for Chinese tea',
  },
];

function trackProductWhatsAppClick() {
  window.gtag?.('event', 'whatsapp_click', {
    contact_method: 'whatsapp',
    location: 'product_jasmine_tea_with_flowers',
  });
}

export default function ProductPage() {
  return (
    <main className="product-page">
      <section className="product-hero">
        <div className="product-hero__copy">
          <p className="page-eyebrow">Wholesale Jasmine Tea</p>
          <h1>Jasmine Tea With Flowers</h1>
          <p className="product-hero__subtitle">
            A visually beautiful jasmine green tea with natural floral appearance.
          </p>
          <p>
            Jasmine Tea With Flowers combines green tea with visible jasmine blossoms, making it suitable for retail
            shelves, gift packaging, lifestyle tea brands, and private label tea projects.
          </p>
          <a
            className="product-button product-button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackProductWhatsAppClick}
          >
            Request Wholesale Quote
          </a>
        </div>
        <figure className="product-hero__visual">
          <img
            src={JASMINE_FLOWERS_PRODUCT_IMAGE}
            alt="Jasmine tea with visible flowers for wholesale and private label projects"
            width="1500"
            height="1500"
            decoding="async"
          />
        </figure>
      </section>

      <section className="product-section">
        <p className="page-eyebrow">Product Highlights</p>
        <div className="product-highlight-grid">
          {highlights.map((highlight, index) => (
            <article key={highlight}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{highlight}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section product-section--split">
        <div>
          <p className="page-eyebrow">Recommended For</p>
          <h2>B2B Applications</h2>
        </div>
        <ul className="product-use-list">
          {recommendedFor.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="product-section">
        <p className="page-eyebrow">Packaging Inspiration</p>
        <h2>Packaging Direction for Your Brand</h2>
        <div className="product-packaging-grid">
          <article>
            <img
              src="/images/products/jasmine-tea-with-flowers/jasmine-tea-retail-pouch.webp"
              alt="Retail pouch packaging direction for jasmine tea"
              width="1024"
              height="1024"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3>Retail Pouch Packaging</h3>
              <p>Ideal for 100g / 200g retail tea products, supermarket shelves, and daily tea brands.</p>
            </div>
          </article>
          <article>
            <img
              src="/images/products/jasmine-tea-with-flowers/jasmine-tea-premium-packaging.webp"
              alt="Premium tin packaging direction for jasmine tea gift products"
              width="1440"
              height="1440"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3>Premium Packaging</h3>
              <p>Suitable for gift sets, premium retail positioning, and seasonal promotions.</p>
            </div>
          </article>
        </div>
        <p className="product-note">
          Packaging can be customized based on your brand positioning, target market, and order quantity.
        </p>
      </section>

      <section className="product-section">
        <p className="page-eyebrow">Product Gallery</p>
        <h2>Visual Product Reference</h2>
        <div className="product-gallery">
          {galleryImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} width="1200" height="900" loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </section>

      <section className="product-section product-guidance">
        <div>
          <p className="page-eyebrow">Product Guidance</p>
          <h2>With Flowers or Without Flowers?</h2>
        </div>
        <p>
          Jasmine tea with visible flowers is often chosen for visual appeal and retail presentation. Traditional
          jasmine tea without visible flowers focuses more on scenting craftsmanship and clean tea appearance. The best
          choice depends on your market positioning.
        </p>
        <a className="text-link" href="/tea-knowledge/jasmine-tea-with-flowers-or-without">
          Jasmine Tea With Flowers or Without: Which Is Better?
        </a>
      </section>

      <section className="product-cta">
        <div>
          <p className="page-eyebrow">Wholesale Inquiry</p>
          <h2>Looking for Jasmine Tea With Flowers for Your Brand?</h2>
          <p>Contact QL Tea Life for samples, wholesale supply, and private label packaging options.</p>
        </div>
        <div className="product-cta__actions">
          <a className="product-button" href="/contact">Contact Us</a>
          <a
            className="product-button product-button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackProductWhatsAppClick}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
