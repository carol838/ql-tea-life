import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://www.qltealife.com';
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDirectory = path.join(projectRoot, 'dist');
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
const indexPath = path.join(distDirectory, 'index.html');

const [sitemap, indexHtml] = await Promise.all([
  readFile(sitemapPath, 'utf8'),
  readFile(indexPath, 'utf8'),
]);

const canonicalPattern = /<link\s+rel=["']canonical["']\s+href=["'][^"']+["']\s*\/>/i;

if (!canonicalPattern.test(indexHtml)) {
  throw new Error('The Vite HTML shell must contain a canonical link before static SEO pages are generated.');
}

const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
const uniqueUrls = new Set(sitemapUrls);

if (sitemapUrls.length === 0 || uniqueUrls.size !== sitemapUrls.length) {
  throw new Error('The sitemap must contain at least one URL and may not contain duplicate URLs.');
}

for (const urlValue of sitemapUrls) {
  const url = new URL(urlValue);

  if (url.origin !== SITE_URL) {
    throw new Error(`Unexpected sitemap origin: ${url.origin}`);
  }

  if (url.pathname === '/') {
    continue;
  }

  const routePath = url.pathname.replace(/^\/+|\/+$/g, '');
  const outputPath = path.join(distDirectory, `${routePath}.html`);
  const routeHtml = indexHtml.replace(
    canonicalPattern,
    `<link rel="canonical" href="${url.href}" />`,
  );

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, routeHtml, 'utf8');
}

const notFoundHtml = indexHtml
  .replace(canonicalPattern, '')
  .replace(
    '</head>',
    '    <meta name="robots" content="noindex, follow" />\n  </head>',
  );

await writeFile(path.join(distDirectory, '404.html'), notFoundHtml, 'utf8');

console.log(`Generated ${sitemapUrls.length - 1} route-specific HTML files and 404.html.`);
