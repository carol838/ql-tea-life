import type { KnowledgeArticleData } from './TeaKnowledge';

const articleUrl = 'https://www.qltealife.com/tea-knowledge/how-to-evaluate-tea-samples-wholesale';
const imageUrl = 'https://www.qltealife.com/images/tea-knowledge/how-to-evaluate-tea-samples-wholesale/wholesale-tea-sample-evaluation.jpg';

const faqItems = [
  {
    question: 'Can I request tea samples before placing a wholesale order?',
    answer: 'Yes. Sample evaluation is recommended before confirming a new tea specification, especially for private label projects or products where taste and appearance are important to the final positioning.',
  },
  {
    question: 'Should I always choose the highest tea grade?',
    answer: 'Not necessarily. Tea grades can help distinguish different specifications, but the highest grade is not automatically the best commercial choice. Your target market, application, quality expectations and price positioning should all be considered.',
  },
  {
    question: 'How many tea samples should I compare?',
    answer: 'There is no fixed number. In many sourcing projects, comparing a small selection of clearly differentiated specifications is more useful than receiving a large number of similar samples. Providing your target price, application and market information can help suppliers narrow the selection.',
  },
  {
    question: 'Can tea samples taste different from the final bulk order?',
    answer: 'Tea is an agricultural product, so natural variation can occur between harvests and batches. Buyers should confirm that the approved sample represents the intended bulk specification and discuss acceptable quality consistency with the supplier before ordering.',
  },
  {
    question: 'Should tea bag products be evaluated differently from loose-leaf tea?',
    answer: 'Yes. If the final product will use tea bags, the tea should also be tested in the intended bag format and fill weight. Leaf size, extraction, bag material and grams per bag can all influence the final drinking experience.',
  },
];

const checklistGroups = [
  { title: 'Product Fit', items: ['Is the tea suitable for the intended market?', 'Does it match the planned product positioning?', 'Is it suitable for the final application?'] },
  { title: 'Dry Leaf', items: ['Is the appearance appropriate for the product?', 'Is the leaf reasonably uniform and clean?', 'Does the visual quality match the target price level?'] },
  { title: 'Cup Evaluation', items: ['Is the aroma clean and suitable?', 'Is the tea liquor attractive for this tea type?', 'Is the taste balanced?', 'Are bitterness and astringency appropriate?', 'Is the mouthfeel suitable?', 'Is the aftertaste acceptable?'] },
  { title: 'Application Test', items: ['Has the tea been tested in the way consumers will actually prepare it?', 'If using tea bags, has it been tested at the intended fill weight?', 'If intended for iced tea or milk tea, has it been tested accordingly?'] },
  { title: 'Commercial Considerations', items: ['Does the quality make sense at the target cost?', 'Can the supplier maintain a reasonably consistent specification?', 'Does the sample represent the expected bulk-order quality?', 'Are the packaging format and tea specification compatible?'] },
];

export default function TeaSampleEvaluationArticle({ article }: { article: KnowledgeArticleData }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: imageUrl,
    mainEntityOfPage: articleUrl,
    publisher: { '@type': 'Organization', name: 'QL Tea Life', url: 'https://www.qltealife.com' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.qltealife.com/' },
      { '@type': 'ListItem', position: 2, name: 'Tea Knowledge', item: 'https://www.qltealife.com/tea-knowledge' },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main className="article-page tea-sample-article">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <header className="article-hero">
        <p className="page-eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </header>

      <article className="article-body">
        <figure className="tea-sample-article__hero">
          <img src={article.image} alt={article.imageAlt} width="2048" height="1535" fetchPriority="high" decoding="async" />
          <figcaption className="article-media-caption">
            Evaluating tea samples side by side helps buyers compare leaf appearance, liquor, aroma and overall cup quality under consistent conditions.
          </figcaption>
        </figure>

        <section>
          <p>When sourcing tea for wholesale, receiving samples is often one of the most important stages of the buying process.</p>
          <p>A tea may look attractive in photos and sound promising on a specification sheet, but the sample tells you much more: how the leaves actually look, how the tea performs in the cup, whether the flavor suits your market, and whether the quality makes sense for your target price.</p>
          <p>For tea importers, tea brands, specialty retailers and private label buyers, sample evaluation should therefore be more than simply asking:</p>
          <blockquote className="article-pull-quote">“Do I like this tea?”</blockquote>
          <p>A better question is:</p>
          <blockquote className="article-pull-quote">“Is this the right tea for the product and market I am building?”</blockquote>
          <p>This guide explains a practical way to evaluate tea samples before selecting a tea for wholesale purchasing.</p>
        </section>

        <section>
          <h2>1. Start With the Intended Application</h2>
          <p>Before comparing tea samples, define how the tea will eventually be sold or consumed.</p>
          <p>The same tea can perform very differently depending on its application.</p>
          <p>For example, you may be sourcing tea for:</p>
          <ul>
            <li>premium loose-leaf retail</li>
            <li><a className="article-inline-link" href="/pyramid-tea-bags">pyramid tea bags</a></li>
            <li>conventional tea bags</li>
            <li>iced tea</li>
            <li>milk tea</li>
            <li>cafés or foodservice</li>
            <li>gift sets</li>
            <li>a <a className="article-inline-link" href="/private-label">private label tea collection</a></li>
          </ul>
          <p>A delicate tea with an elegant aroma may work beautifully as premium loose leaf, while a stronger tea with better extraction may be more suitable for tea bags or milk tea.</p>
          <p>This is why there is rarely one universally “best” tea.</p>
          <p>The right specification depends on your target customer, product format, positioning and price range.</p>
          <p>Before requesting samples, it is useful to tell your supplier what you are trying to build. A good supplier can then select samples that are more relevant to your project instead of simply sending the highest or most expensive grades available.</p>
        </section>

        <section>
          <h2>2. Evaluate the Dry Leaf — But Don&apos;t Stop There</h2>
          <p>Dry leaf appearance is usually the first thing buyers notice.</p>
          <p>Depending on the tea type, you may look at characteristics such as:</p>
          <ul>
            <li>leaf shape</li>
            <li>size and uniformity</li>
            <li>color</li>
            <li>amount of stems or broken material</li>
            <li>visible tips or buds</li>
            <li>cleanliness</li>
            <li>overall appearance</li>
          </ul>
          <p>These characteristics can provide useful information about processing and product positioning.</p>
          <p>However, appearance should never be evaluated alone.</p>
          <p>A visually beautiful tea does not automatically produce the best cup, and a less visually impressive tea may perform extremely well for a particular commercial application.</p>
          <p>For B2B sourcing, the purpose is not simply to select the most attractive dry leaf.</p>
          <p>It is to understand whether the appearance, drinking quality and price work together for your intended product.</p>
        </section>

        <section>
          <h2>3. Brew All Samples Under the Same Conditions</h2>
          <p>One of the easiest ways to make a tea comparison unreliable is to brew each sample differently.</p>
          <p>If Sample A is brewed for two minutes while Sample B is brewed for four minutes, it becomes difficult to know whether the difference comes from the tea or the brewing method.</p>
          <p>For a meaningful comparison, keep the main variables consistent:</p>
          <ul>
            <li>tea weight</li>
            <li>water volume</li>
            <li>water temperature</li>
            <li>brewing time</li>
            <li>brewing vessel</li>
            <li>water source</li>
          </ul>
          <p>Professional tea evaluation often uses standardized methods, but buyers do not always need a laboratory-style tasting setup.</p>
          <p><strong>The most important principle is consistency.</strong></p>
          <p>When several samples are brewed side by side under the same conditions, differences in aroma, strength, liquor and taste become much easier to identify.</p>
        </section>

        <section>
          <h2>4. Compare Aroma, Liquor and Taste</h2>
          <p>Once brewed, evaluate more than whether the tea simply tastes “good” or “bad.”</p>
          <h3>Aroma</h3>
          <p>Consider the intensity, cleanliness and character of the aroma.</p>
          <p>Depending on the tea, you might notice floral, fruity, roasted, malty, sweet, grassy or other characteristics.</p>
          <p>More importantly, ask whether the aroma fits the product you intend to sell.</p>
          <h3>Tea Liquor</h3>
          <p>Observe the brewed tea itself.</p>
          <p>Look at characteristics such as:</p>
          <ul>
            <li>color</li>
            <li>brightness</li>
            <li>clarity</li>
            <li>visual consistency between samples</li>
          </ul>
          <p>The ideal liquor appearance depends on the tea type and intended application, so darker or lighter does not automatically mean better.</p>
          <h3>Taste and Mouthfeel</h3>
          <p>Consider:</p>
          <ul>
            <li>strength</li>
            <li>sweetness</li>
            <li>bitterness</li>
            <li>astringency</li>
            <li>body</li>
            <li>smoothness</li>
            <li>balance</li>
            <li>aftertaste</li>
          </ul>
          <p>Rather than focusing on a single characteristic, evaluate how the cup works as a whole.</p>
          <p>A tea with some astringency, for example, may not be ideal for a delicate premium loose-leaf product but could work very well in an application where stronger extraction is desirable.</p>
        </section>

        <section>
          <h2>5. Test the Tea the Way Your Customer Will Actually Drink It</h2>
          <p>This is one of the most useful steps in wholesale tea sample evaluation — and one that can easily be overlooked.</p>
          <p>After the initial side-by-side tasting, test promising samples in their real intended application.</p>
          <p>If the tea will be sold as iced tea, evaluate it cold.</p>
          <p>If it will be used for milk tea, test it with milk or the ingredients normally used in the final drink.</p>
          <p>If you are developing pyramid tea bags, test the tea using the intended grams per bag rather than evaluating only loose tea.</p>
          <p>If the tea is intended for cafés, consider how it performs under realistic preparation conditions.</p>
          <p>This can significantly change your impression of a sample.</p>
          <p>A tea that performs beautifully during traditional brewing may be too light for an iced beverage. Another tea that seems relatively strong when tasted alone may become balanced and aromatic after milk is added.</p>
          <p><strong>The final application matters as much as the tasting table.</strong></p>
        </section>

        <section>
          <h2>6. Look for Consistency, Not Just the Most Impressive Cup</h2>
          <p>For a wholesale buyer, one excellent sample is only the beginning.</p>
          <p>Commercial tea sourcing also requires consistency.</p>
          <p>When discussing a promising sample with your supplier, it is worth understanding:</p>
          <ul>
            <li>whether the same specification can be supplied for future orders</li>
            <li>how seasonal variation may affect the tea</li>
            <li>whether the sample represents the actual bulk-order specification</li>
            <li>how the supplier manages quality consistency between batches</li>
          </ul>
          <p>Natural agricultural products will always have some variation. Tea is no exception.</p>
          <p>The goal is not to expect every harvest to be absolutely identical, but to establish an acceptable quality range and make sure both buyer and supplier understand the required standard.</p>
          <p>For important products, keeping an approved reference sample can also help with future production and quality comparison.</p>
        </section>

        <section>
          <h2>7. Evaluate Quality Together With Price Positioning</h2>
          <p>A common sourcing mistake is evaluating quality and price separately.</p>
          <p>In reality, they should be considered together.</p>
          <p>Imagine that you receive three samples:</p>
          <p>Sample A has the most refined appearance and aroma but is significantly more expensive.</p>
          <p>Sample B is slightly less refined but still delivers a very good drinking experience at a more competitive cost.</p>
          <p>Sample C is economical but does not provide the quality expected by your target customer.</p>
          <p>Which one should you choose?</p>
          <p>There is no universal answer.</p>
          <p>For a premium specialty tea brand, Sample A may make sense.</p>
          <p>For a mid-range retail collection, Sample B may provide a better balance.</p>
          <p>For a price-sensitive market, you may need to evaluate another specification altogether.</p>
          <p>This is why tea buyers should not automatically select the highest grade available.</p>
          <p>The objective is to find the right quality at the right cost for the intended market.</p>
          <p>
            If you are unfamiliar with how Chinese tea grades work in wholesale sourcing, you can also read:{' '}
            <a className="article-inline-link" href="/tea-knowledge/chinese-tea-grades-wholesale-guide">Chinese Tea Grades Explained: How to Choose the Right Tea for Wholesale</a>.
          </p>
        </section>

        <section>
          <h2>8. Consider Packaging Before Final Approval</h2>
          <p>If the tea will eventually be sold in customized packaging, the tea itself should not be evaluated completely separately from the final product format.</p>
          <p>For example, consider:</p>
          <ul>
            <li>loose leaf or tea bag format</li>
            <li>grams per tea bag</li>
            <li>pyramid or conventional tea bag</li>
            <li>pouch, tin or box packaging</li>
            <li>expected retail price</li>
            <li>shelf presentation</li>
            <li>target consumer</li>
          </ul>
          <p>Some large or visually attractive leaves may be ideal for transparent pyramid tea bags but unsuitable for certain conventional tea bag formats.</p>
          <p>Likewise, the quantity of tea used per bag can affect strength, extraction and product cost.</p>
          <p>For private label projects, it is therefore useful to confirm the tea and packaging concept together before moving into mass production.</p>
        </section>

        <section>
          <h2>Wholesale Tea Sample Evaluation Checklist</h2>
          <p>Before approving a tea for a wholesale order, check the following:</p>
          <div className="tea-sample-checklist">
            {checklistGroups.map((group) => (
              <section className="tea-sample-checklist__group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
          </div>
          <p>A simple checklist like this can make sample selection much more objective, especially when comparing several teas from different suppliers.</p>
        </section>

        <section>
          <h2>From Sample Evaluation to Wholesale Selection</h2>
          <p>Tea sample evaluation is not about finding the tea with the most impressive appearance, the highest grade name or even the strongest first impression.</p>
          <p>For a wholesale buyer, the real goal is to identify a tea that works across several dimensions:</p>
          <p className="tea-sample-article__formula"><strong>quality + application + consistency + positioning + cost</strong></p>
          <p>That combination will be different for every market and every product.</p>
          <p>At QL Tea Life, we work with tea importers, tea shops, brands and private label buyers to select Chinese teas according to their target market and product requirements.</p>
          <p>If you are comparing different tea specifications, you can request samples before deciding on your wholesale selection.</p>
        </section>

        <section className="article-faq" aria-labelledby="tea-sample-faq-heading">
          <p className="page-eyebrow">Buyer Questions</p>
          <h2 id="tea-sample-faq-heading">FAQ</h2>
          {faqItems.map((item) => (
            <section className="article-faq__item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </section>
          ))}
        </section>
      </article>

      <section className="article-cta">
        <div>
          <p className="page-eyebrow">Wholesale Tea Sourcing</p>
          <h2>Looking for Chinese tea samples for your next project?</h2>
          <p>Tell us about your market, application, target positioning and packaging requirements.</p>
        </div>
        <a className="page-button" href="/contact">Request Samples &amp; Wholesale Information</a>
      </section>
    </main>
  );
}
