// Build-time-only route manifest — every public route on the site.
// Consumed by:
//   - vite.config.js        (feeds vite-plugin-sitemap's dynamicRoutes)
//   - scripts/prerender.mjs (loops over every route to statically render it)
//
// IMPORTANT: this file uses Node's `fs`/`path` and must never be imported
// from client-side page/component code (it will not bundle for the browser).
// Keep the static paths below in sync with src/App.jsx and src/entry-server.jsx.

import { readdirSync } from 'fs';
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

export const ROUTES = [
  '/',
  '/about',
  '/book',
  '/sitemap',
  '/education',
  ...ARTICLE_ROUTES,
  '/specialties/joint-replacement',
  '/specialties/foot-ankle',
  '/specialties/sports-arthroscopy',
  '/specialties/trauma-fracture',
  ...PROCEDURE_ROUTES,
];
