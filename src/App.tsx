import { useEffect } from 'react';
import SiteHeader from './components/SiteHeader';
import About from './pages/About';
import CategoryPage, { teaCategories } from './pages/CategoryPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PrivateLabelPage, { privateLabelPages } from './pages/PrivateLabelPage';
import TeaKnowledge, { KnowledgeArticle, knowledgeArticles } from './pages/TeaKnowledge';

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
  const knowledgeArticle = knowledgeArticles.find(
    (article) => article.url === path || article.aliases?.includes(path),
  );

  let page = <NotFound />;
  let title = 'Page Not Found | QL Tea Life';
  let description = 'The requested QL Tea Life page could not be found.';

  if (path === '/') {
    page = <Home />;
    title = 'QL Tea Life | Premium Chinese Tea for Global Buyers';
    description = 'Source premium Chinese tea, private label tea and OEM services for international markets.';
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
    title = `${knowledgeArticle.title} | QL Tea Life`;
    description = knowledgeArticle.description;
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
  }, [description, title]);

  return (
    <>
      <SiteHeader />
      {page}
    </>
  );
}
