import Seo from '../components/Seo.jsx';
import Image from '../components/Image.jsx';
import { SITE } from '../data/site.js';

const milestones = [
  { title: 'MBBS', detail: 'Completed foundational medical training with honors.' },
  { title: 'D.Ortho', detail: 'Specialized in orthopaedic surgery.' },
  { title: 'DNB (Orthopaedics)', detail: 'Achieved diplomate of national board.' },
  {
    title: 'International Fellowships',
    detail:
      'Completed FIJR, FIRJR, FASM, and FFAS focusing on joint replacement, sports medicine, and foot & ankle surgery.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About — Credentials & Biography"
        description="Dr. Niranjan Sunil Ghag is a distinguished orthopaedic surgeon with international fellowship training in joint replacement, sports medicine and foot & ankle surgery."
        path="/about"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
          About
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-slate-900">
          Professional Journey &amp; Philosophy
        </h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-[2fr,3fr]">
          <Image
            src="/images/dr-ghag-photo.jpg"
            webpSrc="/images/dr-ghag-photo.webp"
            alt={`${SITE.fullName}, Orthopaedic Surgeon`}
            width={1157}
            height={1217}
            aspect="4/5"
            className="rounded-3xl border border-slate-200 bg-white p-2 shadow-sm"
            imgClassName="rounded-2xl"
          />

          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              {SITE.fullName} is a distinguished Orthopaedic Surgeon with a
              comprehensive background in complex trauma, joint replacement, and
              sports medicine. His practice is built on a foundation of rigorous
              international training and a deep-seated commitment to patient
              welfare.
            </p>
            <p>
              With a belief that every patient deserves a life free of pain and
              physical limitation, Dr. Ghag integrates the latest advancements in
              medical technology, including robotic surgery and AI-driven
              diagnostics, into his surgical techniques to ensure precision,
              smaller incisions, and faster recovery times.
            </p>
            <p>
              Beyond his clinical expertise, Dr. Ghag is passionate about giving
              back to the community and frequently participates in outreach
              programs aimed at providing advanced orthopaedic care to
              underserved populations.
            </p>

            <h2 className="pt-4 font-serif text-2xl font-bold text-slate-900">
              Credentials
            </h2>
            <ol className="relative space-y-6 border-l-2 border-brand-gold/40 pl-6">
              {milestones.map((m) => (
                <li key={m.title} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-brand-gold" aria-hidden="true" />
                  <h3 className="font-bold text-slate-900">{m.title}</h3>
                  <p className="text-sm text-slate-600">{m.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
