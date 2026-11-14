// Booking-slot rules and schema opening hours for each consulting location,
// keyed by the clinic name in src/content/settings.json (the visible hours text
// is edited there via the CMS; keep the two in step).
//
// Hours supplied by Dr. Ghag, 14 Nov 2026:
//   Joshi's   Mon–Sat 6 PM – 8 AM (overnight); Sunday available through the day
//   Kaizen    Mon–Sat 4 – 6 PM, other times by appointment; Sunday through the day
//   Borneo    by appointment
//   Sahayogi  by appointment
//
// `weekly` maps JS weekday (0 = Sunday) to [startHour, endHour) in 24h time;
// an endHour above 24 runs past midnight. Days without a rule fall back to
// part-of-day choices ("Morning / Afternoon / Evening") that the clinic confirms.

const MON_SAT = [1, 2, 3, 4, 5, 6];
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const OPD = {
  "Joshi's Neurotrauma Centre": {
    weekly: Object.fromEntries(MON_SAT.map((d) => [d, [18, 32]])),
    schema: [{ days: MON_SAT, opens: '18:00', closes: '08:00' }],
  },
  'Kaizen Super Speciality Hospital': {
    weekly: Object.fromEntries(MON_SAT.map((d) => [d, [16, 18]])),
    schema: [{ days: MON_SAT, opens: '16:00', closes: '18:00' }],
  },
  'Borneo Mother and Child Care Hospital': { weekly: {}, schema: [] },
  'Sahayogi Hospital LLP': { weekly: {}, schema: [] },
};

export const PART_OF_DAY = ['Morning', 'Afternoon', 'Evening'];

function label(h) {
  const hh = h % 24;
  const period = hh < 12 ? 'AM' : 'PM';
  const display = hh % 12 === 0 ? 12 : hh % 12;
  return [`${display}:00 ${period}`, `${display}:30 ${period}`];
}

// Returns the list of selectable times for a clinic on a given YYYY-MM-DD date.
export function slotsFor(clinicName, isoDate) {
  if (!isoDate) return [];
  const weekday = new Date(`${isoDate}T12:00:00`).getDay();
  const rule = OPD[clinicName]?.weekly?.[weekday];
  if (!rule) return PART_OF_DAY;
  const out = [];
  for (let h = rule[0]; h < rule[1]; h++) out.push(...label(h));
  return out;
}

// schema.org OpeningHoursSpecification for a clinic (empty = by appointment).
export function openingHoursSchema(clinicName) {
  return (OPD[clinicName]?.schema || []).map((s) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: s.days.map((d) => DAY_NAMES[d]),
    opens: s.opens,
    closes: s.closes,
  }));
}
