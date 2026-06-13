// Single source of truth for practice details.
// Contact info, clinic details and hours are loaded from src/content/settings.json
// which can be edited via the CMS at /admin without touching code.

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

export const CLINIC = {
  name: settings.clinic_name,
  shortLocation: 'Khopat, Thane West',
  address: settings.clinic_address,
  mapUrl: settings.clinic_map_url,
  landmark: settings.clinic_landmark,
  hours: settings.hours,
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
