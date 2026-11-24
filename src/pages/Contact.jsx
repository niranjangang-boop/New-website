import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs, { breadcrumbLd } from '../components/Breadcrumbs.jsx';
import { SITE, CLINICS, slugify } from '../data/site.js';

// Plain clinic-information FAQ. Facts only, matching the page above; no medical
// advice, so it can never stand in for a consultation.
const CLINIC_FAQS = [
  {
    q: 'How do I book an appointment?',
    a: 'Call or WhatsApp the clinic, or use the booking form on this website. You choose a preferred date and time, and the clinic team confirms the slot on WhatsApp.',
  },
  {
    q: 'Where and when does Dr. Ghag consult?',
    a: 'Dr. Ghag consults at the locations listed above, each with its own hours. Some locations are by appointment only, so please call or message on WhatsApp to confirm the time and place before you travel.',
  },
  {
    q: 'In which languages can I consult?',
    a: 'Consultations are available in English, Marathi and Hindi.',
  },
  {
    q: 'What should I bring?',
    a: 'Bring previous X-rays, MRI or CT scans (the films or discs, not only the reports), a list of your current medicines, any operation notes or discharge summaries, and your Mediclaim or insurance details if surgery may be discussed.',
  },
  {
    q: 'What are the consultation charges?',
    a: 'Consultation charges are explained when you book.',
  },
  {
    q: 'Can I get a diagnosis over the phone or on this website?',
    a: 'No. The guides on this website are general information. A diagnosis and treatment plan need an examination and, where needed, tests at a consultation.',
  },
  {
    q: 'What should I do in an emergency?',
    a: 'For a serious injury, a suspected fracture, or sudden severe pain, weakness or numbness, go to the nearest hospital emergency department straight away. Do not wait for a clinic appointment.',
  },
];

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
];

export default function Contact() {
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumbLd(CRUMBS),
        {
          '@type': 'ContactPage',
          '@id': `${SITE.url}/contact/#page`,
          url: `${SITE.url}/contact/`,
          name: `Contact ${SITE.name}`,
          inLanguage: 'en',
          about: { '@type': 'Physician', '@id': `${SITE.url}/#physician` },
        },
        {
          '@type': 'FAQPage',
          '@id': `${SITE.url}/contact/#faq`,
          mainEntity: CLINIC_FAQS.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    }),
    []
  );

  const waUrl = `${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Dr. Ghag, I would like to enquire about an appointment.`
  )}`;

  return (
    <>
      <Seo
        title="Contact & Consulting Locations"
        description={`Contact Dr. Niranjan Ghag, orthopaedic surgeon in Thane West — phone, WhatsApp, email and consulting locations. Appointments in English, Marathi and Hindi.`}
        path="/contact"
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden px-4 py-16">
        <div className="blob -right-20 top-0 h-72 w-72 bg-brand-gold/15 animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs items={CRUMBS} className="mb-6" />
          <p className="eyebrow">Contact</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-slate-900">
            Contact &amp; Consulting Locations
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Appointments can be booked by phone, on WhatsApp, or through the booking
            form. Consultations are available in English, Marathi and Hindi.
          </p>

          {/* Direct contact */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`tel:+${SITE.phoneRaw}`}
              className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</p>
              <p className="mt-2 font-serif text-lg font-bold text-slate-900 group-hover:text-brand-brown">
                {SITE.phoneDisplay}
              </p>
              <p className="mt-1 text-sm text-slate-500">Primary line</p>
            </a>

            {SITE.phoneSecondaryDisplay && (
              <a
                href={`tel:+${SITE.phoneSecondaryRaw}`}
                className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</p>
                <p className="mt-2 font-serif text-lg font-bold text-slate-900 group-hover:text-brand-brown">
                  {SITE.phoneSecondaryDisplay}
                </p>
                <p className="mt-1 text-sm text-slate-500">Alternate line</p>
              </a>
            )}

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">WhatsApp</p>
              <p className="mt-2 font-serif text-lg font-bold text-slate-900 group-hover:text-brand-brown">
                Message us
              </p>
              <p className="mt-1 text-sm text-slate-500">Usually quickest</p>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
              <p className="mt-2 break-all font-serif text-base font-bold text-slate-900 group-hover:text-brand-brown">
                {SITE.email}
              </p>
              <p className="mt-1 text-sm text-slate-500">For reports &amp; queries</p>
            </a>
          </div>

          <div className="mt-8">
            <Link to="/book" className="btn-gradient">
              Book an Appointment
            </Link>
          </div>

          {/* Locations */}
          <section className="mt-16" aria-labelledby="locations-heading">
            <h2 id="locations-heading" className="font-serif text-2xl font-bold text-slate-900">
              Consulting Locations
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {CLINICS.map((c, i) => (
                <Reveal key={c.name} delay={i * 80}>
                  <div className="glass flex h-full flex-col rounded-3xl p-6">
                    <h3 className="font-serif text-lg font-bold text-slate-900">
                      <Link to={`/locations/${slugify(c.name)}`} className="hover:text-brand-brown">{c.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-gold">{c.shortLocation}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{c.address}</p>
                    {c.landmark && <p className="mt-2 text-sm text-slate-500">{c.landmark}</p>}

                    {c.hours?.length > 0 && (
                      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          OPD hours
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {c.hours.map((h) => (
                            <li key={`${h.days}-${h.time}`} className="flex justify-between gap-3 text-sm">
                              <span className="text-slate-600">{h.days}</span>
                              <span className="text-right font-semibold text-slate-900">{h.time}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <a
                      href={c.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand-brown px-5 py-2.5 text-sm font-semibold text-brand-brown transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-brown hover:text-white"
                    >
                      Get Directions
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">
              The hours above are Dr. Ghag&rsquo;s own consulting hours. Joshi&rsquo;s
              Neurotrauma Centre and Kaizen Super Speciality Hospital also have 24-hour
              emergency departments run by the hospitals. For any visit, call or message on
              WhatsApp first to confirm the time and location. Consultation charges are
              explained when you book.
            </p>
          </section>

          {/* What to bring */}
          <section className="mt-16 max-w-3xl" aria-labelledby="visit-heading">
            <h2 id="visit-heading" className="font-serif text-2xl font-bold text-slate-900">
              What to bring to your consultation
            </h2>
            <ul className="mt-5 space-y-2.5">
              {[
                'Any previous X-rays, MRI or CT scans — the films or discs, not only the reports.',
                'A list of your current medications, including doses.',
                'Previous operation notes or discharge summaries, if you have had surgery before.',
                'Your health insurance or Mediclaim policy details, if you may need surgery.',
                'A note of what makes the pain better or worse, and how far you can walk comfortably.',
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Clinic information FAQ */}
          <section className="mt-16 max-w-3xl" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-serif text-2xl font-bold text-slate-900">
              Common questions about visiting
            </h2>
            <div className="mt-5 space-y-3">
              {CLINIC_FAQS.map((f) => (
                <details key={f.q} className="glass rounded-2xl p-5">
                  <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
                  <p className="mt-3 leading-relaxed text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
