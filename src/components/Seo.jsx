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
  lang: 'en',
  // [{ hreflang: 'mr', path: '/mr/education/x' }, ...] — includes the page itself
  alternates: [],
};

// Search results cut titles at about 60 characters, so the "| Dr. Niranjan Ghag"
// suffix is added only when it still fits.
export function withBrand(title) {
  if (!title) return `${SITE.name} | Orthopaedic Surgeon in Thane`;
  const full = `${title} | ${SITE.name}`;
  return full.length <= 60 ? full : title;
}

/**
 * Lightweight per-route SEO (no react-helmet needed).
 * Updates title, meta description, canonical and optional JSON-LD.
 */
export default function Seo({ title, description, path = '/', jsonLd = null, lang = 'en', alternates = [] }) {
  const resolvedTitle = withBrand(title);

  // Synchronous write — runs during SSR render. On the client it's
  // immediately followed by the effect below, so it's harmless there too.
  headState.title = resolvedTitle;
  headState.description = description || '';
  headState.path = path;
  headState.jsonLd = jsonLd || null;
  headState.lang = lang;
  headState.alternates = alternates;

  const altKey = alternates.map((a) => `${a.hreflang}:${a.path}`).join('|');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((l) => l.remove());
    alternates.forEach((a) => {
      const l = document.createElement('link');
      l.rel = 'alternate';
      l.hreflang = a.hreflang;
      l.href = `${SITE.url}${a.path.endsWith('/') ? a.path : `${a.path}/`}`;
      document.head.appendChild(l);
    });
  }, [lang, altKey]);

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
    // Netlify serves all pages with a trailing slash — keep canonical in sync.
    const canonicalPath = path === '/' ? '/' : (path.endsWith('/') ? path : `${path}/`);
    canonical.href = `${SITE.url}${canonicalPath}`;

    // Remove any prerendered route schema baked in by scripts/prerender.mjs
    // (identified by data-route-schema="true") so we never end up with duplicates.
    document.head.querySelectorAll('script[data-route-schema]').forEach((s) => s.remove());

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
