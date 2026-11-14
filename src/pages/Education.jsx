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

const fmt = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default function Education() {
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
                {g.items.map((a) => (
                  <li key={a.slug} className="glass flex flex-col rounded-2xl p-5">
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
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
