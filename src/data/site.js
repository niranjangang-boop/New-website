// Single source of truth for practice details.
// Contact info and clinic locations are loaded from src/content/settings.json
// which can be edited via the CMS at /admin — add as many clinic locations as needed.

import settings from '../content/settings.json';

export const SITE = {
  name: 'Dr. Niranjan Ghag',
  fullName: 'Dr. Niranjan Sunil Ghag',
  title: 'Orthopedic Surgeon',
  url: 'https://www.drniranjanghag.com',
  email: settings.email,
  phoneDisplay: settings.phone_display,
  phoneRaw: settings.phone_raw,
  whatsapp: `https://wa.me/${settings.phone_raw}`,
};

// All clinic locations — editable from the CMS admin panel
export const CLINICS = (settings.clinics || []).map((c) => ({
  name: c.name,
  shortLocation: c.short_location,
  address: c.address,
  mapUrl: c.map_url,
  landmark: c.landmark,
  hours: c.hours || [],
}));

// Primary clinic — used where only one is needed (Procedure pages, schema, etc.)
export const CLINIC = CLINICS[0] || {
  name: '',
  shortLocation: '',
  address: '',
  mapUrl: '',
  landmark: '',
  hours: [],
};

export const SPECIALTIES = [
  {
    slug: 'joint-replacement',
    name: 'Joint Replacement (Hip & Knee)',
    short: 'Robotic-assisted, tissue-sparing hip and knee replacement for rapid recovery.',
    image: '/images/joint-replacement.jpg',
    points: [
      'Robotic Total Knee Replacement',
      'Total Hip Replacement',
      'Revision Joint Replacement',
      'Partial (Unicondylar) Knee Replacement',
    ],
  },
  {
    slug: 'foot-ankle',
    name: 'Foot & Ankle Surgery',
    short: 'Comprehensive care for complex deformities, trauma and sports injuries of the foot.',
    image: '/images/foot-ankle.jpg',
    points: [
      'Foot Deformities (Bunions, Flat Foot)',
      'Achilles Tendon Disorders',
      'Ankle Arthroscopy & Ligament Repair',
      'Diabetic Foot Care',
    ],
  },
  {
    slug: 'sports-arthroscopy',
    name: 'Sports Injuries & Arthroscopy',
    short: 'ACL reconstruction, meniscus repair and advanced keyhole surgery with minimal downtime.',
    image: '/images/sports-arthroscopy.jpg',
    points: [
      'ACL & Ligament Reconstruction',
      'Meniscus Repair',
      'Shoulder Arthroscopy (Rotator Cuff)',
      'Sports Rehabilitation Protocols',
    ],
  },
  {
    slug: 'trauma-fracture',
    name: 'Trauma & Fracture Management',
    short: 'Expert management of complex fractures ensuring optimal bone healing and alignment.',
    image: '/images/trauma-fracture.jpg',
    points: [
      'Complex Intra-articular Fractures',
      'Pelvic & Acetabular Trauma',
      'Malunion & Nonunion Correction',
      'Polytrauma Care',
    ],
  },
];
