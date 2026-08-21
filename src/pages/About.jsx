import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Image from '../components/Image.jsx';
import Reveal from '../components/Reveal.jsx';
import { SITE } from '../data/site.js';
import {
  CURRENT_ROLES,
  QUALIFICATIONS,
  FELLOWSHIPS,
  TRAINING,
  MEMBERSHIPS,
  CERTIFICATIONS,
  EXPERIENCE,
  RESEARCH_HIGHLIGHTS,
  MEDICAL_COUNCIL_REG,
} from '../data/credentials.js';

export default function About() {
  // Reuses the #physician @id from index.html's global schema so Google merges
  // these credentials into the existing entity rather than seeing two doctors.
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Physician',
        '@id': `${SITE.url}/#physician`,
        name: SITE.name,
        alternateName: 'Dr. Niranjan Sunil Ghag',
        url: `${SITE.url}/about/`,
        image: `${SITE.url}/images/dr-ghag-photo.jpg`,
        medicalSpecialty: 'Orthopedic',
        knowsLanguage: ['en', 'mr', 'hi'],
        jobTitle: CURRENT_ROLES.title,
        hospitalAffiliation: CURRENT_ROLES.hospitals.map((name) => ({
          '@type': 'Hospital',
          name,
        })),
        hasCredential: [
          ...QUALIFICATIONS.map((q) => ({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            name: q.degree,
            recognizedBy: { '@type': 'Organization', name: q.university || q.institution },
          })),
          ...FELLOWSHIPS.map((f) => ({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Fellowship',
            name: f.name,
            recognizedBy: { '@type': 'Organization', name: f.institution },
          })),
          ...CERTIFICATIONS.map((c) => ({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certification',
            name: c.name,
            recognizedBy: { '@type': 'Organization', name: c.body },
          })),
        ],
        alumniOf: [
          ...new Set([
            ...QUALIFICATIONS.filter((q) => !q.isAwardingBody).map((q) => q.institution),
            ...FELLOWSHIPS.map((f) => f.institution),
            ...TRAINING.map((t) => t.institution),
          ]),
        ].map((name) => ({ '@type': 'CollegeOrUniversity', name })),
        memberOf: MEMBERSHIPS.map((m) => ({ '@type': 'Organization', name: m.name })),
      },
    }),
    []
  );

  return (
    <>
      <Seo
        title="About — Credentials & Training"
        description="Dr. Niranjan Ghag: M.S., D.N.B. orthopaedic surgeon in Thane with fellowships in joint replacement & robotics, arthroscopy and foot & ankle surgery."
        path="/about"
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden px-4 py-16">
        <div className="blob -left-24 top-0 h-72 w-72 bg-brand-gold/15 animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <p className="eyebrow">About</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-slate-900">
            Dr. Niranjan Ghag — Credentials &amp; Training
          </h1>

          <div className="mt-10 grid gap-12 lg:grid-cols-[2fr,3fr]">
            <div className="relative self-start">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-gold/25 via-transparent to-brand-brown/15 blur-2xl" aria-hidden="true" />
              <Image
                src="/images/dr-ghag-photo.jpg"
                webpSrc="/images/dr-ghag-photo.webp"
                alt={`${SITE.fullName}, Orthopaedic Surgeon in Thane`}
                width={1157}
                height={1217}
                aspect="4/5"
                className="glass relative rounded-3xl p-2"
                imgClassName="rounded-2xl"
              />
              <p className="mt-4 text-center text-xs text-slate-500">{MEDICAL_COUNCIL_REG}</p>
            </div>

            <div className="space-y-5 leading-relaxed text-slate-700">
              <p>
                Dr. Niranjan Sunil Ghag is a Consultant Orthopaedic Surgeon practising in
                Thane, Maharashtra. He holds an M.S. and D.N.B. in Orthopaedics and has
                completed three sub-specialty fellowships — in joint replacement and
                robotics, in arthroscopy and sports medicine, and in foot and ankle surgery.
              </p>

              <div className="glass rounded-2xl p-5">
                <h2 className="font-serif text-lg font-bold text-slate-900">
                  {CURRENT_ROLES.title}
                </h2>
                <ul className="mt-3 space-y-2">
                  {CURRENT_ROLES.hospitals.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                His surgical training was built in high-volume government trauma centres —
                Grant Government Medical College and Sir J.J. Group of Hospitals, Lokmanya
                Tilak Municipal Medical College at Sion, and Dr. Shankarrao Chavan Government
                Medical College in Nanded — where complex trauma arrives without appointment
                and decisions are made at volume. His fellowship training at KIMS Sunshine
                Bone and Joint Institute in Hyderabad, one of India&rsquo;s highest-volume
                arthroplasty centres, added robotic and revision joint replacement.
              </p>
              <p>
                He consults in English, Marathi and Hindi at two locations in Thane West, and
                treats knee and hip arthritis, sports injuries, foot and ankle problems, and
                fractures and complex trauma — with non-surgical options considered first
                wherever they are reasonable.
              </p>
            </div>
          </div>

          {/* Surgical experience */}
          <section className="mt-16" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="font-serif text-2xl font-bold text-slate-900">
              Surgical Experience
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.label} delay={i * 80}>
                  <div className="glass h-full rounded-3xl p-6">
                    <p className="bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text font-serif text-4xl font-bold text-transparent">
                      {e.figure}
                    </p>
                    <h3 className="mt-2 font-bold text-slate-900">{e.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Qualifications */}
          <section className="mt-16" aria-labelledby="qualifications-heading">
            <h2 id="qualifications-heading" className="font-serif text-2xl font-bold text-slate-900">
              Qualifications
            </h2>
            <ol className="mt-6 relative space-y-6 border-l-2 border-brand-gold/40 pl-6">
              {QUALIFICATIONS.map((q, i) => (
                <Reveal key={q.degree} delay={i * 60}>
                  <li className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-brand-gold to-brand-brown shadow-glow" aria-hidden="true" />
                    <h3 className="font-bold text-slate-900">
                      {q.degree}
                      {q.year && <span className="font-normal text-slate-500"> · {q.year}</span>}
                    </h3>
                    <p className="text-sm text-slate-600">{q.institution}</p>
                    {q.university && <p className="text-sm text-slate-500">{q.university}</p>}
                  </li>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* Fellowships */}
          <section className="mt-16" aria-labelledby="fellowships-heading">
            <h2 id="fellowships-heading" className="font-serif text-2xl font-bold text-slate-900">
              Sub-specialty Fellowship Training
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {FELLOWSHIPS.map((f, i) => (
                <Reveal key={f.name} delay={i * 80}>
                  <div className="glass h-full rounded-3xl p-6">
                    <h3 className="font-bold leading-snug text-slate-900">{f.name}</h3>
                    <p className="mt-2 text-sm font-medium text-brand-brown">{f.institution}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.focus}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Training posts */}
          <section className="mt-16" aria-labelledby="training-heading">
            <h2 id="training-heading" className="font-serif text-2xl font-bold text-slate-900">
              Residency &amp; Clinical Training
            </h2>
            <ul className="mt-6 space-y-3">
              {TRAINING.map((t) => (
                <li key={`${t.role}-${t.institution}`} className="glass rounded-2xl px-5 py-4">
                  <p className="font-semibold text-slate-900">{t.role}</p>
                  <p className="text-sm text-slate-600">{t.institution}</p>
                  <p className="text-sm text-slate-500">{t.period}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Research */}
          <section className="mt-16" aria-labelledby="research-heading">
            <h2 id="research-heading" className="font-serif text-2xl font-bold text-slate-900">
              Research &amp; Publications
            </h2>
            <ul className="mt-6 space-y-3">
              {RESEARCH_HIGHLIGHTS.map((r) => (
                <li key={r} className="flex gap-3 leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          {/* Memberships + certifications */}
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <section aria-labelledby="memberships-heading">
              <h2 id="memberships-heading" className="font-serif text-2xl font-bold text-slate-900">
                Professional Memberships
              </h2>
              <ul className="mt-6 space-y-2.5">
                {MEMBERSHIPS.map((m) => (
                  <li key={m.name} className="text-sm leading-relaxed text-slate-700">
                    <span className="font-medium text-slate-900">{m.name}</span>
                    <span className="text-slate-500"> — {m.id}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="certifications-heading">
              <h2 id="certifications-heading" className="font-serif text-2xl font-bold text-slate-900">
                Certifications
              </h2>
              <ul className="mt-6 space-y-2.5">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.name} className="text-sm leading-relaxed text-slate-700">
                    <span className="font-medium text-slate-900">{c.name}</span>
                    <span className="text-slate-500"> — {c.body}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Philosophy + CTA */}
          <section className="mt-16 max-w-3xl" aria-labelledby="philosophy-heading">
            <h2 id="philosophy-heading" className="font-serif text-2xl font-bold text-slate-900">
              Approach to Treatment
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
              <p>
                Not every orthopaedic problem needs an operation, and a good number are made
                worse by one done too early. Weight management, physiotherapy, activity
                modification and injections are genuinely effective for early arthritis and
                for many soft-tissue problems, and they are the first conversation rather
                than a formality before surgery.
              </p>
              <p>
                When surgery is the right answer, precision is what determines how long the
                result lasts. Robotic assistance in joint replacement plans each bone cut in
                3D and holds the instrument to that plan, protecting healthy bone and
                ligament. Arthroscopy treats the joint through incisions a few millimetres
                wide. Both exist to reduce what the body has to recover from — which is why
                many patients walk the same day and go home within two to three days.
              </p>
              <p>
                Patients are told what the alternatives are, what the operation cannot fix,
                and what recovery will realistically ask of them, in the language they are
                most comfortable in.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/book" className="btn-gradient">
                Book a Consultation
              </Link>
              <Link to="/specialties/joint-replacement" className="btn-outline">
                Explore Specialties
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
