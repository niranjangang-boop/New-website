import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Image from '../components/Image.jsx';
import Clinics from '../components/Clinics.jsx';
import Reveal from '../components/Reveal.jsx';
import { SITE, SPECIALTIES, CLINIC_LIST_TEXT, CLINIC_COUNT_TEXT } from '../data/site.js';

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
        text: `He consults at ${CLINIC_COUNT_TEXT} Thane West locations: ${CLINIC_LIST_TEXT}. OPD hours differ by location and are listed on the contact page; appointments can be requested by phone or WhatsApp at ${SITE.phoneDisplay}.`,
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
        title="Orthopaedic Surgeon in Thane West"
        description="Dr. Niranjan Ghag, orthopaedic surgeon in Thane West: knee and hip replacement, foot and ankle, sports injury and fracture care. OPD hours and locations."
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
              Dr. Niranjan Ghag · M.S. (Orthopaedics)
            </p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Orthopaedic Surgeon in Thane West:{' '}
              <span className="bg-gradient-to-r from-brand-brown to-brand-gold bg-clip-text text-transparent">
                Knee, Hip, Sports Injury &amp; Fracture Care
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Dr. Niranjan Ghag is an orthopaedic surgeon in Thane West, Maharashtra,
              specialising in robotic-assisted joint replacement of the hip and knee,
              foot &amp; ankle surgery, sports injuries &amp; arthroscopy, and complex
              trauma &amp; fracture management. He consults at {CLINIC_LIST_TEXT} — all
              in Thane West — in English, Marathi and Hindi. Non-surgical treatment is
              considered first wherever it is reasonable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#clinic-heading" className="btn-outline">
                Locations, OPD hours &amp; appointments
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
        <p className="mt-4 text-center text-slate-600 leading-relaxed">
          Dr. Ghag specialises in{' '}
          <Link to="/procedures/knee-replacement" className="text-brand-gold underline hover:text-brand-brown">robotic knee replacement in Thane</Link>,{' '}
          <Link to="/procedures/hip-replacement" className="text-brand-gold underline hover:text-brand-brown">total hip replacement</Link>, and{' '}
          <Link to="/specialties/sports-arthroscopy" className="text-brand-gold underline hover:text-brand-brown">sports injury &amp; arthroscopy (keyhole) surgery</Link>.
        </p>
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

      {/* Visible counterpart to HOME_FAQ_JSONLD. The schema above declares
          these four questions, so the answer text has to exist in the markup —
          native <details> ships it whether or not the reader expands it. */}
      <section className="mx-auto max-w-3xl px-4 py-16" aria-labelledby="home-faq-heading">
        <p className="eyebrow justify-center text-center">Common Questions</p>
        <h2
          id="home-faq-heading"
          className="mt-2 text-center font-serif text-3xl font-bold text-slate-900"
        >
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-3">
          {HOME_FAQ_JSONLD.mainEntity.map((q) => (
            <details
              key={q.name}
              className="glass group rounded-2xl p-5 transition-shadow duration-300 open:shadow-glass-lg"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                <span>{q.name}</span>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-brand-gold transition-transform duration-200 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {q.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>
      </section>

      <Clinics />

    </>
  );
}
