import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { CAMP } from '../data/camp.js';

// Archive of past events. Kept deliberately factual: no offers, no free-test
// lists and no registration — the NMC guidelines (6 Oct 2026, clause 8.1(x))
// bar inducements, so past camps are recorded here only as events that took place.
const PAST_EVENTS = [
  {
    name: 'Orthopaedic health camp',
    date: CAMP.dateDisplay,
    venue: `${CAMP.venueName}, Khopat, Thane West`,
    note: 'A community camp for bone, joint and movement problems. This event has ended.',
  },
];

export default function Events() {
  return (
    <>
      <Seo
        title="Events & Health Camps"
        description="Past orthopaedic health camps and community events with Dr. Niranjan Ghag in Thane West."
        path="/events"
      />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="eyebrow">Events</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-slate-900">Events &amp; Health Camps</h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          There are no upcoming events at the moment. Past events are listed below for reference.
        </p>
        <h2 className="mt-10 font-serif text-2xl font-bold text-slate-900">Past events</h2>
        <ul className="mt-6 space-y-4">
          {PAST_EVENTS.map((e) => (
            <li key={e.name + e.date} className="glass rounded-2xl p-5">
              <p className="font-semibold text-slate-900">{e.name}</p>
              <p className="mt-1 text-sm text-slate-600">{e.date} · {e.venue}</p>
              <p className="mt-2 text-sm text-slate-500">{e.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-slate-600">
          For an appointment, see <Link to="/contact" className="text-brand-gold underline hover:text-brand-brown">consulting locations and hours</Link>.
        </p>
      </section>
    </>
  );
}
