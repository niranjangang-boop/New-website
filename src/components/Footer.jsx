import { Link } from 'react-router-dom';
import { SITE, CLINICS, SPECIALTIES } from '../data/site.js';
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

        {/* Procedures (featured only) */}
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

        {/* Clinic Locations + Contact */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
            {CLINICS.length > 1 ? 'Locations & Contact' : 'Clinic & Contact'}
          </p>

          {/* All clinic locations */}
          <div className="space-y-4">
            {CLINICS.map((clinic, i) => (
              <div key={i} className={i > 0 ? 'border-t border-slate-700 pt-4' : ''}>
                <p className="text-sm font-medium text-white">{clinic.name}</p>
                <p className="mt-1 text-sm leading-relaxed">{clinic.address}</p>
                <a
                  href={clinic.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-brand-gold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>

          {/* Contact details */}
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
