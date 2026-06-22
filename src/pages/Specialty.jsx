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

      <section className="relative overflow-hidden px-4 py-16">
        <div className="blob -right-20 top-0 h-72 w-72 bg-brand-brown/10 animate-float" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
        <nav className="flex flex-wrap gap-2 text-sm" aria-label="Specialties">
          {SPECIALTIES.map((s) => (
            <Link
              key={s.slug}
              to={`/specialties/${s.slug}`}
              className={`rounded-full px-4 py-1.5 font-medium transition-all duration-300 ${
                s.slug === slug
                  ? 'bg-gradient-to-r from-brand-brown to-brand-gold text-white shadow-md shadow-brand-brown/20'
                  : 'bg-white/60 text-slate-600 backdrop-blur hover:bg-slate-100'
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
              {spec.points.map((p, i) => (
                <Reveal key={p} delay={i * 60}>
                  <li className="glass flex items-center gap-3 rounded-2xl px-5 py-3.5 text-slate-800 transition-shadow duration-300 hover:shadow-glass-lg">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold/30 to-brand-brown/20 text-brand-brown" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {p}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Link to="/book" className="btn-gradient mt-9">
              Book a Consultation
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-brown/15 blur-2xl" aria-hidden="true" />
            <Image
              src={spec.image}
              webpSrc={spec.image.replace('.jpg', '.webp')}
              alt={spec.name}
              width={1600}
              height={1067}
              aspect="3/2"
              className="glass relative rounded-3xl p-2"
              imgClassName="rounded-2xl"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
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
                    className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg"
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
        </div>
      </section>
    </>
  );
}
