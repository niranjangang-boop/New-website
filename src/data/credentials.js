// Verified credentials for the /about page, transcribed from Dr. Ghag's CV.
//
// Deliberately omitted: date of birth, home address, personal email/phone, and
// current academic appointment. Contact details on the site come from
// settings.json, not from here.
//
// `alumniOf` / `memberOf` / `hasCredential` in About.jsx are built from these
// arrays, so adding an entry here updates both the visible page and the schema.

// Current practice. Hospital names kept identical to settings.json so the
// site's NAP details stay consistent across pages and directories.
export const CURRENT_ROLES = {
  title: 'Consultant Orthopaedic Surgeon',
  hospitals: [
    "Joshi's Neurotrauma Centre, Thane West",
    'Kaizen Hospital, Thane',
    'Sahayogi Hospital LLP, Naupada, Thane West',
  ],
};

export const QUALIFICATIONS = [
  {
    degree: 'M.B.B.S.',
    year: '2018',
    institution: 'Sri Bhausaheb Hire Government Medical College, Dhule',
    university: 'Maharashtra University of Health Sciences',
  },
  {
    degree: 'M.S. (Orthopaedics)',
    year: '2023',
    institution: 'Dr. Shankarrao Chavan Government Medical College, Nanded',
    university: 'Maharashtra University of Health Sciences',
  },
  {
    degree: 'D.N.B. (Orthopaedics)',
    year: '2024',
    institution: 'National Board of Examinations, New Delhi',
    // Examining/awarding body rather than a teaching institution — excluded
    // from alumniOf so the schema does not imply study there.
    isAwardingBody: true,
  },
  {
    degree: 'M.N.A.M.S.',
    year: '',
    institution: 'National Academy of Medical Sciences',
    isAwardingBody: true,
  },
  {
    degree: 'M.R.C.S. (Part A)',
    year: '',
    institution: 'Royal College of Surgeons of Edinburgh',
    isAwardingBody: true,
  },
];

export const FELLOWSHIPS = [
  {
    name: 'Fellowship in Joint Replacement & Robotics (FIJR, FIRJR)',
    institution: 'KIMS Sunshine Bone and Joint Institute, Hyderabad',
    focus:
      'Robotic-assisted and conventional hip and knee replacement, revision arthroplasty and complex deformity correction.',
  },
  {
    name: 'Fellowship in Arthroscopy & Sports Medicine (FASM)',
    institution: 'KIMS Sunshine Bone and Joint Institute, Hyderabad',
    focus:
      'ACL and ligament reconstruction, meniscus repair, shoulder arthroscopy and return-to-sport rehabilitation.',
  },
  {
    name: 'Fellowship in Foot & Ankle Surgery (FFAS)',
    institution: 'Mumbai Foot and Ankle Clinic, Mumbai',
    focus:
      'Foot and ankle deformity correction, Achilles and tendon disorders, ankle instability and diabetic foot care.',
  },
];

// Residency and fellowship training posts. High-volume government trauma
// centres are where the trauma experience below was accumulated.
export const TRAINING = [
  {
    role: 'Senior Resident, Orthopaedics',
    institution: 'Grant Government Medical College & Sir J.J. Group of Hospitals, Mumbai',
    period: '2023 – 2024',
  },
  {
    role: 'Senior Resident, Orthopaedics',
    institution: 'Lokmanya Tilak Municipal Medical College, Sion, Mumbai',
    period: '2024 – 2025',
  },
  {
    role: 'Junior Resident, Orthopaedics',
    institution: 'Dr. Shankarrao Chavan Government Medical College, Nanded',
    period: '2020 – 2023',
  },
];

export const MEMBERSHIPS = [
  { name: 'ISAKOS (International Society of Arthroscopy, Knee Surgery & Orthopaedic Sports Medicine)', id: 'Fellow Member #193296' },
  { name: 'SICOT (International Society of Orthopaedic Surgery and Traumatology)', id: 'Member #47225' },
  { name: 'National Academy of Medical Sciences', id: 'MNAMS89 (Life Member)' },
  { name: 'Indian Orthopaedic Association', id: 'LM15734 (Life Member)' },
  { name: 'Indian Arthroscopy Society', id: 'LM4114' },
  { name: 'Association of Spine Surgeons of India', id: 'assi202194 (Life Member)' },
  { name: 'Maharashtra Orthopaedic Association', id: 'MLM-G153 (Life Member)' },
  { name: 'Bombay Orthopaedic Society', id: 'BOS-G/199/MUM (Life Member)' },
  { name: 'Society of Knee Surgeons of India', id: 'SK-347 (Life Member)' },
];

export const CERTIFICATIONS = [
  { name: 'Advanced Trauma Life Support (ATLS)', body: 'American College of Surgeons' },
  { name: 'AO Trauma — Principles of Fracture Management', body: 'AO Foundation' },
  { name: 'Diploma in Football Medicine', body: 'FIFA' },
  { name: 'Ponseti Method of Clubfoot Management', body: 'CURE International' },
  { name: 'Basic Biomedical Research Course', body: 'Indian Council of Medical Research' },
];

// Figures provided by Dr. Ghag.
export const EXPERIENCE = [
  {
    figure: '5,000+',
    label: 'Trauma cases managed',
    detail: 'Including spine and complex trauma, across high-volume tertiary centres in Mumbai and Maharashtra.',
  },
  {
    figure: '500+',
    label: 'Joint replacements',
    detail: 'Hip and knee replacement, including over 100 robotic-assisted procedures.',
  },
  {
    figure: '150+',
    label: 'Arthroscopic surgeries',
    detail: 'ACL and ligament reconstruction, meniscus repair and shoulder arthroscopy.',
  },
];

export const RESEARCH_HIGHLIGHTS = [
  'Over 20 peer-reviewed publications in Indian and international orthopaedic journals, including the Journal of Orthopaedic Case Reports, the International Journal of Research in Orthopaedics and the Journal of Orthopaedic Reports.',
  'Co-author on a multicentre validation study of joint-line determination across 3,000 knees, accepted for publication in Archives of Orthopaedic and Trauma Surgery.',
  'Editor of Peri-Prosthetic Joint Infection (PJI): An Evidence-Based Concise Clinical Guide, launched at the KIMS Sunshine SOAR 2025 annual meeting.',
  'Investigator on multinational studies of musculoskeletal infection (EBJIS and ISOC groups) and on robotic arthroplasty training in association with the Rothman Institute.',
  'Developer of an AI-assisted knee alignment calculator that computes LDFA, MPTA, aHKA, mHKA and CPAK measurements as an adjunct to surgical planning.',
];

export const MEDICAL_COUNCIL_REG = 'Maharashtra Medical Council — Reg. No. 2019/04/2411';
