import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { ARTICLES } from '../data/articles.js';

export default function Education() {
  return (
    <>
      <Seo
        title="Patient Education Hub"
        description="Clear, surgeon-written guides on knee arthritis, joint replacement, ACL tears, heel pain, ankle injuries and fracture healing — from Dr. Niranjan Ghag, Thane."
        path="/education"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
          Patient Hub
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-slate-900">
          Patient Education
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Surgeon-written guides that help you understand your condition before
          you ever step into the clinic.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80}>
              <Link
                to={`/education/${a.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex w-fit rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-brown">
                  {a.category}
                </span>
                <h2 className="mt-4 font-serif text-xl font-bold leading-snug text-slate-900 group-hover:text-brand-brown">
                  {a.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {a.intro}
                </p>
                <span className="mt-5 text-xs font-medium text-slate-400">
                  {a.readTime} min read
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
