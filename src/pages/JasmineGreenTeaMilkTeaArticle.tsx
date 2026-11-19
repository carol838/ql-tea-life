import type { KnowledgeArticleData } from './TeaKnowledge';

const SITE_URL = 'https://www.qltealife.com';
const ARTICLE_PATH = '/tea-knowledge/jasmine-green-tea-for-milk-tea-shops';
const ARTICLE_URL = `${SITE_URL}${ARTICLE_PATH}`;
const ARTICLE_IMAGE = '/images/jasmine-tea/jasmine-green-tea.webp';

export default function JasmineGreenTeaMilkTeaArticle({ article }: { article: KnowledgeArticleData }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${ARTICLE_IMAGE}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': ARTICLE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'QL Tea Life',
      url: SITE_URL,
    },
  };

  return (
    <main className="article-page jasmine-milk-tea-article">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <header className="article-hero">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/tea-knowledge">Tea Knowledge</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Jasmine Green Tea for Milk Tea Shops</span>
        </nav>
        <p className="page-eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p>How beverage businesses can evaluate aroma, extraction, recipe performance, cost and supply consistency.</p>
      </header>

      <article className="article-body">
        <section>
          <p>
            Jasmine green tea is a popular choice for milk tea shops and beverage brands looking to create refreshing,
            aromatic drinks. Its delicate floral fragrance and fresh tea character can bring balance to milk-based
            beverages, fruit teas, and other specialty drinks.
          </p>
          <p>
            However, choosing the right jasmine green tea for commercial use involves more than simply selecting a tea
            with a pleasant aroma.
          </p>
          <p>
            For beverage businesses, the tea base needs to deliver consistent flavor, work well with different
            ingredients, and meet the cost requirements of daily operations.
          </p>

          <figure className="jasmine-milk-tea-article__figure">
            <img
              src={ARTICLE_IMAGE}
              alt="Loose jasmine green tea leaves and jasmine blossoms for commercial beverage testing"
              width="800"
              height="600"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption className="article-media-caption">
              Evaluate jasmine green tea in the actual milk tea or fruit tea recipe before placing a bulk order.
            </figcaption>
          </figure>
        </section>

        <section>
          <h2>1. What Makes Jasmine Green Tea Suitable for Milk Tea?</h2>
          <p>Jasmine green tea combines the fresh character of green tea with the distinctive fragrance of jasmine flowers.</p>
          <p>It can be used in several beverage applications:</p>
          <ul>
            <li><strong>Jasmine Milk Tea:</strong> A floral tea aroma that complements milk without making the drink overly heavy.</li>
            <li><strong>Jasmine Fruit Tea:</strong> A refreshing tea base that pairs well with fruit flavors.</li>
            <li><strong>Jasmine Cheese Tea:</strong> A fragrant tea foundation that balances creamy toppings.</li>
            <li><strong>Iced Jasmine Tea:</strong> A refreshing option for ready-to-serve cold beverages.</li>
          </ul>
          <p>The right tea should maintain its character when combined with milk, fruit, or other ingredients.</p>
        </section>

        <section>
          <h2>2. What Should Milk Tea Shops Consider When Choosing a Tea Base?</h2>
          <p>Before purchasing jasmine green tea in bulk, beverage businesses should evaluate several factors.</p>

          <h3>Aroma and Flavor</h3>
          <p>
            The jasmine fragrance should be pleasant and recognizable, while the green tea itself should retain a fresh
            and balanced taste. The aroma should complement the other ingredients rather than overpower them.
          </p>

          <h3>Extraction Performance</h3>
          <p>
            Tea shops need a tea base that can deliver a consistent flavor during daily preparation. Brewing
            concentration, extraction time, water temperature, and tea-to-water ratio should all be evaluated through
            practical testing.
          </p>

          <h3>Compatibility with Ingredients</h3>
          <p>
            A tea that tastes good on its own may behave differently when combined with milk, fruit puree, syrups, or
            toppings. Testing the tea in the actual beverage recipe is important.
          </p>

          <h3>Cost per Serving</h3>
          <p>
            For commercial beverage businesses, the cost of each serving matters. Buyers should evaluate not only the
            purchase price per kilogram but also the amount of tea required for each drink and the final flavor.
          </p>

          <h3>Supply Consistency</h3>
          <p>
            A reliable supply of tea with consistent flavor is important for shops that need to maintain the same menu
            quality over time.
          </p>
        </section>

        <section>
          <h2>3. How to Evaluate Jasmine Green Tea Before Bulk Purchasing</h2>
          <p>We recommend testing samples before confirming a wholesale order.</p>
          <p>A practical evaluation process includes:</p>
          <ol>
            <li>Brew the tea using your normal preparation method.</li>
            <li>Taste the tea without additional ingredients.</li>
            <li>Prepare your regular milk tea or fruit tea recipe.</li>
            <li>Compare aroma, flavor, strength, and overall balance.</li>
            <li>Evaluate the cost per serving based on your actual recipe.</li>
          </ol>
          <p>
            This helps buyers select a tea based on real beverage performance rather than relying on product descriptions
            alone.
          </p>
        </section>

        <section>
          <h2>4. Wholesale Jasmine Green Tea Supply from QL Tea Life</h2>
          <p>QL Tea Life supplies Chinese teas for international tea businesses, beverage brands, and wholesale buyers.</p>
          <p>For milk tea shops and beverage businesses, we can support:</p>
          <ul>
            <li>Wholesale jasmine green tea sourcing</li>
            <li>Product recommendations based on beverage applications</li>
            <li>Sample evaluation before bulk purchasing</li>
            <li>Tea selection and blending discussions</li>
            <li>Private label and customized packaging solutions</li>
          </ul>
          <p>
            Whether you are operating an established milk tea shop or developing a new beverage brand, we can help you
            identify a suitable tea base according to your flavor preferences, target price, and purchasing requirements.
          </p>
        </section>

        <section>
          <h2>5. Let&apos;s Find the Right Jasmine Green Tea for Your Business</h2>
          <p>Looking for a reliable jasmine green tea supplier for your milk tea shop or beverage brand?</p>
          <p>
            Tell us about your beverage applications, expected purchasing volume, and target price. Our team can
            recommend suitable products and arrange samples for evaluation.
          </p>
          <p>
            <a className="article-inline-link" href="/contact">Contact QL Tea Life</a> for wholesale inquiries and
            product recommendations.
          </p>
        </section>
      </article>

      <section className="article-cta">
        <div>
          <p className="page-eyebrow">Wholesale Jasmine Tea</p>
          <h2>Explore jasmine tea options for beverage applications</h2>
          <p>Compare wholesale jasmine teas and discuss the right product for your menu, budget and purchasing volume.</p>
        </div>
        <a className="page-button" href="/jasmine-tea">Explore Jasmine Tea</a>
      </section>
    </main>
  );
}
