import { Link, useParams, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs, { breadcrumbLd } from '../components/Breadcrumbs.jsx';
import { ARTICLES } from '../data/articles.js';
import { TRANSLATIONS, LABELS } from '../data/translations.js';
import { SITE } from '../data/site.js';
import TRANSLATION_INDEX from '../data/translation-index.json';

const LANG_PREFIX = { en: '', mr: '/mr', hi: '/hi' };
const fmtDate = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'mr', label: 'मराठी' },
  { code: 'hi', label: 'हिंदी' },
];

// routeLang comes from the URL: /education/x (en), /mr/education/x, /hi/education/x.
// Each language is its own indexable page with hreflang alternates. `preloaded`
// carries the large Marathi/Hindi JSON for the localized routes so they render
// fully during prerender (see MarathiArticle.jsx / HindiArticle.jsx).
export default function EducationArticle({ routeLang = 'en', preloaded = null }) {
  const { slug } = useParams();
  const lang = routeLang;
  const article = ARTICLES.find((a) => a.slug === slug);
  const available = ['en', ...['mr', 'hi'].filter((l) => TRANSLATION_INDEX[l]?.includes(slug))];
  const langPath = (l) => `${LANG_PREFIX[l]}/education/${slug}`;
  const alternates =
    available.length > 1
      ? [
          ...available.map((l) => ({ hreflang: l, path: langPath(l) })),
          { hreflang: 'x-default', path: langPath('en') },
        ]
      : [];

  // Active-language content. Localized routes pass the Marathi/Hindi JSON in
  // `preloaded`; the seven oldest translations live in translations.js.
  const extra = preloaded || {};

  const content =
    lang !== 'en'
      ? (TRANSLATIONS[lang]?.[slug] || extra[lang]?.[slug] || article)
      : article;
  const t = LABELS[lang] || LABELS.en;

  // Article + FAQ rich-result schema, in the page's own language
  const crumbs = useMemo(
    () =>
      article
        ? [
            { name: 'Home', path: '/' },
            { name: 'Patient Education', path: '/education' },
            { name: content.title, path: langPath(lang) },
          ]
        : [],
    [article, content, lang]
  );

  const jsonLd = useMemo(() => {
    if (!article) return null;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumbLd(crumbs),
        {
          '@type': 'MedicalWebPage',
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.date,
          dateModified: article.dateModified || article.date,
          lastReviewed: article.dateModified || article.date,
          reviewedBy: { '@type': 'Physician', '@id': `${SITE.url}/#physician`, name: SITE.name, url: `${SITE.url}/about/` },
          inLanguage: lang,
          ...(lang !== 'en' ? { name: content.title, translationOfWork: { '@type': 'MedicalWebPage', url: `${SITE.url}/education/${article.slug}/` } } : {}),
          ...(article.citations?.length
            ? {
                citation: article.citations.map((c) => ({
                  '@type': 'CreativeWork',
                  name: c.label,
                  url: c.url,
                  ...(c.publisher
                    ? { publisher: { '@type': 'Organization', name: c.publisher } }
                    : {}),
                })),
              }
            : {}),
          author: { '@type': 'Physician', '@id': `${SITE.url}/#physician`, name: SITE.name, url: `${SITE.url}/about/` },
          url: `${SITE.url}${langPath(lang)}/`,
        },
        {
          '@type': 'FAQPage',
          inLanguage: lang,
          mainEntity: content.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    };
  }, [article, crumbs, content, lang]);

  if (!article) return <Navigate to="/education" replace />;
  if (lang !== 'en' && !available.includes(lang)) return <Navigate to={`/education/${slug}`} replace />;

  const metaDesc =
    lang === 'en'
      ? article.metaDescription
      : content.metaDescription || (content.intro.length > 155 ? `${content.intro.slice(0, 152).trimEnd()}…` : content.intro);

  return (
    <>
      <Seo
        title={lang === 'en' ? (article.seoTitle || article.title) : content.title}
        description={metaDesc}
        path={langPath(lang)}
        jsonLd={jsonLd}
        lang={lang}
        alternates={alternates}
      />

      <article className="mx-auto max-w-3xl px-4 py-16" lang={lang}>
        <Breadcrumbs items={crumbs} className="mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/education" className="text-sm font-medium text-brand-gold hover:underline">
            {t.back || '← Patient Education Hub'}
          </Link>

          {/* Language toggle */}
          <div className="glass flex rounded-full p-1" role="group" aria-label="Choose language">
            {LANGS.filter((l) => available.includes(l.code)).map((l) => (
              <Link
                key={l.code}
                to={langPath(l.code)}
                hrefLang={l.code}
                lang={l.code}
                aria-current={lang === l.code ? 'page' : undefined}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  lang === l.code
                    ? 'bg-gradient-to-r from-brand-brown to-brand-gold text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white/60'
                }`}
              >
                {l.label}
              </Link>
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
            {t.by} <Link to="/about" className="underline hover:text-brand-brown">{SITE.name}</Link> · {article.readTime} {t.minRead}
          </p>
          <p className="mt-1 text-sm text-slate-400">
            <time dateTime={article.date}>
              {t.published || 'Published'} {fmtDate(article.date)}
            </time>
            {article.dateModified && article.dateModified !== article.date && (
              <>
                {' · '}
                <time dateTime={article.dateModified}>
                  {t.updated || 'Last updated'} {fmtDate(article.dateModified)}
                </time>
              </>
            )}
          </p>
        </header>

        {lang === 'en' && article.summary && (
          <div className="mt-8 rounded-2xl border-l-4 border-brand-gold bg-brand-gold/10 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-brown">Short answer</p>
            <p className="mt-2 leading-relaxed text-slate-800">{article.summary}</p>
          </div>
        )}
        <p className="mt-8 text-lg leading-relaxed text-slate-700">{content.intro}</p>

        {content.sections.map((s) => (
          <Reveal key={s.heading}>
            <section className="mt-10">
              <h2 className="font-serif text-2xl font-bold text-slate-900">{s.heading}</h2>
              {s.bodyHtml
                ? <p className="mt-3 leading-relaxed text-slate-700 [&_a]:text-brand-gold [&_a]:underline [&_a]:hover:text-brand-brown" dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />
                : s.body && <p className="mt-3 leading-relaxed text-slate-700">{s.body}</p>
              }
              {/* `ordered: true` marks a genuine sequence (recovery weeks,
                  step-by-step processes) — semantically an <ol>, not a <ul>. */}
              {s.bullets && (s.ordered ? (
                <ol className="mt-4 space-y-2.5">
                  {s.bullets.map((b, i) => (
                    <li key={b} className="flex gap-3 text-slate-700">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-xs font-bold text-brand-brown">
                        {i + 1}
                      </span>
                      {b}
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="mt-4 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              ))}

              {/* Comparison tables — real <table> markup so the relationships
                  are machine-readable, not a visual grid of <div>s. */}
              {s.table && (
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    {s.table.caption && (
                      <caption className="mb-3 text-left text-sm text-slate-500">
                        {s.table.caption}
                      </caption>
                    )}
                    <thead>
                      <tr>
                        {s.table.headers.map((h) => (
                          <th
                            key={h}
                            scope="col"
                            className="border-b-2 border-brand-gold/40 px-3 py-2.5 font-semibold text-slate-900"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row) => (
                        <tr key={row[0]} className="border-b border-slate-200 align-top">
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className={`px-3 py-2.5 ${ci === 0 ? 'font-medium text-slate-900' : 'text-slate-600'}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </Reveal>
        ))}

        {/* Outbound citations to authoritative bodies. Deliberately not
            nofollow — linking out to primary sources is the point. */}
        {article.citations?.length > 0 && (
          <section className="mt-12 rounded-2xl bg-slate-50 p-6" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="font-serif text-lg font-bold text-slate-900">
              {t.sources || 'Sources & further reading'}
            </h2>
            <ul className="mt-4 space-y-3">
              {article.citations.map((c) => (
                <li key={c.url} className="text-sm leading-relaxed text-slate-600">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-gold underline hover:text-brand-brown"
                  >
                    {c.label}
                  </a>
                  {c.publisher && <span className="text-slate-500"> — {c.publisher}</span>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {content.footerNote && (
          <p className="mt-10 leading-relaxed text-slate-600 [&_a]:text-brand-gold [&_a]:underline [&_a]:hover:text-brand-brown"
            dangerouslySetInnerHTML={{ __html: content.footerNote }} />
        )}

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

        {lang !== 'en' && t.translationNote && (
          <p className="mt-10 text-xs text-slate-500">
            {t.translationNote}{' '}
            <Link to={langPath('en')} hrefLang="en" lang="en" className="underline">English</Link>
          </p>
        )}
      </article>
    </>
  );
}
