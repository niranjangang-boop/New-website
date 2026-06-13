import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { ARTICLES } from '../data/articles.js';

const groups = [
  {
    title: 'Core Pages',
    icon: 'M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10',
    links: [
      { to: '/', label: 'Home', note: 'Practice overview & featured specialties' },
      { to: '/about', label: 'About — Credentials & Biography', note: 'Training, fellowships & philosophy' },
      { to: '/book', label: 'Appointment Booking', note: 'WhatsApp-confirmed bookings' },
    ],
  },
  {
    title: 'Clinical Specialties',
    icon: 'M12 3v18M3 12h18',
    links: [
      { to: '/specialties/joint-replacement', label: 'Joint Replacement (Hip & Knee)', note: 'Robotic-assisted joint restoration' },
      { to: '/specialties/foot-ankle', label: 'Foot & Ankle Surgery', note: 'Deformity, trauma & sports injuries of the foot' },
      { to: '/specialties/sports-arthroscopy', label: 'Sports Injuries & Arthroscopy', note: 'ACL reconstruction & keyhole surgery' },
      { to: '/specialties/trauma-fracture', label: 'Trauma & Fracture Management', note: 'Complex fracture & nonunion care' },
    ],
  },
  {
    title: 'Patient Education',
    icon: 'M4 19V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2zm0 0a2 2 0 0 1 2-2h13',
    links: [
      { to: '/education', label: 'Patient Education Hub', note: 'All articles & guides' },
      ...ARTICLES.map((a) => ({ to: `/education/${a.slug}`, label: a.title, note: a.category })),
    ],
  },
  {
    title: 'Consulting Location',
    icon: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z',
    links: [
      { to: '/book', label: "Joshi's Neurotrauma Centre", note: 'Khopat, Thane West — hours, directions & booking' },
    ],
  },
];

export default function Sitemap() {
  return (
    <>
      <Seo
        title="Sitemap"
        description="Complete page directory for drniranjanghag.com — core pages, clinical specialties, patient education articles and consulting location."
        path="/sitemap"
      />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-serif text-4xl font-bold text-slate-900">Sitemap</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Every page on this site, organized for quick scanning.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {groups.map((g) => (
            <section
              key={g.title}
              aria-labelledby={`sm-${g.title}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-brown" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={g.icon} />
                  </svg>
                </span>
                <h2 id={`sm-${g.title}`} className="font-serif text-xl font-bold text-slate-900">
                  {g.title}
                </h2>
              </div>

              <ul className="mt-5 divide-y divide-slate-100">
                {g.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link
                      to={l.to}
                      className="group block py-3 transition-colors hover:bg-slate-50"
                    >
                      <span className="font-medium text-slate-800 group-hover:text-brand-brown">
                        {l.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500">{l.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
