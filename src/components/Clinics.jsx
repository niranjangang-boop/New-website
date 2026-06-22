import { useMemo, useState } from 'react';
import { SITE, CLINICS } from '../data/site.js';
import Reveal from './Reveal.jsx';

/**
 * Consulting locations with interactive WhatsApp booking.
 * Supports multiple clinic locations — add more via the CMS admin at /admin.
 */
export default function Clinics() {
  const [selectedClinic, setSelectedClinic] = useState(0);
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');

  const clinic = CLINICS[selectedClinic] || CLINICS[0];

  // OPD runs 12:00 AM – 8:00 AM and 3:00 PM – 11:30 PM Mon–Sat, and 24 hours on Sunday.
  const slots = useMemo(() => {
    if (!date) return [];
    const out = [];
    const fmt = (h) => {
      const period = h < 12 ? 'AM' : 'PM';
      const display = h % 12 === 0 ? 12 : h % 12;
      return { label: `${display}:00 ${period}`, half: `${display}:30 ${period}` };
    };
    const day = new Date(date).getDay();
    if (day === 0) {
      // Sunday — open 24 hours
      for (let h = 0; h < 24; h++) {
        const { label, half } = fmt(h);
        out.push(label, half);
      }
    } else {
      for (let h = 0; h < 8; h++) {
        const { label, half } = fmt(h);
        out.push(label, half);
      }
      for (let h = 15; h < 23; h++) {
        const { label, half } = fmt(h);
        out.push(label, half);
      }
      out.push(fmt(23).label); // 11:00 PM
      out.push('11:30 PM');
    }
    return out;
  }, [date]);

  const today = new Date().toISOString().split('T')[0];

  const waLink = useMemo(() => {
    const msg = [
      `Hello, I would like to book an appointment with ${SITE.name}.`,
      name && `Name: ${name}`,
      date && `Preferred date: ${date}`,
      slot && `Preferred time: ${slot}`,
      clinic && `Location: ${clinic.name}, ${clinic.shortLocation}`,
    ]
      .filter(Boolean)
      .join('\n');
    return `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [name, date, slot, clinic]);

  if (!CLINICS.length) return null;

  return (
    <section aria-labelledby="clinic-heading" className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow justify-center text-center">
        {CLINICS.length > 1 ? 'Consulting Locations' : 'Consulting Location'}
      </p>
      <h2 id="clinic-heading" className="mt-2 text-center font-serif text-3xl font-bold text-slate-900">
        Visit the Clinic
      </h2>

      {/* Location tabs — shown only when multiple clinics exist */}
      {CLINICS.length > 1 && (
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CLINICS.map((c, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setSelectedClinic(i); setDate(''); setSlot(''); }}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                selectedClinic === i
                  ? 'bg-gradient-to-r from-brand-brown to-brand-gold text-white shadow-md shadow-brand-brown/20'
                  : 'border border-slate-200 bg-white/60 text-slate-600 backdrop-blur hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      <Reveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Clinic details */}
        <div className="glass rounded-3xl p-8 transition-shadow duration-300 hover:shadow-glass-lg">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-brown" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900">{clinic.name}</h3>
              <p className="text-sm font-medium text-brand-gold">{clinic.shortLocation}</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600">{clinic.address}</p>
          {clinic.landmark && (
            <p className="mt-2 text-sm text-slate-500">{clinic.landmark}</p>
          )}

          {clinic.hours?.length > 0 && (
            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">OPD Hours</p>
              <ul className="mt-2 space-y-1.5">
                {clinic.hours.map((h) => (
                  <li key={h.days} className="flex justify-between text-sm">
                    <span className="text-slate-600">{h.days}</span>
                    <span className="font-semibold text-slate-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={clinic.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-brown px-5 py-2.5 text-sm font-semibold text-brand-brown transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-brown hover:text-white"
            >
              Get Directions
            </a>
            <a
              href={`tel:+${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        {/* WhatsApp booking */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark to-slate-900 p-8 text-white shadow-glass-lg">
          <div className="blob -right-10 -top-10 h-48 w-48 bg-brand-gold/15" aria-hidden="true" />
          <h3 className="font-serif text-xl font-bold">Book via WhatsApp</h3>
          <p className="mt-1 text-sm text-slate-300">
            Choose a day and time — we'll confirm your appointment on WhatsApp.
          </p>

          <div className="mt-6 space-y-4">
            {/* Clinic selector in booking form — shown only when multiple clinics */}
            {CLINICS.length > 1 && (
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Select Location
                </label>
                <select
                  value={selectedClinic}
                  onChange={(e) => { setSelectedClinic(Number(e.target.value)); setDate(''); setSlot(''); }}
                  className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none"
                >
                  {CLINICS.map((c, i) => (
                    <option key={i} value={i}>{c.name} — {c.shortLocation}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="bk-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                Your Name
              </label>
              <input
                id="bk-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-brand-gold focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="bk-date" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                Preferred Date
              </label>
              <input
                id="bk-date"
                type="date"
                min={today}
                value={date}
                onChange={(e) => { setDate(e.target.value); setSlot(''); }}
                className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none"
              />
            </div>

            {date && (
              <div>
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Available Slots
                </span>
                <div className="grid max-h-40 grid-cols-3 gap-2 overflow-y-auto pr-1 sm:grid-cols-4">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSlot(s)}
                      className={`rounded-lg px-2 py-2 text-xs font-medium transition ${
                        slot === s
                          ? 'bg-brand-gold text-brand-dark'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.87-9.9 9.87zm8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41z" />
              </svg>
              Book Appointment on WhatsApp
            </a>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
