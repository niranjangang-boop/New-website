// Patient Education articles — loaded at build time from individual JSON files
// in src/content/articles/. New articles are added via the Decap CMS at
// /admin and committed to git — no manual code editing required.
//
// NOTE: import.meta.glob is a Vite-only API. vite.config.js uses
// fs.readdirSync instead to generate sitemap routes in the Node.js context.

const mods = import.meta.glob('../content/articles/*.json', { eager: true });

export const ARTICLES = Object.values(mods)
  .map((m) => m.default)
  .sort((a, b) => new Date(b.date || '2025-01-01') - new Date(a.date || '2025-01-01'));

export const ARTICLE_ROUTES = ARTICLES.map((a) => `/education/${a.slug}`);
