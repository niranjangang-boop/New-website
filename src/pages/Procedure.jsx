import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROCEDURES } from '../data/procedures.js';
import { SITE, CLINIC } from '../data/site.js';

// ── helpers ─────────────────────────────────────────────────────────────────

function setMeta(title, description) {
  document.title = `${title} | ${SITE.name}`;
  const el = document.querySelector('meta[name="description"]');
  if (el) el.setAttribute('content', description);
}

function injectSchema(proc) {
  const id = 'procedure-jsonld';
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  // MedicalProcedure + FAQPage combined graph
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `https://drniranjanghag.com/procedures/${proc.slug}#page`,
        url: `https://drniranjanghag.com/procedures/${proc.slug}`,
        name: proc.keywordTitle,
        description: proc.metaDescription,
        inLanguage: 'en',
        about: {
          '@type': 'MedicalProcedure',
          name: proc.name,
          procedureType: 'https://health-lifesci.schema.org/SurgicalProcedure',
          bodyLocation: proc.slug.includes('knee')
            ? 'Knee'
            : proc.slug.includes('hip')
            ? 'Hip'
            : 'Knee (ACL)',
          followup: 'Physiotherapy and structured rehabilitation',
          preparation: 'Pre-operative fitness assessment and imaging',
          performer: {
            '@type': 'Physician',
            '@id': 'https://drniranjanghag.com/#physician',
            name: 'Dr. Niranjan Ghag',
          },
          location: {
            '@type': 'MedicalClinic',
            '@id': 'https://drniranjanghag.com/#joshis-neurotrauma-centre',
          },
        },
      },
      proc.faqs && proc.faqs.length
        ? {
            '@type': 'FAQPage',
            '@id': `https://drniranjanghag.com/procedures/${proc.slug}#faq`,
            mainEntity: proc.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }
        : null,
    ].filter(Boolean),
  };

  const s = document.createElement('script');
  s.id = id;
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(schema);
  document.head.appendChild(s);
}

// ── FAQ accordion ────────────────────────────────────────────────────────────

function Accordion({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="divide-y divide-slate-200">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left"
            aria-expanded={open === i}
          >
            <span className="font-medium text-slate-800">{faq.q}</span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-brand-gold transition-transform ${
                open === i ? 'rotate-45' : ''
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          {open === i && (
            <p className="pb-4 text-sm leading-relaxed text-slate-600">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

// ── main page ────────────────────────────────────────────────────────────────

export default function Procedure() {
  const { slug } = useParams();
  const proc = PROCEDURES.find((p) => p.slug === slug);

  useEffect(() => {
    if (!proc) return;
    setMeta(proc.keywordTitle, proc.metaDescription);
    injectSchema(proc);

    return () => {
      const s = document.getElementById('procedure-jsonld');
      if (s) s.remove();
    };
  }, [proc]);

  if (!proc) return <Navigate to="/404" replace />;

  const waMsg = encodeURIComponent(
    `Hello Dr. Ghag, I would like to enquire about ${proc.name}. Please advise.`
  );
  const waUrl = `https://wa.me/${SITE.phoneRaw}?text=${waMsg}`;

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${proc.image})` }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Procedure
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
            {proc.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {proc.hero}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-gold px-8 py-3 font-semibold text-white shadow hover:opacity-90 transition"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:+${SITE.phoneRaw}`}
              className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ── Content sections ───────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-4 py-14">
        {proc.sections.map((sec, i) => (
          <section key={i} className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-brand-brown mb-3">
              {sec.heading}
            </h2>
            {sec.body && (
              <p className="text-slate-600 leading-relaxed mb-3">{sec.body}</p>
            )}
            {sec.bullets && (
              <ul className="space-y-2 text-slate-600">
                {sec.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      {proc.faqs && proc.faqs.length > 0 && (
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-serif text-2xl font-bold text-brand-brown mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion faqs={proc.faqs} />
          </div>
        </section>
      )}

      {/* ── Clinic + CTA ───────────────────────────────────────────────── */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-2xl bg-brand-dark p-8 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="font-serif text-xl font-bold mb-1">Book a Consultation</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {CLINIC.name} · {CLINIC.address.split(',').slice(0, 3).join(', ')}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Mon–Sat 5–10 pm · Sun 9 am–5 pm
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0 md:flex-col lg:flex-row">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-gold px-6 py-2.5 text-center text-sm font-semibold text-white hover:opacity-90 transition whitespace-nowrap"
              >
                WhatsApp Us
              </a>
              <a
                href={CLINIC.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-6 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/10 transition whitespace-nowrap"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-10 border-t border-slate-200 pt-8">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
              Related reading
            </p>
            <div className="flex flex-wrap gap-3">
              {proc.relatedArticles && proc.relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/education/${a.slug}`}
                  className="rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-700 hover:border-brand-gold hover:text-brand-gold transition"
                >
                  {a.title}
                </Link>
              ))}
              <Link
                to={`/specialties/${proc.specialty}`}
                className="rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-700 hover:border-brand-gold hover:text-brand-gold transition"
              >
                View specialty page →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
