import { Link } from 'react-router-dom';
import { SITE, CLINIC, SPECIALTIES } from '../data/site.js';
import { PROCEDURES } from '../data/procedures.js';

const featuredProcedures = PROCEDURES.filter((p) => p.featured);

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <p className="font-serif text-lg font-bold text-white">{SITE.name}</p>
          <p className="mt-2 text-sm leading-relaxed">
            Advanced orthopaedic care with precision, compassion &amp; innovation.
          </p>
        </div>

        {/* Specialties */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
            Specialties
          </p>
          <ul className="space-y-2 text-sm">
            {SPECIALTIES.map((s) => (
              <li key={s.slug}>
                <Link to={`/specialties/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Procedures (featured only, with View All link) */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
            Procedures
          </p>
          <ul className="space-y-2 text-sm">
            {featuredProcedures.map((p) => (
              <li key={p.slug}>
                <Link to={`/procedures/${p.slug}`} className="hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinic + Contact */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
            Clinic &amp; Contact
          </p>
          <p className="text-sm font-medium text-white">{CLINIC.name}</p>
          <p className="mt-1 text-sm leading-relaxed">{CLINIC.address}</p>
          <a
            href={CLINIC.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-brand-gold hover:underline"
          >
            Get Directions →
          </a>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:+${SITE.phoneRaw}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>
              <Link to="/sitemap" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
