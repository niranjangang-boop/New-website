import { Link } from 'react-router-dom';
import { SITE } from '../data/site.js';

/**
 * Visible breadcrumb trail + matching BreadcrumbList schema.
 *
 * `items` is an ordered array of { name, path }, starting at Home and ending
 * with the current page. Example:
 *   [{ name: 'Home', path: '/' }, { name: 'Procedures', path: '/procedures/knee-replacement' }]
 *
 * Pages import `breadcrumbLd(items)` and spread it into their existing @graph
 * so there is exactly one JSON-LD block per page.
 */

// Netlify serves every page with a trailing slash; keep breadcrumb URLs in the
// same form as the canonical tags so Google sees one URL per page, not two.
function absUrl(path) {
  const p = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
  return `${SITE.url}${p}`;
}

export function breadcrumbLd(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export default function Breadcrumbs({ items, className = '' }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-medium text-slate-700" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link to={item.path} className="transition-colors hover:text-brand-gold">
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
