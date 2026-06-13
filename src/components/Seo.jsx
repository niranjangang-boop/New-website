import { useEffect } from 'react';
import { SITE } from '../data/site.js';

/**
 * Lightweight per-route SEO (no react-helmet needed).
 * Updates title, meta description, canonical and optional JSON-LD.
 */
export default function Seo({ title, description, path = '/', jsonLd = null }) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${SITE.name}`
      : `${SITE.name} | ${SITE.title}`;

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
  }, [title, description, path, jsonLd]);

  return null;
}
