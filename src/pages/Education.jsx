import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { ARTICLES } from '../data/articles.js';
import TRANSLATION_INDEX from '../data/translation-index.json';

// Articles grouped by body part, so a patient can jump straight to their
// problem instead of scrolling one long list. The first matching rule wins.
const GROUPS = [
  { id: 'knee', name: 'Knee', intro: 'Knee arthritis, knee replacement, ACL and meniscus injuries, and everyday knee pain.', test: /knee|acl|meniscus/ },
  { id: 'hip', name: 'Hip', intro: 'Hip pain, hip arthritis, hip replacement and hip fractures in older adults.', test: /hip/ },
  { id: 'shoulder-elbow', name: 'Shoulder & Elbow', intro: 'Frozen shoulder, rotator cuff tears, dislocations, and tennis and golfer’s elbow.', test: /shoulder|rotator|elbow/ },
  { id: 'hand-wrist', name: 'Hand & Wrist', intro: 'Numbness, locking fingers, wrist lumps and thumb-side wrist pain.', test: /wrist|hand|finger|carpal|ganglion|thumb|quervain/ },
  { id: 'foot-ankle', name: 'Foot & Ankle', intro: 'Heel pain, sprains, bunions, flat feet, Achilles problems and diabetic foot care.', test: /foot|feet|ankle|heel|plantar|bunion|achilles/ },
  { id: 'spine', name: 'Back, Neck & Spine', intro: 'Back and neck pain, slipped disc and sciatica, spinal stenosis and when a scan helps.', test: /back|spine|spinal|neck|disc|sciatica|stenosis/ },
  { id: 'bone', name: 'Fractures & Bone Health', intro: 'How fractures heal, weak bones (osteoporosis), and vitamin D and calcium.', test: /fracture|osteoporosis|vitamin|bone/ },
  { id: 'other', name: 'Sports Injuries & Other Treatments', intro: 'Treatments used across several conditions.', test: /.*/ },
];

const grouped = GROUPS.map((g) => ({ ...g, items: [] }));
ARTICLES.forEach((a) => {
  (grouped.find((g) => g.test.test(a.slug)) || grouped[grouped.length - 1]).items.push(a);
});
const sections = grouped.filter((g) => g.items.length);

// Client-side search over the article list already bundled with the page —
// no server, database or Netlify function involved.
const norm = (t) => (t || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
const SEARCH_INDEX = ARTICLES.map((a) => ({
  article: a,
  text: norm([a.title, a.intro, a.category, ...(a.tags || []), a.slug.replace(/-/g, ' ')].join(' ')),
}));

const fmt = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

function ArticleCard({ a }) {
  return (
    <li className="glass flex flex-col rounded-2xl p-5">
      <Link to={`/education/${a.slug}`} className="font-serif text-lg font-bold leading-snug text-slate-900 hover:text-brand-brown">
        {a.title}
      </Link>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">{a.intro}</p>
      <p className="mt-3 text-xs text-slate-400">
        {a.readTime} min read · Updated {fmt(a.dateModified || a.date)}
        {TRANSLATION_INDEX.mr.includes(a.slug) && (
          <> · <Link to={`/mr/education/${a.slug}`} lang="mr" hrefLang="mr" className="underline hover:text-brand-brown">मराठी</Link></>
        )}
        {TRANSLATION_INDEX.hi.includes(a.slug) && (
          <> · <Link to={`/hi/education/${a.slug}`} lang="hi" hrefLang="hi" className="underline hover:text-brand-brown">हिंदी</Link></>
        )}
      </p>
    </li>
  );
}

export default function Education() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const words = norm(query).split(/\s+/).filter(Boolean);
    if (!words.length) return null;
    return SEARCH_INDEX.filter((e) => words.every((w) => e.text.includes(w))).map((e) => e.article);
  }, [query]);

  return (
    <>
      <Seo
        title="Patient Education Hub"
        description={`${ARTICLES.length} surgeon-written guides on knee, hip, shoulder, hand, foot, spine and bone problems, grouped by body part. Many also in Marathi and Hindi.`}
        path="/education"
      />

      <section className="relative overflow-hidden px-4 py-16">
        <div className="blob -right-24 top-0 h-72 w-72 bg-brand-gold/15 animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <p className="eyebrow">Patient Hub</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-slate-900">Patient Education</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Guides written by Dr. Niranjan Ghag to help you understand your condition, including when
            surgery is and is not needed. Choose a body part below. Many guides are also available in
            मराठी and हिंदी.
          </p>

          <div className="mt-8 max-w-xl">
            <label htmlFor="edu-search" className="sr-only">Search the guides</label>
            <input
              id="edu-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides, e.g. knee replacement, ACL, heel pain"
              className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-900 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/25"
            />
          </div>

          {results && (
            <section className="mt-10" aria-live="polite" aria-labelledby="search-h">
              <h2 id="search-h" className="font-serif text-2xl font-bold text-slate-900">
                {results.length} {results.length === 1 ? 'guide' : 'guides'} found
              </h2>
              {results.length ? (
                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((a) => <ArticleCard key={a.slug} a={a} />)}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-slate-600">
                  No guide matches that yet. Try a simpler word such as &ldquo;knee&rdquo; or &ldquo;back&rdquo;, or browse by body part below.
                </p>
              )}
            </section>
          )}

          <nav aria-label="Body parts" className="mt-8 flex flex-wrap gap-2">
            {sections.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm text-slate-700 hover:border-brand-gold hover:text-brand-brown">
                {g.name} <span className="text-slate-400">({g.items.length})</span>
              </a>
            ))}
          </nav>

          {sections.map((g) => (
            <section key={g.id} id={g.id} className="mt-14 scroll-mt-24" aria-labelledby={`${g.id}-h`}>
              <h2 id={`${g.id}-h`} className="font-serif text-2xl font-bold text-slate-900">{g.name}</h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-600">{g.intro}</p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((a) => <ArticleCard key={a.slug} a={a} />)}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
