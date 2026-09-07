// Orthopaedic camp — details and registration form options.
//
// ⚠️ THE VALUES MARKED "TODO" ARE PLACEHOLDERS. The page must not be published
// until Dr. Ghag confirms the real date, venue and fee. Wrong details on a
// public registration page are worse than no page at all.
//
// REGISTRATION_ENDPOINT is the Google Apps Script Web App URL that receives
// submissions and appends them to the Google Sheet. See
// google-apps-script/camp-registration.gs for the script and setup steps.

export const CAMP = {
  name: 'Free Orthopaedic Health Camp',
  tagline: 'Consult · Check · Prevent · Move Better',
  date: '2026-09-24',
  dateDisplay: 'Thursday, 24 September 2026',
  timeStart: '16:00',
  timeEnd: '22:00',
  timeDisplay: '4:00 PM – 10:00 PM',
  venueName: "Dr. Joshi's Neurotrauma Centre & Multispeciality Hospital",
  // Kept identical to settings.json so the site's NAP details stay consistent.
  venueAddress:
    'Z5, Flower Valley Complex, Commercial Complex, E.E, Service Rd, opp. Viviana Mall, Khopat, Runwal Nagar, Thane West, Thane, Maharashtra 400601',
  mapUrl: 'https://maps.app.goo.gl/ZwSs24See2xtcHXR7',
  fee: 'Free',
  // Camp-specific enquiries line from the poster — deliberately not added to
  // the site-wide contact details, which stay on the main practice numbers.
  enquiryDisplay: '+91 84540 44944',
  enquiryRaw: '918454044944',

  intro:
    'A free camp for bone, joint and movement problems — knee and hip pain, back and neck pain, shoulder stiffness, sports injuries, and foot and ankle complaints. Alongside the consultation you can have your bone strength, uric acid and foot pressure checked at no cost. Booking a slot means you are seen at your chosen time rather than waiting.',

  // The four services shown on the camp poster.
  services: [
    {
      name: 'Orthopaedic Consultation',
      detail: 'Expert advice for all bone, joint and muscle problems, with Dr. Niranjan Ghag.',
    },
    {
      name: 'BMD Scan',
      detail: 'Bone Mineral Density testing — know your bone strength and catch osteoporosis early.',
    },
    {
      name: 'Uric Acid Testing',
      detail: 'Check your levels to identify gout risk before it causes joint damage.',
    },
    {
      name: 'Foot Scan',
      detail: 'Assess foot health, posture and walking pattern using pressure mapping.',
    },
  ],

  published: true,
};

// Half-hourly slots across the 4 PM – 10 PM window.
export const TIME_SLOTS = [
  '4:00 PM – 5:00 PM',
  '5:00 PM – 6:00 PM',
  '6:00 PM – 7:00 PM',
  '7:00 PM – 8:00 PM',
  '8:00 PM – 9:00 PM',
  '9:00 PM – 10:00 PM',
];

export const AGE_BANDS = [
  'Under 18',
  '18 – 30',
  '31 – 45',
  '46 – 60',
  '61 – 75',
  'Above 75',
];

export const GENDERS = ['Male', 'Female', 'Prefer not to say'];

// Broad area only — no symptom detail is collected, so nothing clinically
// sensitive is stored in the spreadsheet.
export const COMPLAINT_AREAS = [
  'Knee',
  'Hip',
  'Shoulder',
  'Back / Neck (spine)',
  'Foot & Ankle',
  'Hand & Wrist',
  'Recent injury or fracture',
  'Other / not sure',
];
