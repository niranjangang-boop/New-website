import { Link, useParams, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import Seo from '../components/Seo.jsx';
import Image from '../components/Image.jsx';
import Reveal from '../components/Reveal.jsx';
import { SPECIALTIES, SITE } from '../data/site.js';
import { SPECIALTY_CONTENT } from '../data/specialty-content.js';
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
  const content = SPECIALTY_CONTENT[slug];

  const jsonLd = useMemo(() => {
    if (!spec || !content) return null;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MedicalWebPage',
          headline: spec.name,
          description: content.metaDescription,
          about: { '@type': 'MedicalSpecialty', name: 'Orthopedic' },
          inLanguage: 'en',
          author: { '@type': 'Physician', name: SITE.name, url: SITE.url },
          reviewedBy: { '@type': 'Physician', name: SITE.name, url: SITE.url },
          url: `${SITE.url}/specialties/${slug}/`,
        },
        {
          '@type': 'FAQPage',
          mainEntity: content.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    };
  }, [spec, content, slug]);

  if (!spec) return <Navigate to="/" replace />;

  const related = (RELATED[slug] || [])
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <>
      <Seo
        title={spec.name}
        description={
          content?.metaDescription ||
          `${spec.short} — Dr. Niranjan Ghag, Orthopaedic Surgeon, Thane.`
        }
        path={`/specialties/${slug}`}
        jsonLd={jsonLd}
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
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {content?.intro || spec.short}
            </p>

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

        {content && (
          <div className="mx-auto mt-16 max-w-3xl">
            {content.sections.map((s) => (
              <Reveal key={s.heading}>
                <section className="mt-10">
                  <h2 className="font-serif text-2xl font-bold text-slate-900">{s.heading}</h2>
                  {s.body && (
                    <p className="mt-3 leading-relaxed text-slate-700">{s.body}</p>
                  )}
                  {s.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}

            <section className="mt-12">
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 space-y-3">
                {content.faqs.map((f) => (
                  <details
                    key={f.q}
                    className="glass group rounded-2xl p-5 transition-shadow duration-300 open:shadow-glass-lg"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-slate-900">
                      {f.q}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {content.footerNote && (
              <p
                className="mt-10 leading-relaxed text-slate-600 [&_a]:text-brand-gold [&_a]:underline [&_a]:hover:text-brand-brown"
                dangerouslySetInnerHTML={{ __html: content.footerNote }}
              />
            )}
          </div>
        )}

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
