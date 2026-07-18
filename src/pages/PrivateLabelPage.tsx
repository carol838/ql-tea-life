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
  '/oem-service': {
    title: 'Tea OEM Service',
    intro: 'OEM tea project support from category selection through packing and export preparation.',
    features: [
      ['Project Planning', 'Define tea selection, packaging, quantities and target timelines before production.'],
      ['Sample Coordination', 'Review tea and packaging samples before confirming the final specification.'],
      ['Production Support', 'Coordinate packing, quality checks and export preparation for confirmed projects.'],
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

const collectionPlanning = {
  title: 'Collection Planning',
  description:
    'From blank packaging to a complete retail-ready collection, we help you coordinate tea formats, packaging styles and product combinations around your brand positioning.',
  items: ['Individual retail products', 'Signature tea ranges', 'Gift sets', 'Seasonal collections'],
};

const packagingProcess = [
  ['01', 'Choose Your Tea', 'Confirm tea varieties, grades and initial quantities.'],
  ['02', 'Select Packaging', 'Compare tins, pouches, tea bags and gift boxes.'],
  ['03', 'Confirm Retail Specifications', 'Confirm retail weight, product count and collection structure.'],
  ['04', 'Prepare Artwork', 'Confirm logo, labels, colors and required product information.'],
  ['05', 'Sample Approval', 'Review packaging appearance and technical details before production.'],
  ['06', 'Production & Delivery', 'Complete tea packing, quality checks and shipment preparation.'],
];

const packagingFaqs = [
  [
    'Can I start with small quantities?',
    'Flexible launch solutions may be available depending on the selected tea, packaging format and customization method. Standard packaging with custom labels is usually more suitable for smaller initial projects.',
  ],
  [
    'Can you help with packaging design?',
    "QL Tea Life can provide packaging recommendations and coordinate packaging production based on the buyer's artwork, branding and market requirements.",
  ],
  [
    'Can I use different packaging for different teas?',
    'Yes. Tea tins, pouches and gift boxes can be combined within one product collection depending on the tea positioning and launch plan.',
  ],
  [
    'Can different tea varieties be packed in the same gift box?',
    'Yes. Multi-tea gift sets can be developed after confirming the selected teas, retail weight, box structure and packaging quantities.',
  ],
  [
    'Are packaging prices included in the tea price?',
    'No. Bulk tea prices and packaging costs are calculated separately. Packaging costs can be confirmed after the format, material, size, printing and quantity are selected.',
  ],
  [
    'Do all teas use the same inner packaging?',
    'Not always. The suitable inner-packaging solution depends on the tea type, destination, shipping method and storage requirements.',
  ],
];

function trackPackagingContactClick() {
  window.gtag?.('event', 'click', {
    location: 'private_label_packaging_options',
    link_url: '/contact',
  });
}

export default function PrivateLabelPage({ page }: { page: PrivateLabelContent }) {
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
            <a className="text-link" href="/private-label">
              Explore Private Label Solutions
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

      <section className="page-section packaging-protection">
        <div>
          <p className="page-eyebrow">Tea Protection</p>
          <h2>Protecting Tea Quality Inside the Packaging</h2>
        </div>
        <div>
          <p>
            The outer package creates the brand presentation, while the inner packaging helps protect tea quality
            during storage and transport.
          </p>
          <p>Suitable solutions may include:</p>
          <ul>
            <li>Food-grade inner pouches</li>
            <li>High-barrier foil packaging</li>
            <li>Heat sealing</li>
            <li>Moisture and oxygen protection</li>
            <li>Packaging recommendations based on tea type and shipping conditions</li>
          </ul>
          <p>
            The final inner-packaging solution should be confirmed according to the tea type, destination, shipping
            method and storage requirements.
          </p>
        </div>
      </section>

      <section className="page-section">
        <p className="page-eyebrow">Project Flow</p>
        <h2>How the Packaging Process Works</h2>
        <div className="packaging-process-grid">
          {packagingProcess.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <p className="page-eyebrow">MOQ Guidance</p>
        <h2>Flexible Solutions for Different Launch Stages</h2>
        <div className="packaging-copy-block">
          <p>Tea and packaging MOQs are calculated separately.</p>
          <p>Tea MOQ depends on the selected tea variety.</p>
          <p>Packaging MOQ depends on:</p>
          <ul>
            <li>packaging type</li>
            <li>printing method</li>
            <li>packaging size</li>
            <li>customization level</li>
            <li>total quantity</li>
          </ul>
          <p>
            For new tea brands, QL Tea Life can recommend practical launch solutions such as standard tins with custom
            labels, flexible pouches or mixed tea collections before moving to fully customized packaging.
          </p>
        </div>
      </section>

      <section className="page-section packaging-example">
        <p className="page-eyebrow">Starter Brand Example</p>
        <h2>A Practical Packaging Approach for a New Tea Brand</h2>
        <div className="packaging-example__layout">
          <article>
            <h3>Initial Tea Collection</h3>
            <ul>
              <li>5-8 loose-leaf teas</li>
              <li>100g retail tins</li>
              <li>Standard tins with custom labels</li>
              <li>Optional two-tin or four-tin gift boxes</li>
            </ul>
          </article>
          <div>
            <p>This approach can help a new brand:</p>
            <ul>
              <li>control initial investment</li>
              <li>test several tea categories</li>
              <li>reduce packaging risk</li>
              <li>identify future best sellers</li>
              <li>upgrade to fully custom-printed packaging later</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <p className="page-eyebrow">Buyer Questions</p>
        <h2>Packaging FAQ</h2>
        <div className="faq-list">
          {packagingFaqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
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
