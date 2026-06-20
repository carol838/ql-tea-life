import type { ReactNode } from 'react';
import './PageTemplates.css';

type Benefit = {
  title: string;
  description: string;
  icon: 'flower' | 'leaf' | 'tag' | 'globe';
};

type Product = {
  title: string;
  description: string;
  image?: string;
};

export type TeaCategory = {
  name: string;
  label: string;
  intro: string;
  heroSubtitle?: [string, string];
  seoTitle: string;
  heroImage: string;
  lifestyleImage: string | null;
  aboutTitle: string;
  about: string[];
  benefits: Benefit[];
  products: Product[];
  faqs: [string, string][];
};

const commonBenefits = (qualityTitle: string, qualityDescription: string): Benefit[] => [
  { title: qualityTitle, description: qualityDescription, icon: 'leaf' },
  { title: 'Consistent Wholesale Supply', description: 'Reliable formats and specifications for repeat orders.', icon: 'flower' },
  { title: 'Private Label Options', description: 'Flexible tea bags, retail packs, and custom branding support.', icon: 'tag' },
  { title: 'Worldwide Export Support', description: 'Commercial support for importers, distributors, and tea brands.', icon: 'globe' },
];

const commonFaqs = (
  category: string,
  formatAnswer: string,
  qualityAnswer: string,
): [string, string][] => [
  [`What is the MOQ for wholesale ${category}?`, `MOQ depends on grade, format, packaging, and customization requirements.`],
  [`Which ${category} formats are available?`, formatAnswer],
  [`How do you manage ${category} quality?`, qualityAnswer],
  ['Do you provide private label and export support?', 'Yes. Private label packaging and international export support are available for qualified projects.'],
];

export const teaCategories: Record<string, TeaCategory> = {
  '/jasmine-tea': {
    name: 'Jasmine Tea',
    label: 'Chinese Tea Wholesale',
    intro: 'Fragrant Chinese jasmine teas prepared for wholesale, private label and international distribution.',
    heroSubtitle: ['Fragrant Chinese Jasmine Tea', 'For Global Buyers'],
    seoTitle: 'Jasmine Tea Wholesale & Private Label | QL Tea Life',
    heroImage: '/images/category-hero/jasmine-tea-hero.jpg',
    lifestyleImage: '/images/jasmine-tea/jasmine-tea-garden.jpg',
    aboutTitle: 'About Chinese Jasmine Tea',
    about: [
      'Jasmine tea is one of the most popular scented teas in the world.',
      'Produced by repeatedly scenting tea leaves with fresh jasmine flowers, it combines the freshness of green tea with a delicate floral aroma.',
      'Our jasmine tea collection includes jasmine green tea, jasmine dragon pearls, loose leaf tea, tea bags, and private label solutions for global tea buyers.',
    ],
    benefits: [
      { title: 'Natural Jasmine Scenting', description: 'Traditional scenting process using real jasmine flowers.', icon: 'flower' },
      { title: 'Carefully Selected Tea Leaves', description: 'High-quality tea leaves sourced from trusted tea regions.', icon: 'leaf' },
      { title: 'Wholesale & Private Label', description: 'Flexible packaging and branding solutions.', icon: 'tag' },
      { title: 'Worldwide Export Support', description: 'Supporting tea brands, distributors, and tea shops globally.', icon: 'globe' },
    ],
    products: [
      { title: 'Jasmine Green Tea', description: 'Traditional Chinese green tea scented with fresh jasmine flowers.', image: '/images/jasmine-tea/jasmine-green-tea.jpg' },
      { title: 'Jasmine Dragon Pearls', description: 'Hand-rolled jasmine tea pearls with rich floral aroma.', image: '/images/jasmine-tea/jasmine-dragon-pearls.jpg' },
      { title: 'Jasmine Tea Bags', description: 'Convenient tea bag format suitable for retail and private label projects.', image: '/images/jasmine-tea/jasmine-tea-bags.jpg' },
    ],
    faqs: commonFaqs('jasmine tea', 'Loose leaf tea, dragon pearls, tea bags, and custom retail packs are available.', 'We evaluate the tea base, jasmine aroma, scenting consistency, moisture, and finished appearance.'),
  },
  '/green-tea': {
    name: 'Green Tea',
    label: 'Chinese Green Tea Wholesale',
    intro: 'Fresh Chinese green teas sourced for importers, distributors, tea brands, and foodservice buyers.',
    heroSubtitle: ['Pure Chinese Green Tea', 'For Wholesale Buyers'],
    seoTitle: 'Chinese Green Tea Wholesale & Private Label | QL Tea Life',
    heroImage: '/images/category-hero/green-tea-hero.png',
    lifestyleImage: '/images/category-intro/tea-garden.png',
    aboutTitle: 'About Chinese Green Tea',
    about: [
      'Chinese green tea is valued for its fresh aroma, clean character, and wide appeal across retail and hospitality markets.',
      'Careful heat processing limits oxidation and preserves the natural green appearance and distinctive regional flavor of the leaves.',
      'We support wholesale loose leaf tea, tea bags, custom grades, and private label green tea programs for international buyers.',
    ],
    benefits: commonBenefits('Fresh Seasonal Selection', 'Green teas selected for clean aroma, leaf appearance, and dependable cup quality.'),
    products: [
      { title: 'Longjing Tea', description: 'Flat-leaf Chinese green tea with a fresh, smooth, and lightly roasted profile.', image: '/images/tea-collection/categories/green-tea.jpg' },
      { title: 'Dian Green Tea', description: 'A vibrant Chinese green tea from Yunnan, known for its fresh aroma, rich body and lasting sweetness.', image: '/images/green-tea/dian-green-tea.jpg' },
      { title: 'Mao Feng Green Tea', description: 'A classic Chinese green tea with tender leaves, delicate chestnut notes and a smooth refreshing taste.', image: '/images/green-tea/mao-feng-green-tea.jpg' },
    ],
    faqs: commonFaqs('green tea', 'Loose leaf grades, tea bags, bulk cartons, and private label retail formats are available.', 'We review harvest timing, leaf shape, color, aroma, moisture, and liquor quality.'),
  },
  '/black-tea': {
    name: 'Black Tea',
    label: 'Chinese Black Tea Wholesale',
    intro: 'Full-bodied Chinese black teas available for bulk supply, blending, and custom branded programs.',
    heroSubtitle: ['Rich Chinese Black Tea', 'For Global Distribution'],
    seoTitle: 'Chinese Black Tea Wholesale & Private Label | QL Tea Life',
    heroImage: '/images/category-hero/black-tea-hero.png',
    lifestyleImage: '/images/category-intro/tea-garden.png',
    aboutTitle: 'About Chinese Black Tea',
    about: [
      'Chinese black tea offers rich color, smooth body, and naturally sweet or malty aromas for diverse international markets.',
      'Full oxidation develops its deeper character and makes it suitable for straight tea, breakfast blends, milk tea, and flavored products.',
      'Our sourcing options include premium whole leaf grades, commercial blends, tea bags, and private label black tea solutions.',
    ],
    benefits: commonBenefits('Rich Flavor Profiles', 'Black teas selected for liquor color, aroma, body, and blending performance.'),
    products: [
      { title: 'Lapsang Souchong', description: 'A famous Chinese black tea from the Wuyi Mountains, known for its rich aroma, smooth body and traditional heritage.', image: '/images/tea-collection/categories/black-tea.jpg' },
      { title: 'Dian Hong Black Tea', description: 'A premium Yunnan black tea with golden tips, natural sweetness and a full-bodied character.', image: '/images/black-tea/dian-hong-black-tea.jpg' },
      { title: 'Black Tea Bags', description: 'Convenient black tea bag solutions suitable for retail, gifting and private label projects.', image: '/images/black-tea/black-tea-bags.jpg' },
    ],
    faqs: commonFaqs('black tea', 'Whole leaf, broken leaf, blending grades, tea bags, and custom packs are available.', 'We assess oxidation, aroma, liquor color, taste consistency, moisture, and grade specifications.'),
  },
  '/oolong-tea': {
    name: 'Oolong Tea',
    label: 'Chinese Oolong Tea Wholesale',
    intro: 'Distinctive Chinese oolong teas selected for aroma, balance, premium positioning, and dependable supply.',
    heroSubtitle: ['Authentic Chinese Oolong Tea', 'For Premium Tea Programs'],
    seoTitle: 'Chinese Oolong Tea Wholesale & Private Label | QL Tea Life',
    heroImage: '/images/category-hero/oolong-tea-hero.png',
    lifestyleImage: '/images/category-intro/tea-garden.png',
    aboutTitle: 'About Chinese Oolong Tea',
    about: [
      'Oolong tea combines partial oxidation with skilled rolling and roasting to create complex floral, fruity, mineral, or roasted profiles.',
      'Regional styles range from fragrant Tie Guan Yin to deeply roasted Wuyi rock teas, offering strong premium potential for specialty buyers.',
      'We provide wholesale oolong tea, sample selection, custom roasting profiles, tea bags, and private label packaging support.',
    ],
    benefits: commonBenefits('Complex Regional Styles', 'Oolong teas selected for aroma, roast level, mouthfeel, and multiple-infusion performance.'),
    products: [
      { title: 'Rougui Oolong Tea', description: 'A traditional Wuyi Rock Tea known for its distinctive cinnamon aroma, rich body and long-lasting finish.', image: '/images/tea-collection/categories/oolong-tea.jpg' },
      { title: 'Shui Xian Oolong Tea', description: 'A classic Wuyi Oolong Tea with floral notes, smooth texture and a balanced, mellow character.', image: '/images/oolong-tea/shui-xian-oolong-tea.jpg' },
      { title: 'Oolong Tea Bags', description: 'Convenient oolong tea bag solutions suitable for retail, gifting and private label projects.', image: '/images/oolong-tea/oolong-tea-bags.jpg' },
    ],
    faqs: commonFaqs('oolong tea', 'Rolled oolong, strip-style oolong, roasted grades, tea bags, and private label packs are available.', 'We evaluate origin, oxidation, roasting, aroma, liquor, leaf integrity, and infusion performance.'),
  },
  '/herbal-tea': {
    name: 'Herbal Tea',
    label: 'Herbal Tea Wholesale',
    intro: 'Herbal infusions prepared for buyers seeking caffeine-free products, wellness positioning, and flexible formats.',
    heroSubtitle: ['Natural Herbal Infusions', 'For Wellness Markets'],
    seoTitle: 'Herbal Tea Wholesale, Blends & Private Label | QL Tea Life',
    heroImage: '/images/category-hero/herbal-tea-hero.png',
    lifestyleImage: '/images/category-intro/herbal-tea-lifestyle.png',
    aboutTitle: 'About Herbal Tea and Infusions',
    about: [
      'Herbal tea brings together flowers, fruits, leaves, roots, and botanicals to create caffeine-free beverages with broad consumer appeal.',
      'Ingredient selection and blending can support wellness, seasonal, gifting, and everyday refreshment product concepts.',
      'We assist buyers with bulk botanicals, custom blends, tea bags, retail packaging, and private label herbal tea development.',
    ],
    benefits: commonBenefits('Flexible Botanical Blends', 'Ingredients and blends developed for flavor, appearance, and target-market positioning.'),
    products: [
      { title: 'Herbal Flower Blend', description: 'Colorful botanical blend designed for aromatic, caffeine-free infusions.', image: '/images/tea-collection/categories/herbal-tea.jpg' },
      { title: 'Wellness Herbal Tea', description: 'A carefully selected blend of botanical ingredients designed for daily wellness and herbal tea programs.', image: '/images/herbal-tea/wellness-herbal-tea.jpg' },
      { title: 'Herbal Tea Bags', description: 'Convenient herbal tea bag solutions suitable for retail, gifting and private label projects.', image: '/images/herbal-tea/herbal-tea-bags.jpg' },
    ],
    faqs: commonFaqs('herbal tea', 'Bulk botanicals, custom blends, pyramid bags, sachets, and retail packaging are available.', 'We review ingredient identity, cleanliness, moisture, sensory quality, and blend consistency.'),
  },
  '/flavoured-tea': {
    name: 'Flavoured Tea',
    label: 'Flavoured Tea Wholesale',
    intro: 'Custom flavoured tea concepts developed for retail brands, hospitality, gifting, and specialty tea markets.',
    heroSubtitle: ['Creative Tea Blends', 'For Modern Tea Brands'],
    seoTitle: 'Flavoured Tea Wholesale & Custom Blends | QL Tea Life',
    heroImage: '/images/category-hero/flavoured-tea-hero.png',
    lifestyleImage: '/images/category-intro/tea-garden.png',
    aboutTitle: 'About Flavoured Tea',
    about: [
      'Flavoured tea combines a tea or herbal base with fruits, flowers, spices, or carefully selected flavor profiles.',
      'These blends help brands create distinctive collections for seasonal launches, gifting, lifestyle retail, and hospitality menus.',
      'We support blend development, format selection, packaging coordination, and private label flavoured tea projects.',
    ],
    benefits: commonBenefits('Custom Flavor Development', 'Blend concepts tailored to audience, format, and market positioning.'),
    products: [
      { title: 'Fruit Tea Blend', description: 'Bright fruit and botanical blend with strong visual and aromatic appeal.', image: '/images/tea-collection/categories/flavoured-tea.jpg' },
      { title: 'Floral Tea Blend', description: 'A fragrant blend of tea leaves and flowers, combining natural floral aromas with a smooth and balanced tea profile.', image: '/images/flavoured-tea/floral-tea-blend.png' },
      { title: 'Flavoured Tea Bags', description: 'Convenient flavoured tea bag solutions suitable for retail, gifting and private label projects.', image: '/images/flavoured-tea/flavoured-tea-bags.jpg' },
    ],
    faqs: commonFaqs('flavoured tea', 'Loose blends, tea bags, pyramid bags, gift packs, and custom retail packaging are available.', 'We evaluate base tea, ingredient balance, aroma stability, appearance, and batch consistency.'),
  },
  '/white-tea': {
    name: 'White Tea',
    label: 'Chinese White Tea Wholesale',
    intro: 'Delicate Chinese white teas sourced for premium retail, wellness, and specialty tea markets.',
    seoTitle: 'Chinese White Tea Wholesale | QL Tea Life',
    heroImage: '/images/tea-collection/categories/green-tea.jpg',
    lifestyleImage: '/images/tea-collection/categories/green-tea.jpg',
    aboutTitle: 'About Chinese White Tea',
    about: ['White tea is gently withered and dried to preserve delicate sweetness and natural leaf character.'],
    benefits: commonBenefits('Delicate Premium Grades', 'White teas selected for bud quality, sweetness, and clean aging potential.'),
    products: [{ title: 'Silver Needle', description: 'Premium white tea buds for luxury collections.' }, { title: 'White Peony', description: 'Balanced bud-and-leaf white tea.' }, { title: 'Shou Mei', description: 'Fuller-bodied white tea for everyday ranges.' }],
    faqs: commonFaqs('white tea', 'Loose leaf and private label formats are available.', 'We assess buds, leaf condition, aroma, moisture, and liquor.'),
  },
  '/dark-tea': {
    name: 'Dark Tea',
    label: 'Chinese Dark Tea Wholesale',
    intro: 'Post-fermented Chinese teas selected for buyers interested in aged and specialty products.',
    seoTitle: 'Chinese Dark Tea Wholesale | QL Tea Life',
    heroImage: '/images/tea-collection/categories/black-tea.jpg',
    lifestyleImage: '/images/tea-collection/categories/black-tea.jpg',
    aboutTitle: 'About Chinese Dark Tea',
    about: ['Dark tea develops earthy depth and smooth character through post-fermentation and aging.'],
    benefits: commonBenefits('Aged Tea Selection', 'Dark teas selected for fermentation quality, storage, and mature flavor.'),
    products: [{ title: 'Pu-erh Tea', description: 'Post-fermented tea with aging potential.' }, { title: 'Liu Bao Tea', description: 'Smooth dark tea with earthy character.' }, { title: 'Anhua Dark Tea', description: 'Traditional fermented tea for specialty buyers.' }],
    faqs: commonFaqs('dark tea', 'Loose tea, compressed formats, and private label packs are available.', 'We assess fermentation, storage, aroma, liquor, and cleanliness.'),
  },
};

function BenefitIcon({ type }: { type: Benefit['icon'] }) {
  const icons: Record<Benefit['icon'], ReactNode> = {
    flower: <><circle cx="12" cy="12" r="2.5" /><path d="M12 9.5C9 7.8 8.2 5.1 10 3.2c1.6 1.2 2.3 3.4 2 6.3ZM14.2 10.6c.8-3.3 3-4.8 5.4-3.7-.4 2-2.2 3.7-5.4 3.7ZM13.4 14.2c3.4-.3 5.6 1.3 5.5 3.9-2 .4-4.1-.8-5.5-3.9ZM9.7 14.1c-1.3 3.2-3.7 4.3-5.8 2.8.7-1.9 2.8-3.2 5.8-2.8ZM9.6 10.7C6.4 9.9 4.8 7.8 5.8 5.4c2 .3 3.7 2.1 3.8 5.3Z" /></>,
    leaf: <><path d="M20 4c-7.5.5-13 4.7-13 10.4 0 3.1 2.4 5.6 5.5 5.6C18.2 20 21 13.7 20 4Z" /><path d="M5 21c2.7-5.2 6.8-8.5 12.5-10.5" /></>,
    tag: <><path d="M20 13 13 20l-9-9V4h7l9 9Z" /><circle cx="8.5" cy="8.5" r="1.5" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.7 2.5 4 5.5 4 9s-1.3 6.5-4 9c-2.7-2.5-4-5.5-4-9s1.3-6.5 4-9Z" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
}

export default function CategoryPage({ category }: { category: TeaCategory }) {
  return (
    <main className="category-page">
      <section
        className={`page-hero page-hero--image category-hero--${category.name.toLowerCase().replace(/\s+/g, '-')}`}
        style={{ backgroundImage: `url('${category.heroImage}')` }}
      >
        <p className="page-eyebrow">{category.label}</p>
        <h1>{category.name}</h1>
        {category.heroSubtitle ? (
          <p className="category-hero__subtitle">
            <span>{category.heroSubtitle[0]}</span>
            <span>{category.heroSubtitle[1]}</span>
          </p>
        ) : (
          <p>{category.intro}</p>
        )}
      </section>

      <section className="jasmine-about">
        <figure className="jasmine-about__visual">
          {category.lifestyleImage ? (
            <img src={category.lifestyleImage} alt={`${category.name} sourcing and origin`} />
          ) : (
            <div
              className="category-intro-placeholder"
              role="img"
              aria-label={`${category.name} introduction image placeholder`}
            />
          )}
        </figure>
        <div className="jasmine-about__copy">
          <p className="page-eyebrow">Tea Category</p>
          <h2>{category.aboutTitle}</h2>
          {category.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="jasmine-benefits">
        <div className="jasmine-benefits__heading">
          <p className="page-eyebrow">Buyer Advantages</p>
          <h2>Why Buyers Choose Our {category.name}</h2>
        </div>
        <div className="jasmine-benefits__grid">
          {category.benefits.map((benefit) => (
            <article key={benefit.title}>
              <BenefitIcon type={benefit.icon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <p className="page-eyebrow">Wholesale Selection</p>
        <h2>Featured Products</h2>
        <div className="jasmine-product-grid">
          {category.products.map((product) => (
            <article className="jasmine-product-card" key={product.title}>
              {product.image ? (
                <img src={product.image} alt={`${product.title} wholesale product`} />
              ) : (
                <div className="category-product-placeholder" aria-hidden="true" />
              )}
              <div className="jasmine-product-card__body">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a href="/contact">View Details</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <p className="page-eyebrow">Buyer Questions</p>
        <h2>{category.name} FAQ</h2>
        <div className="faq-list">
          {category.faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <section className="inquiry-cta">
        <div>
          <p className="page-eyebrow">Wholesale Inquiry</p>
          <h2>Source {category.name} with QL Tea Life</h2>
        </div>
        <a className="page-button" href="/contact">Request a Quote</a>
      </section>
    </main>
  );
}
