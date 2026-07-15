import { useEffect } from 'react';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import WhatsAppButton from './components/WhatsAppButton';
import About from './pages/About';
import CategoryPage, { teaCategories } from './pages/CategoryPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PrivateLabelPage, {
  PACKAGING_OPTIONS_ROUTE,
  PACKAGING_OPTIONS_SEO,
  PackagingOptionsPage,
  privateLabelPages,
} from './pages/PrivateLabelPage';
import ProductPage, { productPages } from './pages/ProductPage';
import TeaKnowledge, { KnowledgeArticle, knowledgeArticles } from './pages/TeaKnowledge';

const SITE_URL = 'https://www.qltealife.com';
const GA_MEASUREMENT_ID = 'G-8YF3DVMVNC';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function NotFound() {
  return (
    <main className="content-page">
      <p className="page-eyebrow">QL Tea Life</p>
      <h1>Page Not Found</h1>
      <p>The page you requested is not available.</p>
      <a className="text-link" href="/">
        Return Home
      </a>
    </main>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const teaCategory = teaCategories[path];
  const privateLabelPage = privateLabelPages[path];
  const productPage = productPages[path];
  const knowledgeArticle = knowledgeArticles.find(
    (article) => article.url === path || article.aliases?.includes(path),
  );
  const canonicalPath = knowledgeArticle?.url ?? path;
  let ogImagePath = knowledgeArticle?.image;

  let page = <NotFound />;
  let title = 'Page Not Found | QL Tea Life';
  let description = 'The requested QL Tea Life page could not be found.';

  if (path === '/') {
    page = <Home />;
    title = 'QL Tea Life | Premium Chinese Tea for Global Buyers';
    description = 'Source premium Chinese tea, private label tea and OEM services for international markets.';
  } else if (path === PACKAGING_OPTIONS_ROUTE) {
    page = <PackagingOptionsPage />;
    title = PACKAGING_OPTIONS_SEO.title;
    description = PACKAGING_OPTIONS_SEO.description;
    ogImagePath = PACKAGING_OPTIONS_SEO.ogImage;
  } else if (teaCategory) {
    page = <CategoryPage category={teaCategory} />;
    title = teaCategory.seoTitle;
    description = teaCategory.intro;
  } else if (privateLabelPage) {
    page = <PrivateLabelPage page={privateLabelPage} />;
    title = `${privateLabelPage.title} | QL Tea Life`;
    description = privateLabelPage.intro;
  } else if (path === '/tea-knowledge') {
    page = <TeaKnowledge />;
    title = 'Tea Knowledge for Global Buyers | QL Tea Life';
    description = 'Tea sourcing, private label and Chinese tea category guidance for international buyers.';
  } else if (knowledgeArticle) {
    page = <KnowledgeArticle article={knowledgeArticle} />;
    title = knowledgeArticle.seoTitle ?? `${knowledgeArticle.title} | QL Tea Life`;
    description = knowledgeArticle.description;
  } else if (productPage) {
    page = <ProductPage page={productPage} />;
    title = productPage.seoTitle;
    description = productPage.seoDescription;
    ogImagePath = productPage.ogImage;
  } else if (path === '/about') {
    page = <About />;
    title = 'About QL Tea Life | Chinese Tea Export';
    description = 'Learn about QL Tea Life and our approach to Chinese tea sourcing for global B2B buyers.';
  } else if (path === '/contact') {
    page = <Contact />;
    title = 'Contact QL Tea Life | Wholesale Tea Inquiry';
    description = 'Contact QL Tea Life about wholesale Chinese tea, private label packaging and OEM projects.';
  }

  useEffect(() => {
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');

    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }

    meta.content = description;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;
    canonical.href = canonicalUrl;

    if (ogImagePath) {
      let ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
      let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
      let ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
      let ogType = document.querySelector<HTMLMetaElement>('meta[property="og:type"]');

      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }

      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }

      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }

      if (!ogType) {
        ogType = document.createElement('meta');
        ogType.setAttribute('property', 'og:type');
        document.head.appendChild(ogType);
      }

      ogImage.content = `${SITE_URL}${ogImagePath}`;
      ogTitle.content = title;
      ogDescription.content = description;
      ogType.content = knowledgeArticle ? 'article' : 'website';
    }

    window.gtag?.('event', 'page_view', {
      send_to: GA_MEASUREMENT_ID,
      page_title: title,
      page_location: canonicalUrl,
      page_path: canonicalPath,
    });
  }, [canonicalPath, description, ogImagePath, title]);

  return (
    <>
      <SiteHeader />
      {page}
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
