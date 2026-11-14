// Build-time-only route manifest — every public route on the site.
// Consumed by:
//   - vite.config.js        (feeds vite-plugin-sitemap's dynamicRoutes)
//   - scripts/prerender.mjs (loops over every route to statically render it)
//
// IMPORTANT: this file uses Node's `fs`/`path` and must never be imported
// from client-side page/component code (it will not bundle for the browser).
// Keep the static paths below in sync with src/App.jsx and src/entry-server.jsx.

import { readdirSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { PROCEDURE_ROUTES } from './procedures.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Article routes derived from JSON files at build time (avoids importing
// articles.js, which uses import.meta.glob — a Vite-only API not available
// in a plain Node script context).
const ARTICLE_ROUTES = readdirSync(resolve(__dirname, '../content/articles'))
  .filter((f) => f.endsWith('.json'))
  .map((f) => `/education/${f.replace('.json', '')}`);

// One page per consulting location, from the CMS settings (same slug rule as
// slugify() in site.js).
const LOCATION_ROUTES = JSON.parse(
  readFileSync(resolve(__dirname, '../content/settings.json'), 'utf-8')
).clinics.map(
  (c) => `/locations/${c.name.toLowerCase().replace(/['’]/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
);

// Marathi and Hindi article pages — one per translated article
// (src/data/translation-index.json, regenerated before each build).
const TRANSLATION_INDEX = JSON.parse(
  readFileSync(resolve(__dirname, 'translation-index.json'), 'utf-8')
);
export const LOCALIZED_ARTICLE_ROUTES = ['mr', 'hi'].flatMap((lang) =>
  TRANSLATION_INDEX[lang].map((slug) => `/${lang}/education/${slug}`)
);

export const ROUTES = [
  '/',
  '/about',
  '/book',
  '/contact',
  '/events',
  '/privacy',
  '/sitemap',
  '/education',
  ...ARTICLE_ROUTES,
  ...LOCALIZED_ARTICLE_ROUTES,
  '/specialties/joint-replacement',
  '/specialties/foot-ankle',
  '/specialties/sports-arthroscopy',
  '/specialties/trauma-fracture',
  ...PROCEDURE_ROUTES,
  ...LOCATION_ROUTES,
];
