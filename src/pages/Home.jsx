import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Image from '../components/Image.jsx';
import Clinics from '../components/Clinics.jsx';
import Reveal from '../components/Reveal.jsx';
import { SITE, SPECIALTIES } from '../data/site.js';

const HOME_FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Dr. Niranjan Ghag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. Niranjan Ghag is an orthopaedic surgeon based in Thane West, Maharashtra, specialising in robotic hip and knee replacement, foot and ankle surgery, sports injuries and arthroscopy, and trauma and fracture management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does Dr. Niranjan Ghag consult in Thane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "He consults at two Thane West locations: Joshi's Neurotrauma Centre, Khopat (opposite Viviana Mall), and Sahayogi Hospital LLP, Naupada. Appointments can be booked online or on WhatsApp at +91 90760 79000.",
      },
    },
    {
      '@type': 'Question',
      name: 'What conditions does Dr. Ghag treat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'He treats knee and hip arthritis, sports injuries such as ACL and meniscus tears, foot and ankle problems including heel pain and plantar fasciitis, and fractures and complex trauma. Both non-surgical and surgical options are offered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which languages are consultations available in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consultations are available in English, Marathi and Hindi.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Seo
        title="Orthopaedic Surgeon in Thane"
        description="Dr. Niranjan Ghag is an orthopaedic surgeon in Thane West offering robotic hip & knee replacement, foot & ankle surgery, sports injury & arthroscopy, and trauma care. Book in English, Marathi or Hindi."
        path="/"
        jsonLd={HOME_FAQ_JSONLD}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        {/* Decorative gradient mesh */}
        <div className="blob -left-20 -top-24 h-80 w-80 bg-brand-gold/20 animate-float-slow" aria-hidden="true" />
        <div className="blob -right-16 top-1/3 h-96 w-96 bg-brand-brown/10 animate-float" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" aria-hidden="true" />
              Now accepting consultations
            </p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Advanced Orthopaedic Care with{' '}
              <span className="bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">
                Precision, Compassion &amp; Innovation
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Dr. Niranjan Ghag is an orthopaedic surgeon in Thane West, Maharashtra,
              specialising in robotic-assisted joint replacement of the hip and knee,
              foot &amp; ankle surgery, sports injuries &amp; arthroscopy, and complex
              trauma &amp; fracture management. He consults at Joshi&rsquo;s Neurotrauma
              Centre, Khopat (opposite Viviana Mall) and Sahayogi Hospital LLP, Naupada
              — both in Thane West — with appointments available in English, Marathi
              and Hindi. His tissue-sparing robotic techniques are designed for faster
              recovery: many knee and hip replacement patients walk the same day and
              return home within two to three days.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/book" className="btn-gradient">
                Book Appointment
              </Link>
              <a href={`tel:+${SITE.phoneRaw}`} className="btn-outline">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          {/* LCP image: priority bypasses lazy-loading; aspect box kills CLS */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-gold/30 via-transparent to-brand-brown/20 blur-2xl" aria-hidden="true" />
            <Image
              src="/images/dr-ghag-photo.jpg"
              webpSrc="/images/dr-ghag-photo-400.webp 400w, /images/dr-ghag-photo-540.webp 540w, /images/dr-ghag-photo.webp 969w"
              alt="Dr. Niranjan Ghag, Orthopaedic Surgeon"
              width={1157}
              height={1217}
              aspect="4/5"
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="relative w-full rounded-3xl border-4 border-white bg-slate-200 shadow-glass-lg"
            />
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="relative mx-auto max-w-6xl px-4 py-16" aria-labelledby="specialties-heading">
        <p className="eyebrow justify-center text-center">Clinical Expertise</p>
        <h2 id="specialties-heading" className="mt-2 text-center font-serif text-3xl font-bold text-slate-900">
          Specialties
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTIES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                to={`/specialties/${s.slug}`}
                className="glass group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glass-lg"
              >
                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-brand-brown">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold transition-transform duration-300 group-hover:translate-x-1">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Clinics />

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-brown to-brand-dark">
        <div className="blob left-1/4 top-0 h-64 w-64 bg-brand-gold/20 animate-float" aria-hidden="true" />
        <Reveal>
          <div className="relative mx-auto max-w-4xl px-4 py-16 text-center">
            <h2 className="font-serif text-3xl font-bold text-white">
              Unsure about your condition?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Schedule a detailed clinical evaluation. A correct early diagnosis
              translates to simpler treatments and faster recovery.
            </p>
            <Link to="/book" className="btn-gradient mt-7">
              Book Your Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
