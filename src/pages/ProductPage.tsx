import { trackWhatsAppLead } from '../utils/analytics';
import './ProductPage.css';

const WHATSAPP_URL = 'https://wa.me/8618767158838';

type ProductImage = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

type ProductPackagingCard = {
  title: string;
  description: string;
  image?: ProductImage;
};

type ProductProcessSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  video: {
    src: string;
    poster: string;
    caption: string;
  };
};

type ProductComparisonSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items?: string[];
  link: {
    href: string;
    label: string;
  };
};

export type ProductPageData = {
  url: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: ProductImage;
  whatsappLocation: string;
  highlights: string[];
  processSection?: ProductProcessSection;
  qualitySection?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items: string[];
  };
  recommendedFor: string[];
  packagingCards: ProductPackagingCard[];
  packagingNote: string;
  galleryImages: ProductImage[];
  comparison: ProductComparisonSection;
  finalCta: {
    eyebrow: string;
    title: string;
    text: string;
  };
};

export const JASMINE_FLOWERS_PRODUCT_URL = '/products/jasmine-tea-with-flowers';
export const TRADITIONAL_JASMINE_PRODUCT_URL = '/products/traditional-jasmine-tea';
export const ANCIENT_TREE_BLACK_TEA_PRODUCT_URL = '/products/ancient-tree-black-tea';

export const productPages: Record<string, ProductPageData> = {
  [JASMINE_FLOWERS_PRODUCT_URL]: {
    url: JASMINE_FLOWERS_PRODUCT_URL,
    seoTitle: 'Jasmine Tea With Flowers for Wholesale & Private Label | QL Tea Life',
    seoDescription:
      'Wholesale jasmine tea with visible flowers for retail brands, gift packaging, tea shops and private label projects. MOQ from 10kg.',
    ogImage: '/images/products/jasmine-tea-with-flowers/dry-tea.webp',
    eyebrow: 'Wholesale Jasmine Tea',
    title: 'Jasmine Tea With Flowers',
    subtitle: 'A visually beautiful jasmine green tea with natural floral appearance.',
    description:
      'Jasmine Tea With Flowers combines green tea with visible jasmine blossoms, making it suitable for retail shelves, gift packaging, lifestyle tea brands, and private label tea projects.',
    heroImage: {
      src: '/images/products/jasmine-tea-with-flowers/dry-tea.webp',
      alt: 'Jasmine tea with visible flowers for wholesale and private label projects',
      width: '1500',
      height: '1500',
    },
    whatsappLocation: 'product_jasmine_tea_with_flowers',
    highlights: [
      'Visible Jasmine Blossoms',
      'Fresh Floral Appearance',
      'Retail Ready Style',
      'Private Label Available',
    ],
    recommendedFor: [
      'Tea shops',
      'Retail brands',
      'Gift sets',
      'Lifestyle tea products',
      'Private label projects',
    ],
    packagingCards: [
      {
        title: 'Retail Pouch Packaging',
        description: 'Ideal for 100g / 200g retail tea products, supermarket shelves, and daily tea brands.',
        image: {
          src: '/images/products/jasmine-tea-with-flowers/jasmine-tea-retail-pouch.webp',
          alt: 'Retail pouch packaging direction for jasmine tea',
          width: '1024',
          height: '1024',
        },
      },
      {
        title: 'Premium Packaging',
        description: 'Suitable for gift sets, premium retail positioning, and seasonal promotions.',
        image: {
          src: '/images/products/jasmine-tea-with-flowers/jasmine-tea-premium-packaging.webp',
          alt: 'Premium tin packaging direction for jasmine tea gift products',
          width: '1440',
          height: '1440',
        },
      },
    ],
    packagingNote: 'Packaging can be customized based on your brand positioning, target market, and order quantity.',
    galleryImages: [
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
    ],
    comparison: {
      eyebrow: 'Product Guidance',
      title: 'With Flowers or Without Flowers?',
      paragraphs: [
        'Jasmine tea with visible flowers is often chosen for visual appeal and retail presentation. Traditional jasmine tea without visible flowers focuses more on scenting craftsmanship and clean tea appearance. The best choice depends on your market positioning.',
      ],
      link: {
        href: '/tea-knowledge/jasmine-tea-with-flowers-or-without',
        label: 'Jasmine Tea With Flowers or Without: Which Is Better?',
      },
    },
    finalCta: {
      eyebrow: 'Wholesale Inquiry',
      title: 'Looking for Jasmine Tea With Flowers for Your Brand?',
      text: 'Contact QL Tea Life for samples, wholesale supply, and private label packaging options.',
    },
  },
  [TRADITIONAL_JASMINE_PRODUCT_URL]: {
    url: TRADITIONAL_JASMINE_PRODUCT_URL,
    seoTitle: 'Traditional Jasmine Tea for Wholesale & Private Label | QL Tea Life',
    seoDescription:
      'Traditional Chinese jasmine tea made through classic scenting craftsmanship. Suitable for wholesale buyers, tea shops and private label brands.',
    ogImage: '/images/products/traditional-jasmine-tea/traditional-jasmine-tea.webp',
    eyebrow: 'Wholesale Jasmine Tea',
    title: 'Traditional Jasmine Tea',
    subtitle: 'Rich jasmine aroma created through traditional scenting craftsmanship.',
    description:
      'Traditional Jasmine Tea is made by carefully combining green tea leaves with fresh jasmine blossoms through a traditional scenting process. The tea absorbs the natural floral aroma while maintaining a clean and balanced tea profile.',
    heroImage: {
      src: '/images/products/traditional-jasmine-tea/traditional-jasmine-tea.webp',
      alt: 'Traditional jasmine tea leaves without visible flowers for wholesale buyers',
      width: '1200',
      height: '900',
    },
    whatsappLocation: 'product_traditional_jasmine_tea',
    highlights: [
      'Traditional Scenting Process',
      'Natural Jasmine Aroma',
      'Clean Tea Appearance',
      'Private Label Available',
    ],
    processSection: {
      eyebrow: 'Traditional Craftsmanship',
      title: 'Traditional Jasmine Tea Scenting Process',
      paragraphs: [
        'Traditional Jasmine Tea is created by layering tea leaves with fresh jasmine blossoms so the tea naturally absorbs the floral aroma.',
        'After scenting, the flowers are removed to maintain a clean tea appearance while preserving a rich jasmine fragrance and balanced tea taste.',
      ],
      video: {
        src: '/images/tea-knowledge/jasmine-tea-making/jasmine-scenting-process.mp4',
        poster: '/images/tea-knowledge/jasmine-tea-making/jasmine-scenting-process.webp',
        caption: 'Fresh jasmine blossoms are carefully combined with tea leaves during the traditional scenting process.',
      },
    },
    qualitySection: {
      eyebrow: 'Quality Guidance',
      title: 'Why Premium Jasmine Tea May Have Few Visible Flowers',
      paragraphs: [
        'Many premium jasmine teas do not contain many visible jasmine flowers in the finished product. This is because the flowers are mainly used to transfer aroma during the scenting process.',
        'After the tea absorbs the fragrance, flowers may be removed to keep the finished tea clean, stable, and suitable for long-term storage and international shipping.',
      ],
      items: [
        'Cleaner finished tea appearance',
        'More consistent aroma and taste',
        'Better storage stability for wholesale supply',
        'Suitable presentation for premium loose leaf tea brands',
      ],
    },
    recommendedFor: [
      'Specialty tea shops',
      'Premium loose leaf tea brands',
      'Wholesale distributors',
      'Private label projects',
      'Traditional tea markets',
    ],
    packagingCards: [
      {
        title: 'Retail Pouch Packaging',
        description:
          'Suitable for 100g / 200g retail products, supermarket shelves, and private label tea brands.',
        image: {
          src: '/images/products/jasmine-tea-with-flowers/jasmine-tea-retail-pouch.webp',
          alt: 'Retail pouch packaging inspiration for traditional jasmine tea private label projects',
          width: '1024',
          height: '1024',
        },
      },
      {
        title: 'Premium Packaging',
        description:
          'Suitable for gift products, premium positioning, and customized brand concepts.',
        image: {
          src: '/images/products/jasmine-tea-with-flowers/jasmine-tea-premium-packaging.webp',
          alt: 'Premium tea packaging inspiration for traditional jasmine tea brands',
          width: '1440',
          height: '1440',
        },
      },
    ],
    packagingNote:
      'Packaging can be customized according to target market, product positioning, and MOQ.',
    galleryImages: [
      {
        src: '/images/products/traditional-jasmine-tea/traditional-jasmine-tea.webp',
        alt: 'Traditional jasmine tea dry leaves without visible flowers',
      },
      {
        src: '/images/products/traditional-jasmine-tea/dry-tea.webp',
        alt: 'Close-up of traditional jasmine tea leaves',
      },
      {
        src: '/images/products/traditional-jasmine-tea/tea-brewing.webp',
        alt: 'Traditional jasmine tea brewing in a white gaiwan',
      },
    ],
    comparison: {
      eyebrow: 'Product Comparison',
      title: 'Jasmine Tea With Flowers or Traditional Jasmine Tea?',
      paragraphs: [
        'Jasmine Tea With Flowers is often selected for visual retail appeal, while Traditional Jasmine Tea is selected for clean leaf appearance and scenting craftsmanship.',
      ],
      items: [
        'Choose jasmine tea with flowers when visual presentation is the main selling point.',
        'Choose traditional jasmine tea when aroma, clean appearance, and classic tea quality are the priority.',
      ],
      link: {
        href: '/tea-knowledge/jasmine-tea-with-flowers-or-without',
        label: 'Read the full comparison guide',
      },
    },
    finalCta: {
      eyebrow: 'Wholesale Inquiry',
      title: 'Looking for Traditional Jasmine Tea for Your Brand?',
      text: 'QL Tea Life supplies traditional jasmine tea for wholesale, OEM and private label projects.',
    },
  },
  [ANCIENT_TREE_BLACK_TEA_PRODUCT_URL]: {
    url: ANCIENT_TREE_BLACK_TEA_PRODUCT_URL,
    seoTitle: 'Ancient Tree Black Tea for Wholesale & Private Label | QL Tea Life',
    seoDescription:
      'Source premium Yunnan Ancient Tree Black Tea for wholesale, private label tea brands and international distribution.',
    ogImage: '/images/products/ancient-tree-black-tea/dry-tea-1.webp',
    eyebrow: 'Wholesale Chinese Black Tea',
    title: 'Ancient Tree Black Tea',
    subtitle: 'Premium Yunnan black tea crafted from centuries-old tea trees.',
    description:
      'Ancient Tree Black Tea is a premium Yunnan black tea selected for its naturally rich aroma, smooth body and distinctive origin character. It is suitable for specialty tea brands, wholesale buyers and private label tea programs.',
    heroImage: {
      src: '/images/products/ancient-tree-black-tea/dry-tea-1.webp',
      alt: 'Ancient Tree Black Tea dry leaves for wholesale and private label projects',
      width: '4672',
      height: '4672',
    },
    whatsappLocation: 'product_ancient_tree_black_tea',
    highlights: [
      'Yunnan Black Tea',
      'Ancient Tree Origin',
      'Rich Natural Aroma',
      'Private Label Available',
    ],
    recommendedFor: [
      'Specialty tea brands',
      'Wholesale distributors',
      'Premium retail collections',
      'Private label black tea projects',
    ],
    packagingCards: [
      {
        title: 'Loose Leaf Retail Packaging',
        description: 'Suitable for premium pouches, tins and gift-oriented black tea collections.',
      },
      {
        title: 'Wholesale Bulk Supply',
        description: 'Prepared for importers, distributors and tea brands requiring stable black tea sourcing.',
      },
    ],
    packagingNote:
      'Packaging can be customized according to product positioning, market requirements and order quantity.',
    galleryImages: [
      {
        src: '/images/products/ancient-tree-black-tea/dry-tea-1.webp',
        alt: 'Premium Ancient Tree Black Tea leaves',
      },
      {
        src: '/images/products/ancient-tree-black-tea/dry-tea-2.webp',
        alt: 'Close-up reference of Ancient Tree Black Tea dry leaves',
      },
      {
        src: '/images/products/ancient-tree-black-tea/tea-liquor.webp',
        alt: 'Ancient Tree Black Tea liquor reference for buyers',
      },
    ],
    comparison: {
      eyebrow: 'Category Guidance',
      title: 'Explore Chinese Black Tea Options',
      paragraphs: [
        'Ancient Tree Black Tea is well suited for buyers seeking a premium Yunnan black tea with strong origin appeal and refined loose leaf positioning.',
      ],
      link: {
        href: '/black-tea',
        label: 'Back to Black Tea Collection',
      },
    },
    finalCta: {
      eyebrow: 'Wholesale Inquiry',
      title: 'Looking for Ancient Tree Black Tea?',
      text: 'Contact QL Tea Life for samples, wholesale supply and private label packaging options.',
    },
  },
};

type ProductPageProps = {
  page: ProductPageData;
};

function trackProductWhatsAppClick(location: string) {
  trackWhatsAppLead({
    contact_method: 'whatsapp',
    location,
  });
}

function ProductImage({ image, className }: { image: ProductImage; className?: string }) {
  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt}
      width={image.width ?? '1200'}
      height={image.height ?? '900'}
      loading="lazy"
      decoding="async"
    />
  );
}

const ancientTreeStoryParagraphs = [
  'Hidden in the mountains of Gui’an, Guizhou, lies the Yang’ai Tea Garden, home to more than 9,600 ancient tea trees. Some of these trees have grown for over a century, with the oldest reaching nearly 300 years.',
  'Located near the 27°N latitude tea-growing region, this unique environment provides ideal conditions for tea cultivation. High elevation, frequent mist, rich soil, and significant temperature differences between day and night allow the ancient tea trees to develop their own distinctive character.',
  'Unlike ordinary tea plantations, these ancient trees grow naturally with minimal human intervention. Their deep root systems absorb nutrients from the surrounding soil over generations, creating leaves with a naturally rich aroma, smooth texture, and complex flavor.',
  'Due to the height and natural growth pattern of these ancient tea trees, mechanical harvesting is not possible. Each harvest season, experienced tea workers carefully select and hand-pick the tender leaves from the trees.',
  'This traditional harvesting method requires patience and craftsmanship, preserving the unique qualities of the ancient tea leaves while carrying forward generations of tea-making knowledge.',
];

const ancientStoryImages: ProductImage[] = [
  {
    src: '/images/products/ancient-tree-black-tea/ancient-tea-tree.webp',
    alt: 'Ancient tea tree growing naturally in Yang’ai Tea Garden in Guizhou',
    width: '960',
    height: '1280',
  },
  {
    src: '/images/products/ancient-tree-black-tea/tea-grower-ancient-tree.webp',
    alt: 'Tea grower standing beside an ancient tea tree during hand harvesting',
    width: '720',
    height: '1280',
  },
];

const ancientAppearanceImages: Array<ProductImage & { caption: string }> = [
  {
    src: '/images/products/ancient-tree-black-tea/dry-tea-1.webp',
    alt: 'Ancient Tree Black Tea dry leaves displayed for premium loose leaf tea sourcing',
    width: '4672',
    height: '4672',
    caption: 'Dry Tea Appearance',
  },
  {
    src: '/images/products/ancient-tree-black-tea/dry-tea-2.webp',
    alt: 'Close-up of Ancient Tree Black Tea dry leaves with rich black tea color',
    width: '1000',
    height: '1000',
    caption: 'Leaf Detail',
  },
  {
    src: '/images/products/ancient-tree-black-tea/tea-liquor.webp',
    alt: 'Ancient Tree Black Tea liquor with warm amber infusion color',
    width: '1000',
    height: '1000',
    caption: 'Tea Infusion',
  },
];

const ancientSpecifications = [
  ['Tea Type', 'Chinese Black Tea'],
  ['Origin', 'Yang’ai Tea Garden, Gui’an, Guizhou'],
  ['Tree Source', 'Ancient tea trees, including trees over 100 years old'],
  ['Harvesting', 'Hand-picked tender leaves'],
  ['Flavor Character', 'Rich aroma, smooth texture and complex natural sweetness'],
  ['Best For', 'Premium loose leaf tea, private label projects and gift packaging'],
];

const ancientBrewingGuide = [
  ['Tea Amount', '3–5g'],
  ['Water Temperature', '90–95°C'],
  ['Steeping Time', '3–5 minutes'],
  ['Infusions', 'Multiple infusions depending on leaf grade and preference'],
];

const ancientPackagingSolutions = [
  'Bulk tea supply',
  'Custom labeled products',
  'Retail packaging',
  'Gift packaging',
];

const ancientFaqs = [
  {
    question: 'What makes Ancient Tree Black Tea different?',
    answer:
      'Ancient Tree Black Tea comes from mature tea trees with deep root systems and natural growing conditions, creating a richer aroma, smoother texture and stronger origin story than ordinary plantation tea.',
  },
  {
    question: 'Is Ancient Tree Black Tea suitable for private label projects?',
    answer:
      'Yes. Its premium origin positioning makes it suitable for specialty loose leaf tea brands, curated black tea collections, retail tins, gift packaging and private label tea programs.',
  },
  {
    question: 'Can I order samples before wholesale purchase?',
    answer:
      'Yes. Samples can be arranged so buyers can evaluate dry leaf appearance, aroma, infusion color and flavor before confirming wholesale or private label orders.',
  },
  {
    question: 'What packaging options are available?',
    answer:
      'Available options include bulk tea supply, custom labels, retail pouches, tins and gift packaging based on your brand positioning and target market.',
  },
];

function AncientTreeBlackTeaPage({ page }: ProductPageProps) {
  return (
    <main className="product-page ancient-tree-page">
      <section className="product-hero">
        <div className="product-hero__copy">
          <p className="page-eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="product-hero__subtitle">{page.subtitle}</p>
          <p>{page.description}</p>
          <a
            className="product-button product-button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProductWhatsAppClick(page.whatsappLocation)}
          >
            Request Wholesale Quote
          </a>
        </div>
        <figure className="product-hero__visual">
          <img
            src={page.heroImage.src}
            alt={page.heroImage.alt}
            width={page.heroImage.width ?? '1200'}
            height={page.heroImage.height ?? '900'}
            decoding="async"
          />
        </figure>
      </section>

      <section className="product-section ancient-tree-story">
        <div className="ancient-tree-story__copy">
          <p className="page-eyebrow">Ancient Tree Origin</p>
          <h2>A Rare Tea Rooted in Ancient Tea Trees</h2>
          {ancientTreeStoryParagraphs.slice(0, 3).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3>Harvested by Hand, Preserving a Tea Tradition</h3>
          {ancientTreeStoryParagraphs.slice(3).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="ancient-tree-story__images">
          {ancientStoryImages.map((image) => (
            <figure key={image.src}>
              <ProductImage image={image} />
            </figure>
          ))}
        </div>
      </section>

      <section className="product-section ancient-appearance">
        <div className="ancient-section-heading">
          <p className="page-eyebrow">Tasting Reference</p>
          <h2>Tea Appearance &amp; Infusion</h2>
        </div>
        <div className="ancient-appearance__grid">
          {ancientAppearanceImages.map((image) => (
            <figure key={image.src}>
              <ProductImage image={image} />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="product-section ancient-highlight-section">
        <p className="page-eyebrow">Product Highlights</p>
        <div className="product-highlight-grid">
          {page.highlights.map((highlight, index) => (
            <article key={highlight}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{highlight}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section ancient-profile">
        <div className="ancient-section-heading">
          <p className="page-eyebrow">Tea Profile</p>
          <h2>Specifications</h2>
        </div>
        <dl className="ancient-spec-grid">
          {ancientSpecifications.map(([term, detail]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="product-section ancient-brewing">
        <div className="ancient-section-heading">
          <p className="page-eyebrow">Brewing Guide</p>
          <h2>Suggested Brewing Method</h2>
        </div>
        <div className="ancient-brewing__grid">
          {ancientBrewingGuide.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section ancient-packaging">
        <div>
          <p className="page-eyebrow">Packaging &amp; Private Label</p>
          <h2>Available Packaging &amp; Private Label Solutions</h2>
          <p>
            Ancient Tree Black Tea can be prepared for wholesale supply, premium retail collections and private label tea programs.
          </p>
        </div>
        <ul className="ancient-packaging__list">
          {ancientPackagingSolutions.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="product-section ancient-faq">
        <div className="ancient-section-heading">
          <p className="page-eyebrow">FAQ</p>
          <h2>Wholesale Ancient Tree Black Tea FAQ</h2>
        </div>
        <div className="ancient-faq__list">
          {ancientFaqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="product-section product-guidance">
        <div>
          <p className="page-eyebrow">{page.comparison.eyebrow}</p>
          <h2>{page.comparison.title}</h2>
        </div>
        <div className="product-guidance__body">
          {page.comparison.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {page.comparison.items ? (
            <ul>
              {page.comparison.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : null}
          <a className="text-link" href={page.comparison.link.href}>
            {page.comparison.link.label}
          </a>
        </div>
      </section>

      <section className="product-cta">
        <div>
          <p className="page-eyebrow">{page.finalCta.eyebrow}</p>
          <h2>{page.finalCta.title}</h2>
          <p>{page.finalCta.text}</p>
        </div>
        <div className="product-cta__actions">
          <a className="product-button" href="/contact">Contact Us</a>
          <a
            className="product-button product-button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProductWhatsAppClick(page.whatsappLocation)}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

export default function ProductPage({ page }: ProductPageProps) {
  if (page.url === ANCIENT_TREE_BLACK_TEA_PRODUCT_URL) {
    return <AncientTreeBlackTeaPage page={page} />;
  }

  return (
    <main className="product-page">
      <section className="product-hero">
        <div className="product-hero__copy">
          <p className="page-eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="product-hero__subtitle">{page.subtitle}</p>
          <p>{page.description}</p>
          <a
            className="product-button product-button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProductWhatsAppClick(page.whatsappLocation)}
          >
            Request Wholesale Quote
          </a>
        </div>
        <figure className="product-hero__visual">
          <img
            src={page.heroImage.src}
            alt={page.heroImage.alt}
            width={page.heroImage.width ?? '1200'}
            height={page.heroImage.height ?? '900'}
            decoding="async"
          />
        </figure>
      </section>

      <section className="product-section">
        <p className="page-eyebrow">Product Highlights</p>
        <div className="product-highlight-grid">
          {page.highlights.map((highlight, index) => (
            <article key={highlight}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{highlight}</h2>
            </article>
          ))}
        </div>
      </section>

      {page.processSection ? (
        <section className="product-section product-process">
          <div className="product-process__copy">
            <p className="page-eyebrow">{page.processSection.eyebrow}</p>
            <h2>{page.processSection.title}</h2>
            {page.processSection.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="product-video">
            <video
              controls
              preload="metadata"
              poster={page.processSection.video.poster}
            >
              <source src={page.processSection.video.src} type="video/mp4" />
            </video>
            <figcaption>{page.processSection.video.caption}</figcaption>
          </figure>
        </section>
      ) : null}

      {page.qualitySection ? (
        <section className="product-section product-quality">
          <div>
            <p className="page-eyebrow">{page.qualitySection.eyebrow}</p>
            <h2>{page.qualitySection.title}</h2>
            {page.qualitySection.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="product-use-list">
            {page.qualitySection.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      ) : null}

      <section className="product-section product-section--split">
        <div>
          <p className="page-eyebrow">Recommended For</p>
          <h2>B2B Applications</h2>
        </div>
        <ul className="product-use-list">
          {page.recommendedFor.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="product-section">
        <p className="page-eyebrow">Packaging Inspiration</p>
        <h2>Packaging Direction for Your Brand</h2>
        <div className="product-packaging-grid">
          {page.packagingCards.map((card) => (
            <article key={card.title}>
              {card.image ? <ProductImage image={card.image} /> : null}
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="product-note">{page.packagingNote}</p>
      </section>

      <section className="product-section">
        <p className="page-eyebrow">Product Gallery</p>
        <h2>Visual Product Reference</h2>
        <div className="product-gallery">
          {page.galleryImages.map((image) => (
            <figure key={image.src}>
              <ProductImage image={image} />
            </figure>
          ))}
        </div>
      </section>

      <section className="product-section product-guidance">
        <div>
          <p className="page-eyebrow">{page.comparison.eyebrow}</p>
          <h2>{page.comparison.title}</h2>
        </div>
        <div className="product-guidance__body">
          {page.comparison.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {page.comparison.items ? (
            <ul>
              {page.comparison.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : null}
          <a className="text-link" href={page.comparison.link.href}>
            {page.comparison.link.label}
          </a>
        </div>
      </section>

      <section className="product-cta">
        <div>
          <p className="page-eyebrow">{page.finalCta.eyebrow}</p>
          <h2>{page.finalCta.title}</h2>
          <p>{page.finalCta.text}</p>
        </div>
        <div className="product-cta__actions">
          <a className="product-button" href="/contact">Contact Us</a>
          <a
            className="product-button product-button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProductWhatsAppClick(page.whatsappLocation)}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
