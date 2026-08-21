// Static pre-rendering (SSG) step — run after both the client build and the
// SSR build (see package.json's "build" script).
//
// For every route in src/data/routes.js, this script:
//   1. Calls the SSR bundle's render(url) to get that route's HTML + head data
//   2. Clones dist/index.html (the client build's template — already has the
//      <script type="module" src="..."> tag pointing at the real hashed bundle)
//   3. Swaps in the route's own <title>, meta description, canonical, OG tags,
//      and JSON-LD, and injects the rendered HTML into <div id="root">
//   4. Writes the result to dist/<route>/index.html (clean-URL hosting on
//      Netlify), or dist/index.html itself for the homepage
//
// main.jsx still uses createRoot (not hydrateRoot), so the browser does a
// full client-side re-render after the bundle loads — this prerendered HTML
// only needs to be correct for crawlers on first paint, not hydration-exact.
//
// Run manually with: node scripts/prerender.mjs (after `vite build` and
// `vite build --ssr src/entry-server.jsx --outDir dist-ssr`).

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ROUTES } from '../src/data/routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

const SITE_URL = 'https://drniranjanghag.com';

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');
const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'));

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function buildPage(html, head) {
  let page = template;

  const pageTitle = head.title || 'Dr. Niranjan Ghag | Orthopedic Surgeon';
  const pageDesc = head.description || '';
  // Netlify serves all pages with a trailing slash — keep prerendered canonical in sync.
  const canonicalPath = head.path === '/' ? '/' : (head.path.endsWith('/') ? head.path : `${head.path}/`);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  page = page.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(pageTitle)}</title>`);
  page = page.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeAttr(pageDesc)}" />`);
  page = page.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  page = page.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  page = page.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeAttr(pageTitle)}" />`);
  if (pageDesc) {
    page = page.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeAttr(pageDesc)}" />`);
    page = page.replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeAttr(pageDesc)}" />`);
  }
  page = page.replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeAttr(pageTitle)}" />`);

  // Page-specific JSON-LD, added alongside (not replacing) the global
  // Physician/MedicalClinic schema already present in the template's <head>.
  if (head.jsonLd) {
    const ldScript = `    <script type="application/ld+json" data-route-schema="true">${JSON.stringify(head.jsonLd)}</script>\n  </head>`;
    page = page.replace('</head>', ldScript);
  }

  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  return page;
}

function writePage(route, page) {
  if (route === '/') {
    writeFileSync(resolve(distDir, 'index.html'), page);
    return;
  }
  const outDir = resolve(distDir, route.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), page);
}

let count = 0;
for (const route of ROUTES) {
  const { html, head } = render(route);
  writePage(route, buildPage(html, head));
  count++;
}

// 404 — render the real NotFound page (it sets its own canonical to /404 via
// <Seo path="/404" />) instead of just copying the homepage shell.
{
  const { html, head } = render('/__not_found__');
  writeFileSync(resolve(distDir, '404.html'), buildPage(html, head));
}

console.log(`Prerendered ${count} routes + 404.html into dist/`);

// ── sitemap.xml ──────────────────────────────────────────────────────────────
// Written here rather than by vite-plugin-sitemap: that plugin runs path.parse()
// on each route and rebuilds it from `dir` + `name`, which strips the trailing
// slash. Netlify serves every page WITH a trailing slash and our canonical tags
// declare the same, so the sitemap has to match or we hand Google a third URL
// variant for every page. This overwrites the plugin's sitemap.xml (the plugin
// still generates robots.txt, which it does correctly).

// Real publication dates, so lastmod means something instead of being the build
// timestamp repeated 34 times.
const ARTICLE_DATES = Object.fromEntries(
  readdirSync(resolve(root, 'src/content/articles'))
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const data = JSON.parse(readFileSync(resolve(root, 'src/content/articles', f), 'utf-8'));
      // dateModified wins when present — a substantially rewritten article
      // should not still report its original publication date.
      return [`/education/${f.replace('.json', '')}`, data.dateModified || data.date];
    })
);

const BUILD_DATE = new Date().toISOString().slice(0, 10);

function sitemapMeta(route) {
  if (route === '/') return { priority: '1.0', changefreq: 'weekly' };
  if (route.startsWith('/procedures/')) return { priority: '0.9', changefreq: 'monthly' };
  if (route.startsWith('/specialties/')) return { priority: '0.9', changefreq: 'monthly' };
  if (route === '/book') return { priority: '0.8', changefreq: 'monthly' };
  if (route === '/about') return { priority: '0.8', changefreq: 'monthly' };
  if (route === '/education') return { priority: '0.7', changefreq: 'weekly' };
  if (route.startsWith('/education/')) return { priority: '0.7', changefreq: 'monthly' };
  return { priority: '0.5', changefreq: 'monthly' };
}

function sitemapUrl(route) {
  const path = route === '/' ? '/' : (route.endsWith('/') ? route : `${route}/`);
  return `${SITE_URL}${path}`.replace(/&/g, '&amp;');
}

// De-duplicate: '/' was previously emitted twice (once from the plugin's dist
// scan, once from the ROUTES manifest).
const sitemapRoutes = [...new Set(ROUTES)];

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapRoutes.map((route) => {
    const { priority, changefreq } = sitemapMeta(route);
    const lastmod = ARTICLE_DATES[route] || BUILD_DATE;
    return [
      '  <url>',
      `    <loc>${sitemapUrl(route)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  }),
  '</urlset>',
  '',
].join('\n');

writeFileSync(resolve(distDir, 'sitemap.xml'), sitemapXml);
console.log(`Wrote sitemap.xml with ${sitemapRoutes.length} URLs`);
