import { Link, useParams, Navigate } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Image from '../components/Image.jsx';
import Reveal from '../components/Reveal.jsx';
import { SPECIALTIES } from '../data/site.js';
import { ARTICLES } from '../data/articles.js';

const RELATED = {
  'joint-replacement': ['robotic-knee-replacement-recovery', 'hip-replacement-signs', 'early-signs-knee-arthritis'],
  'foot-ankle': ['heel-pain-plantar-fasciitis', 'ankle-sprain-vs-fracture'],
  'sports-arthroscopy': ['acl-tear-symptoms-treatment', 'early-signs-knee-arthritis'],
  'trauma-fracture': ['fracture-healing-surgery', 'ankle-sprain-vs-fracture'],
};

export default function Specialty() {
  const { slug } = useParams();
  const spec = SPECIALTIES.find((s) => s.slug === slug);
  if (!spec) return <Navigate to="/" replace />;

  const related = (RELATED[slug] || [])
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <>
      <Seo
        title={spec.name}
        description={`${spec.short} ${spec.points.join(', ')} — Dr. Niranjan Ghag, Orthopaedic Surgeon, Thane.`}
        path={`/specialties/${slug}`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <nav className="flex flex-wrap gap-2 text-sm" aria-label="Specialties">
          {SPECIALTIES.map((s) => (
            <Link
              key={s.slug}
              to={`/specialties/${s.slug}`}
              className={`rounded-full px-4 py-1.5 font-medium transition ${
                s.slug === slug
                  ? 'bg-brand-brown text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s.name.split(' (')[0]}
            </Link>
          ))}
        </nav>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900">
              {spec.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{spec.short}</p>

            <ul className="mt-8 space-y-3">
              {spec.points.map((p) => (
                <li key={p} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-slate-800 shadow-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-brown" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <Link
              to="/book"
              className="mt-9 inline-block rounded-full bg-brand-brown px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              Book a Consultation
            </Link>
          </div>

          <Image
            src={spec.image}
            webpSrc={spec.image.replace('.jpg', '.webp')}
            alt={spec.name}
            width={1600}
            height={1067}
            aspect="3/2"
            className="rounded-3xl border border-slate-200 shadow-sm"
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>

        {related.length > 0 && (
          <Reveal>
            <section className="mt-16" aria-labelledby="related-heading">
              <h2 id="related-heading" className="font-serif text-2xl font-bold text-slate-900">
                Related Patient Guides
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/education/${a.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <h3 className="font-semibold leading-snug text-slate-900 group-hover:text-brand-brown">
                      {a.title}
                    </h3>
                    <span className="mt-3 inline-block text-xs font-medium text-brand-gold">
                      Read guide →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </Reveal>
        )}
      </section>
    </>
  );
}
