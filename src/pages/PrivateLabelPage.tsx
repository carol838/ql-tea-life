import { useEffect, useRef, useState } from 'react';
import './PageTemplates.css';

type PrivateLabelContent = {
  title: string;
  intro: string;
  features: [string, string][];
};

export const PACKAGING_OPTIONS_ROUTE = '/private-label/packaging-options';
export const PACKAGING_OPTIONS_SEO = {
  title: 'Private Label Tea Packaging Options | QL Tea Life',
  description:
    'Explore private label tea packaging options including tea tins, flexible pouches, tea bags and luxury gift boxes for wholesale tea brands and retail projects.',
  ogImage: '/images/private-label/jasmine-green-tea-packaging.webp',
};

export const privateLabelPages: Record<string, PrivateLabelContent> = {
  '/private-label': {
    title: 'Private Label Tea',
    intro: 'Flexible Chinese tea sourcing, packing and brand support for international buyers.',
    features: [
      ['Tea Selection', 'Select suitable tea categories, grades and formats for your target market.'],
      ['Packaging Development', 'Coordinate retail-ready packaging formats for your brand and sales channels.'],
      ['OEM Coordination', 'Support sampling, production planning and export preparation from one project flow.'],
    ],
  },
  '/tea-bags': {
    title: 'Private Label Tea Bags',
    intro: 'Tea bag formats prepared for retail, hospitality and foodservice tea programs.',
    features: [
      ['Multiple Bag Formats', 'Choose conventional, pyramid and individually wrapped tea bag formats.'],
      ['Custom Tea Blends', 'Develop tea and botanical combinations aligned with your product positioning.'],
      ['Retail Cartons', 'Prepare branded cartons and outer packaging for retail and foodservice programs.'],
    ],
  },
  '/custom-packaging': {
    title: 'Custom Tea Packaging',
    intro: 'Packaging support for brands requiring distinctive and export-ready tea presentation.',
    features: [
      ['Pouches and Tins', 'Select practical packaging formats for loose leaf tea, tea bags and gift ranges.'],
      ['Label Coordination', 'Coordinate brand artwork, product information and print-ready packaging details.'],
      ['Outer Cartons', 'Plan transport packaging suitable for international distribution requirements.'],
    ],
  },
};

const packagingOptions = [
  {
    title: 'Tea Tins',
    image: '/images/packaging-options/tea-tins.webp',
    imageAlt: 'Premium tea tin packaging options for private label tea brands',
    description:
      'Tea tins are suitable for premium loose-leaf tea, retail collections and gift-oriented products.',
    points: [
      'Suitable for 50g, 100g and other retail weights',
      'Standard tins with custom labels',
      'Fully custom-printed tins for larger quantities',
      'Strong shelf presence and premium positioning',
    ],
    bestFor: 'Premium loose-leaf tea and signature collections',
  },
  {
    title: 'Kraft & Flexible Pouches',
    image: '/images/packaging-options/kraft-bag.webp',
    imageAlt: 'Kraft and flexible pouch tea packaging for private label tea brands',
    description:
      'Flexible pouches provide a practical and cost-effective option for new brands, refill products and online retail.',
    points: [
      'Lower-cost launch option',
      'Flexible order quantities',
      'Custom labels or printed pouch solutions',
      'Easy storage and shipping',
    ],
    bestFor: 'Startup brands, refill products and market testing',
  },
  {
    title: 'Tea Bags',
    image: '/images/packaging-options/tea-bag-box.webp',
    imageAlt: 'Private label tea bag box packaging for retail tea products',
    description:
      'Tea bag formats are suitable for convenience-focused products, hotels, cafes and retail channels.',
    points: [
      'Pyramid tea bags',
      'Individual sachets',
      'Retail boxes',
      'Private label artwork options',
    ],
    bestFor: 'Hotels, cafes, gifting and convenience products',
  },
  {
    title: 'Luxury Gift Boxes',
    image: '/images/packaging-options/gift-box.webp',
    imageAlt: 'Luxury tea gift box packaging for premium tea collections',
    description:
      'Gift boxes help tea brands create premium collections for seasonal gifts, corporate gifting and special occasions.',
    points: [
      'Two-tin and multi-tin combinations',
      'Different box structures',
      'Custom sleeves, labels and artwork',
      'Suitable for curated tea collections',
    ],
    bestFor: 'Luxury collections, seasonal gifts and corporate gifting',
  },
];

const customizationGroups: [string, string[]][] = [
  ['Brand Design', ['Logo placement', 'Brand colors', 'Artwork', 'Labels and sleeves']],
  [
    'Product Information',
    ['Tea name', 'Origin', 'Ingredients', 'Brewing instructions', 'Net weight', 'Required market information'],
  ],
];

const customizationVisuals: Record<string, { image: string; imageAlt: string }> = {
  'Brand Design': {
    image: '/images/packaging-options/brand-design.webp',
    imageAlt: 'Private label tea brand design board with logo colors labels and packaging artwork',
  },
  'Product Information': {
    image: '/images/packaging-options/product-information.webp',
    imageAlt: 'Tea packaging product information mockup showing front label brewing guide and back label details',
  },
};

const collectionPlanning = {
  title: 'Collection Planning',
  description:
    'From blank packaging to a complete retail-ready collection, we help you coordinate tea formats, packaging styles and product combinations around your brand positioning.',
  items: ['Individual retail products', 'Signature tea ranges', 'Gift sets', 'Seasonal collections'],
};

const manufacturerTrustCards = [
  {
    title: 'Direct Tea Sourcing',
    image: '/images/private-label/direct-tea-sourcing.webp',
    imageAlt: 'Direct tea sourcing from Chinese tea growing regions for private label tea production',
    description: 'Carefully selected Chinese tea from trusted growing regions.',
  },
  {
    title: 'Flexible Private Label',
    image: '/images/private-label/flexible-private-label.webp',
    imageAlt: 'Private label tea packaging and branding options for tea businesses',
    description: 'Custom tea blends, packaging and branding for different business sizes.',
  },
  {
    title: 'OEM Manufacturing',
    image: '/images/private-label/oem-manufacturing.webp',
    imageAlt: 'OEM tea manufacturing facility for private label tea orders',
    description: 'Reliable production with consistent quality and flexible capacity.',
  },
  {
    title: 'Global Export Experience',
    image: '/images/private-label/global-export-card.webp',
    imageAlt: 'Export-ready tea products prepared for international buyers',
    description: 'Serving international tea businesses with export-ready solutions.',
  },
];

const manufacturingCapabilities = [
  {
    title: 'Tea Processing',
    image: '/images/private-label/tea-processing.webp',
    imageAlt: 'Tea processing equipment and production facility for OEM tea manufacturing',
    description: 'Modern equipment for stable production.',
  },
  {
    title: 'Packaging Workshop',
    image: '/images/private-label/packaging-workshop.webp',
    imageAlt: 'Tea packaging workshop for private label tea projects',
    description: 'Flexible packing solutions for private label projects.',
  },
  {
    title: 'Production Facility',
    image: '/images/private-label/production-facility.webp',
    imageAlt: 'Tea production facility supporting different private label order volumes',
    description: 'Efficient manufacturing for different order volumes.',
  },
  {
    title: 'Finished Products',
    image: '/images/private-label/finished-products.webp',
    imageAlt: 'Finished private label tea products prepared for shipment',
    description: 'Products prepared for shipment with consistent quality.',
  },
];

const productionVideoPoster = '/images/private-label/tea-processing.webp';
const productionVideoSrc = '/images/private-label/tea-processing.mp4';

function trackPackagingContactClick() {
  window.gtag?.('event', 'click', {
    location: 'private_label_packaging_options',
    link_url: '/contact',
  });
}

function ProductionVideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [videoSource, setVideoSource] = useState<string>();

  useEffect(() => {
    if (videoSource) {
      void videoRef.current?.play();
    }
  }, [videoSource]);

  function handlePlay() {
    setHasStarted(true);
    setVideoSource(productionVideoSrc);
  }

  return (
    <div className={`production-video-card ${hasStarted ? 'production-video-card--playing' : ''}`}>
      <video
        ref={videoRef}
        src={videoSource}
        controls={hasStarted}
        preload={videoSource ? 'metadata' : 'none'}
        playsInline
      />
      <img
        className="production-video-card__poster"
        src={productionVideoPoster}
        alt="Tea production facility for private label tea manufacturing"
        width="1200"
        height="675"
        loading="lazy"
        decoding="async"
      />
      <button className="production-video-card__play" type="button" onClick={handlePlay} aria-label="Play production video">
        <span aria-hidden="true" />
      </button>
      <span className="production-video-card__label">Factory Production</span>
    </div>
  );
}

export default function PrivateLabelPage({ page }: { page: PrivateLabelContent }) {
  if (page.title === 'Private Label Tea') {
    return (
      <main className="content-page private-label-manufacturing-page">
        <section className="page-hero private-label-hero">
          <p className="page-eyebrow">Private Label Solutions</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <a className="page-button" href="/contact">Contact Us</a>
        </section>

        <section className="page-section manufacturer-section">
          <p className="page-eyebrow">Why Choose QL Tea Life</p>
          <h2>Built for Tea Brands and Importers</h2>
          <div className="manufacturer-trust-grid">
            {manufacturerTrustCards.map((card) => (
              <article className="manufacturer-card" key={card.title}>
                <img
                  className="manufacturer-card__image"
                  src={card.image}
                  alt={card.imageAlt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section production-section">
          <div className="production-section__copy">
            <h2>Inside Our Production</h2>
            <p>
              Take a closer look inside our production facility and see how we manufacture tea products with
              standardized procedures, experienced staff and consistent quality for OEM partners worldwide.
            </p>
          </div>
          <ProductionVideoShowcase />
        </section>

        <section className="page-section page-section--tinted manufacturer-section">
          <p className="page-eyebrow">Manufacturing Capabilities</p>
          <h2>Production Support for Private Label Tea Projects</h2>
          <div className="manufacturing-grid">
            {manufacturingCapabilities.map((capability) => (
              <article className="manufacturer-card" key={capability.title}>
                <img
                  className="manufacturer-card__image"
                  src={capability.image}
                  alt={capability.imageAlt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section export-experience">
          <img
            className="export-experience__image"
            src="/images/private-label/global-export-experience.webp"
            alt="Global tea export experience for private label and OEM tea buyers"
            width="1400"
            height="934"
            loading="lazy"
            decoding="async"
          />
          <div className="export-experience__copy">
            <p className="page-eyebrow">Export Ready</p>
            <h2>Global Export Experience</h2>
            <p>
              Supporting tea businesses around the world with reliable OEM production, export documentation and
              international logistics experience.
            </p>
          </div>
        </section>

        <section className="inquiry-cta">
          <div><p className="page-eyebrow">Start a Project</p><h2>Discuss Your Private Label Requirements</h2></div>
          <a className="page-button" href="/contact">Contact Us</a>
        </section>
      </main>
    );
  }

  return (
    <main className="content-page">
      <section className="page-hero">
        <p className="page-eyebrow">Private Label Solutions</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className="page-section">
        <p className="page-eyebrow">Capabilities</p>
        <h2>Built for Tea Brands and Importers</h2>
        <div className="benefit-grid">
          {page.features.map(([feature, description]) => (
            <article key={feature}><h3>{feature}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>
      <section className="inquiry-cta">
        <div><p className="page-eyebrow">Start a Project</p><h2>Discuss Your Private Label Requirements</h2></div>
        <a className="page-button" href="/contact">Contact Us</a>
      </section>
    </main>
  );
}

export function PackagingOptionsPage() {
  return (
    <main className="content-page packaging-options-page">
      <section className="packaging-hero">
        <div className="packaging-hero__content">
          <p className="page-eyebrow">Private Label Packaging</p>
          <h1>Premium Tea Packaging Solutions for Your Brand</h1>
          <p>
            From tea tins and flexible pouches to luxury gift boxes, QL Tea Life provides packaging options to help
            tea brands create retail-ready products for different markets and launch budgets.
          </p>
          <div className="packaging-hero__actions">
            <a className="page-button" href="/contact" onClick={trackPackagingContactClick}>
              Discuss Your Packaging
            </a>
          </div>
        </div>
        <figure className="packaging-hero__visual">
          <img
            src="/images/packaging-options/hero.webp"
            alt="Premium private label tea packaging options for retail tea brands"
            width="800"
            height="500"
            loading="eager"
            decoding="async"
          />
        </figure>
      </section>

      <section className="page-section">
        <p className="page-eyebrow">Packaging Formats</p>
        <h2>Packaging Options for Different Brand Needs</h2>
        <p className="packaging-section-intro">
          Different tea products and launch stages require different packaging solutions. We help buyers compare
          presentation, MOQ, customization and cost before selecting the most suitable option.
        </p>
        <div className="packaging-card-grid">
          {packagingOptions.map((option) => (
            <article className="packaging-card" key={option.title}>
              <img
                className="packaging-card__image"
                src={option.image}
                alt={option.imageAlt}
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <ul>
                {option.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="packaging-card__best">
                <span>Best for:</span> {option.bestFor}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <p className="page-eyebrow">Customization</p>
        <h2>Build a Consistent Tea Brand Identity</h2>
        <p className="packaging-section-intro">
          Packaging should not only protect the tea. It should also communicate the product story, market positioning
          and brand personality.
        </p>
        <div className="packaging-feature-grid">
          {customizationGroups.map(([title, items]) => (
            <article key={title}>
              <img
                className="packaging-feature-card__image"
                src={customizationVisuals[title].image}
                alt={customizationVisuals[title].imageAlt}
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <article className="packaging-collection-card">
          <div>
            <h3>{collectionPlanning.title}</h3>
            <p>{collectionPlanning.description}</p>
            <ul>
              {collectionPlanning.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <img
            src="/images/packaging-options/collection-planning.webp"
            alt="Tea packaging collection planning from blank packaging to retail-ready branded products"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </article>
      </section>

      <section className="inquiry-cta">
        <div>
          <p className="page-eyebrow">Start Your Private Label Project</p>
          <h2>Ready to Create Packaging for Your Tea Brand?</h2>
          <p>
            Tell us about your tea selection, target market, preferred retail weight and packaging direction. We will
            help you evaluate suitable options for your launch.
          </p>
        </div>
        <div className="article-cta__actions">
          <a className="page-button" href="/contact" onClick={trackPackagingContactClick}>
            Request a Packaging Proposal
          </a>
          <a className="page-button" href="/jasmine-tea">
            View Tea Collection
          </a>
        </div>
      </section>
    </main>
  );
}
