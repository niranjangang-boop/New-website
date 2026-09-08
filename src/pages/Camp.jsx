import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs, { breadcrumbLd } from '../components/Breadcrumbs.jsx';
import { SITE } from '../data/site.js';
import {
  CAMP,
  TIME_SLOTS,
  AGE_BANDS,
  GENDERS,
  COMPLAINT_AREAS,
} from '../data/camp.js';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Orthopaedic Camp', path: '/camp' },
];

const EMPTY = {
  name: '',
  mobile: '',
  age: '',
  gender: '',
  slot: '',
  generalCheckup: false,
  complaint: '',
  company: '', // honeypot — real people never fill this
};

export default function Camp() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [error, setError] = useState('');

  const set = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({
      ...f,
      [field]: value,
      // Selecting "general check-up" clears any complaint already chosen, so
      // the two can never be submitted together.
      ...(field === 'generalCheckup' && value ? { complaint: '' } : {}),
    }));
  };

  const jsonLd = useMemo(() => {
    const graph = [breadcrumbLd(CRUMBS)];
    if (CAMP.date && CAMP.venueName) {
      graph.push({
        '@type': 'Event',
        name: CAMP.name,
        startDate: `${CAMP.date}T${CAMP.timeStart}:00+05:30`,
        endDate: `${CAMP.date}T${CAMP.timeEnd}:00+05:30`,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        description: CAMP.intro,
        url: `${SITE.url}/camp/`,
        location: {
          '@type': 'Place',
          name: CAMP.venueName,
          address: {
            '@type': 'PostalAddress',
            streetAddress: CAMP.venueAddress,
            addressLocality: 'Thane West',
            addressRegion: 'Maharashtra',
            postalCode: '400601',
            addressCountry: 'IN',
          },
          hasMap: CAMP.mapUrl,
        },
        organizer: {
          '@type': 'Physician',
          '@id': `${SITE.url}/#physician`,
          name: SITE.name,
        },
        performer: {
          '@type': 'Physician',
          '@id': `${SITE.url}/#physician`,
          name: SITE.name,
        },
        isAccessibleForFree: true,
        inLanguage: ['en', 'mr', 'hi'],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${SITE.url}/camp/`,
          validFrom: '2026-09-07T00:00:00+05:30',
        },
      });
    }
    return { '@context': 'https://schema.org', '@graph': graph };
  }, []);

  const valid =
    form.name.trim().length > 1 &&
    /^[0-9]{10}$/.test(form.mobile.replace(/\D/g, '').slice(-10)) &&
    form.age &&
    form.gender &&
    form.slot &&
    (form.generalCheckup || form.complaint);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!valid || status === 'sending') return;
    if (form.company) return; // bot

    setStatus('sending');
    setError('');

    const payload = {
      name: form.name.trim(),
      mobile: form.mobile.replace(/\D/g, '').slice(-10),
      age: form.age,
      gender: form.gender,
      slot: form.slot,
      reason: form.generalCheckup ? 'General check-up' : form.complaint,
      submittedAt: new Date().toISOString(),
    };

    // Until the Google Sheet endpoint is configured, registrations go through
    // WhatsApp with the details pre-filled, so the page is usable from day one.
    if (!SITE.campEndpoint) {
      window.open(waRegister(payload), '_blank', 'noopener');
      setStatus('done');
      return;
    }

    try {
      // text/plain keeps this a "simple" request so the browser does not send a
      // CORS preflight, which Apps Script Web Apps do not answer.
      const res = await fetch(SITE.campEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      setStatus('done');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong.');
    }
  }

  function waRegister(p) {
    const msg = [
      `Registration for the ${CAMP.name} on ${CAMP.dateDisplay}:`,
      `Name: ${p.name}`,
      `Mobile: ${p.mobile}`,
      `Age: ${p.age}`,
      `Gender: ${p.gender}`,
      `Preferred time: ${p.slot}`,
      `Reason: ${p.reason}`,
    ].join('\n');
    // Sent to the main practice line, which is the number already used for
    // WhatsApp bookings site-wide. The camp helpdesk number is a phone line and
    // may not accept WhatsApp.
    return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(msg)}`;
  }

  const waFallback = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
    `Hello, I would like to register for the ${CAMP.name}.\nName: ${form.name}\nAge: ${form.age}\nPreferred time: ${form.slot}`
  )}`;

  const field =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/25';
  const label = 'mb-1.5 block text-sm font-semibold text-slate-800';

  return (
    <>
      <Seo
        title={CAMP.name}
        description={`Register for the ${CAMP.name} with Dr. Niranjan Ghag in Thane West${
          CAMP.dateDisplay ? ` on ${CAMP.dateDisplay}` : ''
        }. Choose your time slot between 4 PM and 10 PM.`}
        path="/camp"
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden px-4 py-16">
        <div className="blob -left-24 top-0 h-72 w-72 bg-brand-gold/15 animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl">
          <Breadcrumbs items={CRUMBS} className="mb-6" />
          <p className="eyebrow">Community Camp</p>
          <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-slate-900">
            {CAMP.name}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            {CAMP.dateDisplay && (
              <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-brand-brown">
                {CAMP.dateDisplay}
              </span>
            )}
            <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-brand-brown">
              {CAMP.timeDisplay}
            </span>
            {CAMP.venueName && (
              <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-brand-brown">
                {CAMP.venueName}
              </span>
            )}
            {CAMP.fee && (
              <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-brand-brown">
                {CAMP.fee}
              </span>
            )}
          </div>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{CAMP.intro}</p>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[3fr,4fr]">
            {/* What's included */}
            <Reveal>
              <div className="glass rounded-3xl p-7">
                <h2 className="font-serif text-xl font-bold text-slate-900">
                  What&rsquo;s included — all free
                </h2>
                <ul className="mt-5 space-y-4">
                  {CAMP.services.map((s) => (
                    <li key={s.name}>
                      <p className="font-semibold text-slate-900">{s.name}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{s.detail}</p>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-7 font-semibold text-slate-900">Venue</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{CAMP.venueName}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{CAMP.venueAddress}</p>
                <a
                  href={CAMP.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand-brown px-5 py-2 text-sm font-semibold text-brand-brown transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-brown hover:text-white"
                >
                  Get Directions
                </a>

                <h3 className="mt-7 font-semibold text-slate-900">
                  For appointments &amp; enquiries
                </h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href={`tel:+${SITE.phoneRaw}`}
                      className="font-serif text-lg font-bold text-brand-gold hover:text-brand-brown"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:+${CAMP.enquiryRaw}`}
                      className="font-serif text-lg font-bold text-brand-gold hover:text-brand-brown"
                    >
                      {CAMP.enquiryDisplay}
                    </a>
                    <span className="ml-2 text-sm text-slate-500">(camp helpdesk)</span>
                  </li>
                </ul>

                <p className="mt-7 text-sm leading-relaxed text-slate-500">
                  Bring any previous X-rays, MRI films or reports with you, along with a list of
                  medicines you currently take.
                </p>
              </div>
            </Reveal>

            {/* Registration form */}
            <div className="glass rounded-3xl p-7">
              <h2 className="font-serif text-xl font-bold text-slate-900">Register your slot</h2>

              {status === 'done' ? (
                <div className="mt-6 rounded-2xl bg-emerald-50 p-6 text-center">
                  <p className="font-serif text-lg font-bold text-emerald-900">
                    You&rsquo;re registered
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-800">
                    We have your details for the {form.slot} slot. Our team will call
                    you on {form.mobile} to confirm. Please arrive 10 minutes early.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(EMPTY);
                      setStatus('idle');
                    }}
                    className="mt-5 text-sm font-semibold text-brand-gold underline hover:text-brand-brown"
                  >
                    Register someone else
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  {/* honeypot */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={form.company}
                    onChange={set('company')}
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />

                  <div>
                    <label htmlFor="cp-name" className={label}>Full name</label>
                    <input
                      id="cp-name" type="text" required autoComplete="name"
                      value={form.name} onChange={set('name')}
                      placeholder="Your name" className={field}
                    />
                  </div>

                  <div>
                    <label htmlFor="cp-mobile" className={label}>Mobile number</label>
                    <input
                      id="cp-mobile" type="tel" required inputMode="numeric" autoComplete="tel"
                      value={form.mobile} onChange={set('mobile')}
                      placeholder="10-digit mobile number" className={field}
                    />
                    <p className="mt-1.5 text-xs text-slate-500">
                      Used only to confirm your slot.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cp-age" className={label}>Age</label>
                      <select id="cp-age" required value={form.age} onChange={set('age')} className={field}>
                        <option value="">Select age</option>
                        {AGE_BANDS.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cp-gender" className={label}>Gender</label>
                      <select id="cp-gender" required value={form.gender} onChange={set('gender')} className={field}>
                        <option value="">Select</option>
                        {GENDERS.map((g) => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cp-slot" className={label}>Preferred time</label>
                    <select id="cp-slot" required value={form.slot} onChange={set('slot')} className={field}>
                      <option value="">Select a time slot</option>
                      {TIME_SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox" checked={form.generalCheckup} onChange={set('generalCheckup')}
                        className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 accent-brand-gold"
                      />
                      <span className="text-sm font-medium text-slate-800">
                        This is a general check-up — I don&rsquo;t have a specific complaint
                      </span>
                    </label>
                  </div>

                  {!form.generalCheckup && (
                    <div>
                      <label htmlFor="cp-complaint" className={label}>Which area is troubling you?</label>
                      <select
                        id="cp-complaint" required value={form.complaint}
                        onChange={set('complaint')} className={field}
                      >
                        <option value="">Select an area</option>
                        {COMPLAINT_AREAS.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                      <p className="font-semibold">We couldn&rsquo;t submit that.</p>
                      <p className="mt-1">{error}</p>
                      <a href={waFallback} target="_blank" rel="noopener noreferrer"
                        className="mt-2 inline-block font-semibold underline">
                        Register on WhatsApp instead →
                      </a>
                    </div>
                  )}

                  <button
                    type="submit" disabled={!valid || status === 'sending'}
                    className="btn-gradient w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Registering…' : 'Register for the camp'}
                  </button>

                  <p className="text-xs leading-relaxed text-slate-500">
                    By registering you agree to be contacted about this camp. We record only your
                    name, mobile, age band, gender, chosen slot and the general area of your
                    complaint — no medical details are collected on this form.
                  </p>
                </form>
              )}
            </div>
          </div>

          <p className="mt-10 text-sm text-slate-600">
            Can&rsquo;t attend the camp?{' '}
            <Link to="/book" className="text-brand-gold underline hover:text-brand-brown">
              Book a regular consultation
            </Link>{' '}
            or see{' '}
            <Link to="/contact" className="text-brand-gold underline hover:text-brand-brown">
              contact &amp; locations
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
