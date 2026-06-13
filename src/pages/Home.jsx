import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Image from '../components/Image.jsx';
import Clinics from '../components/Clinics.jsx';
import { SITE, SPECIALTIES } from '../data/site.js';

export default function Home() {
  return (
    <>
      <Seo
        title={null}
        description="Dr. Niranjan Ghag — Orthopaedic Surgeon in Thane specializing in robotic joint replacement, foot & ankle surgery, sports injuries, arthroscopy and complex trauma."
        path="/"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-block rounded-full bg-brand-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
              Now accepting consultations
            </p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Advanced Orthopaedic Care with Precision, Compassion &amp; Innovation
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Pioneering robotic joint replacement, complex trauma management and
              sports medicine with a patient-first philosophy focused on mobility
              and speed of recovery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="rounded-full bg-brand-brown px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:+${SITE.phoneRaw}`}
                className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          {/* LCP image: priority bypasses lazy-loading; aspect box kills CLS */}
          <Image
            src="/images/dr-ghag-photo.jpg"
            webpSrc="/images/dr-ghag-photo-400.webp 400w, /images/dr-ghag-photo-540.webp 540w, /images/dr-ghag-photo.webp 969w"
            alt="Dr. Niranjan Ghag, Orthopaedic Surgeon"
            width={1157}
            height={1217}
            aspect="4/5"
            priority
            sizes="(min-width: 1024px) 540px, 100vw"
            className="mx-auto w-full max-w-md rounded-3xl border-4 border-white bg-slate-200 shadow-2xl"
          />
        </div>
      </section>

      {/* Specialties */}
      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="specialties-heading">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand-gold">
          Clinical Expertise
        </p>
        <h2 id="specialties-heading" className="mt-2 text-center font-serif text-3xl font-bold text-slate-900">
          Specialties
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTIES.map((s) => (
            <Link
              key={s.slug}
              to={`/specialties/${s.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-brand-brown">
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-gold">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Clinics />

      {/* CTA */}
      <section className="bg-brand-brown">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-white">
            Unsure about your condition?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Schedule a detailed clinical evaluation. A correct early diagnosis
            translates to simpler treatments and faster recovery.
          </p>
          <Link
            to="/book"
            className="mt-7 inline-block rounded-full bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-dark transition hover:brightness-110"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
