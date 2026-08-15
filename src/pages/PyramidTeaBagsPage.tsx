import './PyramidTeaBagsPage.css';

export const PYRAMID_TEA_BAGS_ROUTE = '/pyramid-tea-bags';
export const PYRAMID_TEA_BAGS_SEO = {
  title: 'Pyramid Tea Bags Wholesale & ODM | QL Tea Life',
  description:
    'Wholesale pyramid tea bags and low-MOQ ODM solutions from QL Tea Life. Choose from four ready-developed Chinese tea varieties, with existing packaging from 50 boxes and ODM from 100 boxes.',
  ogImage: '/images/pyramid-tea-bags/pyramid-tea-bags-hero.webp',
};

const productCards = [
  {
    title: 'Jasmine Green Tea',
    profile: 'Fresh · Floral · Elegant',
    description: 'A refreshing green tea with a delicate jasmine aroma and a clean, smooth finish.',
    image: '/images/pyramid-tea-bags/jasmine-green-tea-bags.webp',
    alt: 'Jasmine green tea pyramid tea bags',
  },
  {
    title: 'Osmanthus Black Tea',
    profile: 'Sweet · Floral · Smooth',
    description: 'Smooth black tea balanced with the naturally sweet and elegant fragrance of osmanthus.',
    image: '/images/pyramid-tea-bags/osmanthus-black-tea-bags.webp',
    alt: 'Osmanthus black tea pyramid tea bags',
  },
  {
    title: 'Chrysanthemum Green Tea',
    profile: 'Fresh · Light · Botanical',
    description: 'Refreshing green tea complemented by the light floral character of chrysanthemum.',
    image: '/images/pyramid-tea-bags/chrysanthemum-green-tea-bags.webp',
    alt: 'Chrysanthemum green tea pyramid tea bags',
  },
  {
    title: 'Rose Black Tea',
    profile: 'Floral · Rich · Aromatic',
    description: 'Full-bodied black tea with an elegant rose aroma and a smooth, balanced finish.',
    image: '/images/pyramid-tea-bags/rose-black-tea-bags.webp',
    alt: 'Rose black tea pyramid tea bags',
  },
];

const teaMoments = [
  {
    title: 'Green Tea',
    items: [
      {
        label: 'Hot Tea',
        image: '/images/pyramid-tea-bags/green-tea-hot.webp',
        alt: 'Hot green tea made with pyramid tea bags',
      },
      {
        label: 'Iced Tea',
        image: '/images/pyramid-tea-bags/green-tea-iced.webp',
        alt: 'Iced green tea made with pyramid tea bags',
      },
    ],
  },
  {
    title: 'Black Tea',
    items: [
      {
        label: 'Hot Tea',
        image: '/images/pyramid-tea-bags/black-tea-hot.webp',
        alt: 'Hot black tea made with pyramid tea bags',
      },
      {
        label: 'Iced Tea',
        image: '/images/pyramid-tea-bags/black-tea-iced.webp',
        alt: 'Iced black tea made with pyramid tea bags',
      },
    ],
  },
];

const orderOptions = [
  {
    title: 'Ready-to-Sell Collection',
    quantity: '50 Boxes',
    intro: 'Choose from our existing packaged tea collection for direct wholesale and international export.',
    points: [
      'Existing finished packaging',
      'Four tea varieties',
      '25 pyramid tea bags per box',
      'Ready for international orders',
      'MOQ: 50 boxes',
    ],
    cta: 'Get Wholesale Quote',
  },
  {
    title: 'ODM · Your Brand',
    quantity: '100 Boxes',
    intro: 'Choose from our existing tea collection and customize the packaging with your own branding.',
    points: [
      'Ready-developed tea products',
      'Custom logo and branding',
      'Packaging customization',
      'Faster market entry',
      'MOQ: 100 boxes',
    ],
    cta: 'Start Your ODM Project',
  },
];

const odmSteps = [
  {
    number: '01',
    title: 'Choose Your Tea',
    description: 'Select from our existing Jasmine Green Tea, Osmanthus Black Tea, Chrysanthemum Green Tea or Rose Black Tea.',
  },
  {
    number: '02',
    title: 'Add Your Brand',
    description: 'Customize the packaging with your logo, branding and approved design.',
  },
  {
    number: '03',
    title: 'Confirm & Produce',
    description: 'Confirm the final details and proceed with your ODM production order.',
  },
];

const specifications = [
  ['Tea Format', 'Pyramid Tea Bags'],
  ['Available Varieties', 'Jasmine Green Tea, Osmanthus Black Tea, Chrysanthemum Green Tea, Rose Black Tea'],
  ['Tea Bag Weight', '2g'],
  ['Tea Bags per Box', '25'],
  ['Net Weight', '50g per box'],
  ['Shelf Life', '18 months'],
  ['Ready-to-Sell MOQ', '50 boxes'],
  ['ODM MOQ', '100 boxes'],
  ['Custom Branding', 'Available'],
  ['International Export', 'Available'],
];

const comparison = [
  {
    model: 'ODM',
    rows: [
      ['Best for', 'Faster market testing and lower starting quantities'],
      ['Tea', 'Choose from existing tea products'],
      ['Branding', 'Custom branding and packaging'],
      ['MOQ', 'From 100 boxes'],
      ['Development', 'Faster'],
    ],
  },
  {
    model: 'Full Private Label',
    rows: [
      ['Best for', 'Brands looking for more customized product development'],
      ['Tea', 'More flexible tea selection and product development'],
      ['Branding', 'Customized packaging solutions'],
      ['MOQ', 'Project dependent'],
      ['Development', 'More customized'],
    ],
  },
];

const faqs = [
  [
    'What is the MOQ for ready-to-sell pyramid tea bags?',
    'Our existing packaged pyramid tea bag collection starts from 50 boxes.',
  ],
  [
    'What is the MOQ for ODM pyramid tea bags?',
    'ODM orders start from 100 boxes using our existing tea collection as the product base.',
  ],
  [
    'What tea varieties are available?',
    'Our current collection includes Jasmine Green Tea, Osmanthus Black Tea, Chrysanthemum Green Tea and Rose Black Tea.',
  ],
  [
    'How many tea bags are included in each box?',
    'Each box contains 25 pyramid tea bags, with 2g of tea per bag and a total net weight of 50g.',
  ],
  [
    'Can I customize the packaging with my own brand?',
    'Yes. ODM orders can be customized with your branding and approved packaging design.',
  ],
  [
    'What if I need a more customized tea product?',
    'For more customized tea selection, product development or broader private label requirements, please explore our Private Label Tea Solutions.',
  ],
  [
    'How can I request a quote?',
    'Contact us with your preferred tea varieties, estimated quantity, destination market and whether you need our existing packaging or ODM customization.',
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

export default function PyramidTeaBagsPage() {
  return (
    <main className="pyramid-page">
      <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      <section className="pyramid-hero">
        <div className="pyramid-hero__content">
          <p className="page-eyebrow">Tea Bags & ODM</p>
          <h1>Premium Pyramid Tea Bags</h1>
          <p>
            Ready-to-sell Chinese tea collections and low-MOQ ODM solutions for tea brands, retailers and
            distributors.
          </p>
          <div className="pyramid-hero__highlights" aria-label="Pyramid tea bag order highlights">
            <span>Ready-to-Sell MOQ 50 Boxes</span>
            <span>ODM MOQ 100 Boxes</span>
          </div>
          <div className="pyramid-actions">
            <a className="page-button" href="/contact">Get Wholesale Quote</a>
            <a className="pyramid-button-secondary" href="/contact">Start Your ODM Project</a>
          </div>
        </div>
      </section>

      <section className="pyramid-intro">
        <h2>A Faster Way to Bring Chinese Tea to Market</h2>
        <div>
          <p>
            Choose from our ready-developed pyramid tea bag collection for direct wholesale, or customize the packaging
            with your own branding through our low-MOQ ODM service.
          </p>
          <p>
            Our four tea varieties are individually packed in convenient pyramid tea bags, making them suitable for tea
            shops, specialty retailers, distributors and growing tea brands.
          </p>
        </div>
      </section>

      <section className="pyramid-section pyramid-section--tinted">
        <div className="pyramid-section__heading">
          <p className="page-eyebrow">Our Collection</p>
          <h2>Four Ready-Developed Tea Varieties</h2>
          <p>A curated collection of floral green and black teas, available in our existing packaging or for ODM customization.</p>
        </div>
        <div className="pyramid-product-grid">
          {productCards.map((product) => (
            <article className="pyramid-product-card" key={product.title}>
              <img
                src={product.image}
                alt={product.alt}
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <div className="pyramid-product-card__body">
                <h3>{product.title}</h3>
                <p className="pyramid-product-card__profile">{product.profile}</p>
                <p>{product.description}</p>
                <dl>
                  <div><dt>Format</dt><dd>25 Pyramid Tea Bags</dd></div>
                  <div><dt>Tea Bag Weight</dt><dd>2g Each</dd></div>
                  <div><dt>Net Weight</dt><dd>50g</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pyramid-section pyramid-moments">
        <div className="pyramid-section__heading">
          <h2>Made for Different Tea Moments</h2>
          <p>
            From a warm everyday cup to refreshing iced tea, our pyramid tea bags offer a convenient format for modern
            tea service.
          </p>
        </div>
        <div className="pyramid-moment-grid">
          {teaMoments.map((group) => (
            <article className="pyramid-moment-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="pyramid-moment-group__images">
                {group.items.map((item) => (
                  <figure key={item.label}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      width="1200"
                      height="800"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{item.label}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pyramid-section pyramid-order-options">
        <div className="pyramid-section__heading">
          <p className="page-eyebrow">Flexible Order Options</p>
          <h2>Two Ways to Start</h2>
        </div>
        <div className="pyramid-order-grid">
          {orderOptions.map((option) => (
            <article className="pyramid-order-card" key={option.title}>
              <span className="pyramid-order-card__quantity">{option.quantity}</span>
              <h3>{option.title}</h3>
              <p>{option.intro}</p>
              <ul>
                {option.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a className="page-button" href="/contact">{option.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="pyramid-section pyramid-odm">
        <img
          className="pyramid-odm__image"
          src="/images/pyramid-tea-bags/pyramid-tea-bags-odm.webp"
          alt="Custom packaging example for ODM pyramid tea bags"
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
        />
        <div className="pyramid-odm__copy">
          <p className="page-eyebrow">Low-MOQ ODM</p>
          <h2>Make It Your Brand</h2>
          <p>
            Start with one of our ready-developed pyramid tea bag products and adapt the packaging to your own brand
            identity.
          </p>
          <p>
            Our ODM option is designed for tea businesses that want to test the market without developing a completely
            new tea product from scratch.
          </p>
          <strong>ODM MOQ from 100 Boxes</strong>
          <div className="pyramid-odm-steps">
            {odmSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <a className="page-button" href="/contact">Discuss Your ODM Project</a>
        </div>
      </section>

      <section className="pyramid-section pyramid-section--tinted pyramid-specs">
        <div className="pyramid-section__heading">
          <h2>Product Specifications</h2>
        </div>
        <div className="pyramid-spec-grid">
          {specifications.map(([label, value]) => (
            <div className="pyramid-spec" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="pyramid-section pyramid-comparison">
        <div className="pyramid-section__heading">
          <h2>ODM or Full Private Label?</h2>
        </div>
        <div className="pyramid-comparison-grid">
          {comparison.map((column) => (
            <article className="pyramid-comparison-card" key={column.model}>
              <h3>{column.model}</h3>
              {column.rows.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <p>{value}</p>
                </div>
              ))}
            </article>
          ))}
        </div>
        <div className="pyramid-comparison__cta">
          <div>
            <p>Need a more customized tea solution?</p>
            <p className="pyramid-comparison__resource">
              Learn more about <a href="/tea-knowledge/chinese-tea-grades-wholesale-guide">choosing the right tea specification for your market</a>.
            </p>
          </div>
          <a className="page-button" href="/private-label">Explore Private Label Solutions</a>
        </div>
      </section>

      <section className="pyramid-section pyramid-faq">
        <div className="pyramid-section__heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="inquiry-cta pyramid-final-cta">
        <div>
          <p className="page-eyebrow">Start an Inquiry</p>
          <h2>Ready to Start with Our Pyramid Tea Collection?</h2>
          <p>
            Choose our ready-to-sell collection from 50 boxes, or start your own branded tea line with ODM from 100
            boxes.
          </p>
        </div>
        <div className="article-cta__actions">
          <a className="page-button" href="/contact">Get Wholesale Quote</a>
          <a className="pyramid-button-secondary" href="/contact">Start Your ODM Project</a>
        </div>
      </section>
    </main>
  );
}