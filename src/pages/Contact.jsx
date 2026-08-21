import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs, { breadcrumbLd } from '../components/Breadcrumbs.jsx';
import { SITE, CLINICS } from '../data/site.js';

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
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {CLINICS.map((c, i) => (
                <Reveal key={c.name} delay={i * 80}>
                  <div className="glass flex h-full flex-col rounded-3xl p-6">
                    <h3 className="font-serif text-lg font-bold text-slate-900">{c.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-gold">{c.shortLocation}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{c.address}</p>
                    {c.landmark && <p className="mt-2 text-sm text-slate-500">{c.landmark}</p>}

                    {c.hours?.length > 0 && (
                      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Availability
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
              Cover is available round the clock for emergency and trauma cases. Routine
              consultations are by appointment — call or message on WhatsApp to confirm a
              time that suits you.
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
        </div>
      </section>
    </>
  );
}
