import type { KnowledgeArticleData } from './TeaKnowledge';

const SITE_URL = 'https://www.qltealife.com';
const ARTICLE_PATH = '/tea-knowledge/choosing-tea-for-wholesale';
const ARTICLE_URL = `${SITE_URL}${ARTICLE_PATH}`;
const IMAGE_BASE = '/images/tea-knowledge/choosing-tea-for-wholesale';

export default function ChoosingTeaForWholesaleArticle({ article }: { article: KnowledgeArticleData }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: [
      `${SITE_URL}${IMAGE_BASE}/chinese-loose-tea-selection.webp`,
      `${SITE_URL}${IMAGE_BASE}/black-tea-leaves-and-liquor.webp`,
      `${SITE_URL}${IMAGE_BASE}/retail-tea-packaging-collection.webp`,
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': ARTICLE_URL,
    },
    author: {
      '@type': 'Organization',
      name: 'QL Tea Life',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'QL Tea Life',
      url: SITE_URL,
    },
  };

  return (
    <main className="article-page wholesale-selection-article">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <header className="article-hero">
        <p className="page-eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p>How to narrow down your tea selection, compare wholesale prices, and choose the right products for your tea business.</p>
      </header>

      <article className="article-body">
        <figure className="wholesale-selection-article__figure wholesale-selection-article__figure--lead">
          <img
            src={`${IMAGE_BASE}/chinese-loose-tea-selection.webp`}
            alt={article.imageAlt}
            width="1080"
            height="810"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption className="article-media-caption">
            Comparing representative Chinese loose-leaf teas helps buyers narrow their selection by category, quality and target price.
          </figcaption>
        </figure>

        <section>
          <h2>Why Choosing Chinese Tea Can Be Complicated</h2>
          <p>
            China offers an extraordinary variety of teas, from traditional <a className="article-inline-link" href="/green-tea">green</a> and{' '}
            <a className="article-inline-link" href="/black-tea">black teas</a> to oolong, floral, and specialty blends.
          </p>
          <p>For international tea buyers, this diversity creates exciting opportunities. However, it can also make sourcing decisions more complicated.</p>
          <p>A common first question is:</p>
          <blockquote className="article-pull-quote">“What teas do you offer, and can you send me your price list?”</blockquote>
          <p>While a product catalog is a useful starting point, it may not provide enough information to make the right purchasing decision.</p>
          <p>Even within one tea category, prices can vary considerably depending on origin, raw materials, harvest season, processing methods, and quality.</p>
          <p>So how can buyers narrow down their options efficiently?</p>
        </section>

        <section>
          <h2>1. Start with Your Target Market and Price Range</h2>
          <p>Before comparing dozens of teas, consider who your customers are.</p>
          <p>Are you supplying specialty tea shops, developing a premium tea brand, or looking for affordable everyday teas?</p>
          <p>Different markets may require different product selections.</p>
          <p>For example, a specialty tea retailer may prioritize distinctive aromas, origin stories, and premium leaf appearance. A mass-market retail brand may place greater emphasis on consistency, accessibility, and competitive pricing.</p>
          <p>If you already have a target wholesale price, sharing it with your supplier can help narrow down the selection.</p>
          <p>If you don&apos;t have a clear budget yet, that&apos;s perfectly fine.</p>
          <p>A supplier can introduce several representative teas at different price points, allowing you to compare products and develop a better understanding of the market.</p>
          <p><strong>The goal is not simply to find the cheapest tea, but to find the right tea for your business.</strong></p>
        </section>

        <section>
          <h2>2. Compare Tea Characteristics, Not Just Grades</h2>
          <p>Tea grades are often mentioned in Chinese tea quotations.</p>
          <p>However, grading standards can vary between tea categories, regions, and producers.</p>
          <p>Terms such as First Grade, Special Grade, or Premium Grade may provide useful information within a particular product specification, but they are not always directly comparable across different teas.</p>
          <p>When reviewing a wholesale quotation, buyers should also consider:</p>
          <ul>
            <li><strong>Leaf Appearance:</strong> Shape, size, uniformity, and overall presentation.</li>
            <li><strong>Aroma:</strong> Floral, fruity, roasted, malty, or other distinctive characteristics.</li>
            <li><strong>Flavor:</strong> Sweetness, body, astringency, smoothness, and aftertaste.</li>
            <li><strong>Tea Liquor:</strong> Color, clarity, and appearance after brewing.</li>
            <li><strong>Price:</strong> Whether the product fits the intended market positioning.</li>
          </ul>
          <figure className="wholesale-selection-article__figure">
            <img
              src={`${IMAGE_BASE}/black-tea-leaves-and-liquor.webp`}
              alt="Chinese black tea leaves and bright amber tea liquor prepared for product comparison"
              width="1600"
              height="1200"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="article-media-caption">
              Dry leaf appearance and brewed liquor should be evaluated together when comparing black tea specifications.
            </figcaption>
          </figure>
          <p>For example, Lapsang Souchong, Jin Jun Mei, and Ancient Tree Black Tea may have very different price points and flavor profiles.</p>
          <p>A higher price does not automatically mean that a particular tea will be more suitable for every market.</p>
          <p>Understanding these differences helps buyers make informed decisions.</p>
          <p>
            For a closer look at quality indicators and supplier evaluation, read{' '}
            <a className="article-inline-link" href="/tea-knowledge/how-to-choose-high-quality-chinese-tea-for-your-business">
              How to Choose High-Quality Chinese Tea for Your Business
            </a>.
          </p>
        </section>

        <section>
          <h2>3. Request a Focused Selection Instead of Too Many Samples</h2>
          <p>Sampling is one of the most important steps in tea sourcing.</p>
          <p>Product descriptions and photos can provide useful information, but they cannot fully communicate aroma, mouthfeel, or flavor.</p>
          <p>However, requesting a large number of samples without first narrowing down the selection can increase costs and make comparisons difficult.</p>
          <p>A more practical approach is to:</p>
          <ol className="wholesale-selection-article__steps">
            <li>Identify the tea categories you are interested in.</li>
            <li>Review several options within your preferred price range.</li>
            <li>Compare their appearance and flavor descriptions.</li>
            <li>Select a few samples for tasting.</li>
            <li>Evaluate which teas best match your customers&apos; preferences.</li>
          </ol>
          <p>For buyers developing a new tea brand, comparing two or three suitable teas within a similar price range can be particularly helpful.</p>
          <p>This allows the tasting process to focus on product suitability rather than price differences alone.</p>
        </section>

        <section>
          <h2>4. Choose the Tea Before Finalizing the Packaging</h2>
          <p>Packaging plays an important role in retail presentation, brand identity, and customer experience.</p>
          <p>However, for buyers who have not yet finalized their tea selection, it can be more efficient to evaluate the tea itself before making detailed packaging decisions.</p>
          <p>Starting with loose-leaf wholesale prices helps buyers understand the underlying product cost.</p>
          <p>Once the tea is selected, packaging options can be evaluated based on the target market, order quantity, and brand positioning.</p>
          <p>Common options include:</p>
          <h3>Bulk Loose-Leaf Tea</h3>
          <p>Suitable for tea shops, distributors, and businesses that handle their own packaging.</p>
          <h3>Retail Tea Pouches and Tins</h3>
          <p>Suitable for brands looking to offer ready-to-sell loose-leaf tea products.</p>
          <h3>Pyramid Tea Bags</h3>
          <p>A convenient retail and hospitality format, depending on the tea variety and leaf grade.</p>
          <h3>Private Label Packaging</h3>
          <p>
            Custom branding and packaging solutions for businesses developing their own tea collections. Explore our{' '}
            <a className="article-inline-link" href="/private-label">private label tea services</a> for related options.
          </p>
          <figure className="wholesale-selection-article__figure">
            <img
              src={`${IMAGE_BASE}/retail-tea-packaging-collection.webp`}
              alt="Retail tea tins, gift boxes and branded shopping bags for private label tea collections"
              width="1448"
              height="1086"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="article-media-caption">
              Retail tins, gift boxes and branded bags can be selected after the tea specification and target market are clear.
            </figcaption>
          </figure>
          <p>Packaging costs, minimum order quantities, and customization requirements should be confirmed separately.</p>
          <p>This approach helps buyers distinguish between the cost of the tea and the cost of the finished retail product.</p>
        </section>

        <section>
          <h2>5. Build Your Tea Collection Step by Step</h2>
          <p>For a new tea brand, starting with a focused selection can be more manageable than launching a large product range immediately.</p>
          <p>A small collection might include several complementary teas, selected according to customer preferences and market positioning.</p>
          <p>After testing samples and receiving market feedback, businesses can gradually expand their product range.</p>
          <p>The most important considerations are consistent quality, suitable pricing, and products that customers genuinely enjoy.</p>
        </section>

        <section>
          <h2>Working with QL Tea Life</h2>
          <p>At <strong>QL Tea Life</strong>, we believe that sourcing Chinese tea should begin with understanding each buyer&apos;s needs.</p>
          <p>Rather than offering the same product selection to every customer, we aim to help tea shops, importers, distributors, and emerging tea brands explore suitable Chinese teas based on their market positioning and purchasing requirements.</p>
          <p>Our sourcing process can include:</p>
          <ul>
            <li>Representative tea selections across different price points</li>
            <li>Real product photos and flavor descriptions</li>
            <li>Loose-leaf wholesale quotations</li>
            <li>Sample selection and evaluation</li>
            <li>Retail packaging and private label solutions</li>
          </ul>
          <p>Whether you already have a clear purchasing plan or are just beginning to explore Chinese tea, we welcome the opportunity to discuss your requirements.</p>
          <p><strong>Find the right tea for your market, then build the right product around it.</strong></p>
          <p>
            Explore our <a className="article-inline-link" href="/">Chinese tea collections</a> and{' '}
            <a className="article-inline-link" href="/private-label">private label services</a>.
          </p>
        </section>

        <aside className="article-related">
          <p className="page-eyebrow">Related Reading</p>
          <ul className="article-related__list">
            <li>
              <a href="/tea-knowledge/how-to-choose-high-quality-chinese-tea-for-your-business">How to Choose High-Quality Chinese Tea for Your Business</a>
            </li>
            <li>
              <a href="/tea-knowledge/how-to-evaluate-tea-samples-wholesale">How to Evaluate Tea Samples Before Placing a Wholesale Order</a>
            </li>
          </ul>
        </aside>
      </article>

      <section className="article-cta">
        <div>
          <p className="page-eyebrow">Wholesale Tea Sourcing</p>
          <h2>Ready to narrow down your tea selection?</h2>
          <p>Tell us about your market, target price range, preferred tea categories and packaging requirements.</p>
        </div>
        <a className="page-button" href="/contact">Discuss Your Tea Project</a>
      </section>
    </main>
  );
}
