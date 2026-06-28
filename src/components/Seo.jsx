import { useEffect } from 'react';
import { SITE } from '../data/site.js';

// Captured synchronously during render (works in both the browser and during
// `renderToString` on the server, unlike useEffect, which never fires in SSR).
// scripts/prerender.mjs reads this object immediately after rendering each
// route to get that route's resolved title/description/canonical/JSON-LD.
export const headState = {
  title: '',
  description: '',
  path: '/',
  jsonLd: null,
};

/**
 * Lightweight per-route SEO (no react-helmet needed).
 * Updates title, meta description, canonical and optional JSON-LD.
 */
export default function Seo({ title, description, path = '/', jsonLd = null }) {
  const resolvedTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} | ${SITE.title}`;

  // Synchronous write — runs during SSR render. On the client it's
  // immediately followed by the effect below, so it's harmless there too.
  headState.title = resolvedTitle;
  headState.description = description || '';
  headState.path = path;
  headState.jsonLd = jsonLd || null;

  useEffect(() => {
    document.title = resolvedTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    if (description) meta.content = description;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE.url}${path}`;

    let ld = null;
    if (jsonLd) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.dataset.route = 'true';
      ld.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(ld);
    }
    return () => {
      if (ld) ld.remove();
    };
  }, [resolvedTitle, description, path, jsonLd]);

  return null;
}
