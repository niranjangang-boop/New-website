import { Link, useParams, Navigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { ARTICLES } from '../data/articles.js';
import { TRANSLATIONS, LABELS } from '../data/translations.js';
import { SITE } from '../data/site.js';

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'mr', label: 'मराठी' },
  { code: 'hi', label: 'हिंदी' },
];

export default function EducationArticle() {
  const { slug } = useParams();
  const [lang, setLang] = useState('en');
  const article = ARTICLES.find((a) => a.slug === slug);

  // Active-language content (falls back to English if a translation is missing)
  const content =
    lang !== 'en' && TRANSLATIONS[lang]?.[slug]
      ? TRANSLATIONS[lang][slug]
      : article;
  const t = LABELS[lang] || LABELS.en;

  // Article + FAQ rich-result schema (kept in English for Google)
  const jsonLd = useMemo(() => {
    if (!article) return null;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MedicalWebPage',
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.date,
          inLanguage: ['en', 'mr', 'hi'],
          author: { '@type': 'Physician', name: SITE.name, url: SITE.url },
          url: `${SITE.url}/education/${article.slug}`,
        },
        {
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    };
  }, [article]);

  if (!article) return <Navigate to="/education" replace />;

  return (
    <>
      <Seo
        title={article.title}
        description={article.metaDescription}
        path={`/education/${article.slug}`}
        jsonLd={jsonLd}
      />

      <article className="mx-auto max-w-3xl px-4 py-16" lang={lang}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/education" className="text-sm font-medium text-brand-gold hover:underline">
            ← Patient Education Hub
          </Link>

          {/* Language toggle */}
          <div className="glass flex rounded-full p-1" role="group" aria-label="Choose language">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  lang === l.code
                    ? 'bg-gradient-to-r from-brand-brown to-brand-gold text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white/60'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <header className="mt-6">
          <span className="inline-flex rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-brown">
            {article.category}
          </span>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            {t.by} {SITE.name} · {article.readTime} {t.minRead}
          </p>
        </header>

        <p className="mt-8 text-lg leading-relaxed text-slate-700">{content.intro}</p>

        {content.sections.map((s) => (
          <Reveal key={s.heading}>
            <section className="mt-10">
              <h2 className="font-serif text-2xl font-bold text-slate-900">{s.heading}</h2>
              {s.body && <p className="mt-3 leading-relaxed text-slate-700">{s.body}</p>}
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
          <h2 className="font-serif text-2xl font-bold text-slate-900">{t.faq}</h2>
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

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark to-slate-900 p-8 text-center shadow-glass-lg">
          <div className="blob left-1/3 top-0 h-40 w-40 bg-brand-gold/15" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-serif text-xl font-bold text-white">{t.ctaTitle}</h2>
            <p className="mt-2 text-sm text-slate-300">{t.ctaBody}</p>
            <Link to="/book" className="btn-gradient mt-5">
              {t.ctaBtn}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
