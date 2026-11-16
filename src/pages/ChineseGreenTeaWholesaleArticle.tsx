import type { KnowledgeArticleData } from './TeaKnowledge';

const SITE_URL = 'https://www.qltealife.com';
const ARTICLE_PATH = '/tea-knowledge/chinese-green-tea-wholesale-guide';
const ARTICLE_URL = `${SITE_URL}${ARTICLE_PATH}`;
const INTRO_IMAGE = '/images/category-hero/green-tea-hero.webp';
const LONGJING_IMAGE = '/images/tea-collection/sources/longjing-original.webp';
const MAO_FENG_IMAGE = '/images/green-tea/mao-feng-green-tea.webp';

export default function ChineseGreenTeaWholesaleArticle({ article }: { article: KnowledgeArticleData }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: [
      `${SITE_URL}${INTRO_IMAGE}`,
      `${SITE_URL}${LONGJING_IMAGE}`,
      `${SITE_URL}${MAO_FENG_IMAGE}`,
    ],
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
    <main className="article-page green-wholesale-article">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <header className="article-hero">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/tea-knowledge">Tea Knowledge</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Chinese Green Tea for Wholesale</span>
        </nav>
        <p className="page-eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p>A practical guide to matching Chinese green tea styles, samples, pricing and packaging with the needs of your market.</p>
      </header>

      <article className="article-body">
        <section className="green-wholesale-article__introduction">
          <p>
            <a className="article-inline-link" href="/green-tea">Chinese green tea</a> offers a wide range of leaf
            styles, flavour profiles, and price levels. For tea importers and distributors, choosing the right product
            involves more than comparing grades or quotations.
          </p>
          <p>
            A successful tea selection should balance consumer preferences, product quality, cost, and long-term
            supply consistency.
          </p>

          <figure className="green-wholesale-article__figure green-wholesale-article__figure--lead">
            <img
              src={INTRO_IMAGE}
              alt="Chinese green tea leaves and pale green tea liquor arranged for wholesale product evaluation"
              width="1774"
              height="887"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption className="article-media-caption">
              Green tea selection should consider both the dry leaf and the brewed cup expected by the target market.
            </figcaption>
          </figure>
        </section>

        <section>
          <h2>1. Understand Your Target Market</h2>
          <p>Green tea preferences can vary considerably between markets.</p>
          <p>
            Some consumers prefer a strong, full-bodied infusion for everyday drinking, while others value delicate
            aromas, fresh flavours, and attractive leaf appearance.
          </p>
          <p>Before selecting a tea, consider:</p>
          <ul>
            <li>How consumers usually prepare and drink tea</li>
            <li>Their preferred flavour intensity and level of astringency</li>
            <li>The expected retail price range</li>
            <li>Whether the product is intended for everyday consumption or premium gifting</li>
          </ul>
          <p>Understanding these factors helps narrow down suitable options.</p>
        </section>

        <section>
          <h2>2. Understand Different Chinese Green Tea Styles</h2>

          <h3>Pan-Fired Green Tea</h3>
          <p>
            Pan-fired green teas are processed using heated pans or mechanical roasting equipment to stop oxidation
            and develop their characteristic flavour.
          </p>
          <p>
            Depending on the leaf material and processing style, these teas may offer a relatively rich taste, a
            distinctive roasted aroma, and good value for everyday consumption.
          </p>

          <h3>Longjing Green Tea</h3>
          <p>Longjing is recognised for its flat leaf appearance and characteristic fresh, mellow flavour.</p>
          <p>
            Different grades and origins can offer significantly different price points, making product selection
            particularly important for wholesale buyers.
          </p>
          <figure className="green-wholesale-article__figure">
            <img
              src={LONGJING_IMAGE}
              alt="Flat green Longjing tea leaves displayed on a white background"
              width="800"
              height="747"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="article-media-caption">
              The flat leaf style of Longjing is an important visual consideration when comparing wholesale samples.
            </figcaption>
          </figure>

          <h3>Mao Feng Green Tea</h3>
          <p>
            Mao Feng is known for its tender leaf appearance and typically fresh, delicate flavour profile.
          </p>
          <p>It can be a suitable choice for buyers seeking a more refined green tea experience.</p>
          <figure className="green-wholesale-article__figure">
            <img
              src={MAO_FENG_IMAGE}
              alt="Tender curled Mao Feng green tea leaves arranged on a bamboo tray"
              width="800"
              height="864"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="article-media-caption">
              Mao Feng samples can be assessed for their tender leaf appearance and overall uniformity.
            </figcaption>
          </figure>
        </section>

        <section>
          <h2>3. Compare Samples, Not Just Prices</h2>
          <p>Two green teas offered at similar prices may perform very differently in the cup.</p>
          <p>
            When evaluating samples, buyers should compare dry leaf appearance, aroma, infusion colour, taste,
            astringency, and consistency across repeated brewing.
          </p>
          <p>Whenever possible, use the same brewing conditions to make comparisons more meaningful.</p>
        </section>

        <section>
          <h2>4. Consider Packaging and Order Volume</h2>
          <p>Packaging can significantly influence the final cost of a tea product.</p>
          <p>
            For smaller market tests, standard packaging with customised labels may be more practical than fully
            customised printed boxes.
          </p>
          <p>As order volumes increase, additional packaging options may become commercially viable.</p>
          <p>
            Buyers should evaluate tea costs and packaging costs together rather than treating them as separate
            decisions.
          </p>
        </section>

        <section>
          <h2>5. Plan for Consistent Supply</h2>
          <p>A successful trial order is only the beginning.</p>
          <p>
            Before committing to a tea, buyers should consider whether the supplier can maintain a reasonably
            consistent flavour profile, quality level, and supply volume over time.
          </p>
          <p>
            This is especially important when developing a{' '}
            <a className="article-inline-link" href="/private-label">private-label tea brand</a>.
          </p>
        </section>

        <section>
          <h2>Finding the Right Chinese Green Tea</h2>
          <p>There is no single Chinese green tea that suits every market.</p>
          <p>
            The best choice depends on the preferences of local consumers, the intended retail price, packaging
            requirements, and long-term business goals.
          </p>
          <p>
            At QL Tea Life, we support tea importers, distributors, and private-label brands in exploring Chinese tea
            options suited to their markets.
          </p>
          <p>
            Explore our <a className="article-inline-link" href="/green-tea">Green Tea collection</a>, learn about our{' '}
            <a className="article-inline-link" href="/private-label">Private Label services</a>, or{' '}
            <a className="article-inline-link" href="/contact">contact us</a> at{' '}
            <a className="article-inline-link" href="mailto:carol@nbqltrading.com">carol@nbqltrading.com</a>.
          </p>
        </section>
      </article>

      <section className="article-cta">
        <div>
          <p className="page-eyebrow">Wholesale Green Tea Sourcing</p>
          <h2>Looking for the right green tea for your market?</h2>
          <p>Tell us about your target flavour, price range, packaging needs and expected order volume.</p>
        </div>
        <a className="page-button" href="/contact">Discuss Your Green Tea Requirements</a>
      </section>
    </main>
  );
}
