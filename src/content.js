/* ---------------------------------------------------------------
   SINGLE SOURCE OF TRUTH for placeholder content.
   Everything marked [PLACEHOLDER] needs Felicia's real content.
   Swap image URLs here once real photography is available.
---------------------------------------------------------------- */

export const practice = {
  name: 'Windsong Onsite Primary Care',
  legalName: 'Windsong Onsite Primary Care', // [PLACEHOLDER] confirm legal entity name
  tagline: 'Compassionate Onsite Primary Care for Older Adults',
  brandLine1: 'Windsong',
  brandLine2: 'Onsite Primary Care',
  phone: '(980) 585-2019',
  fax: '(980) 585-2016',
  email: 'contact@windsongonsite.com', // [PLACEHOLDER] confirm mailbox exists
  sisterSite: { name: 'Windsong Family & Psychiatric Associates', url: 'https://www.windsongpsychiatric.com' },
};

// [PLACEHOLDER] confirm which locations offer primary care
export const locations = [
  {
    name: 'Huntersville, NC',
    address: '9820 Northcross Center Court\nSuite 50\nHuntersville, NC 28078',
    maps: 'https://www.google.com/maps/search/?api=1&query=9820+Northcross+Center+Court,+Suite+50,+Huntersville,+NC+28078',
  },
  {
    name: 'Fort Mill, SC',
    address: '975 Market Street\nSuite 201-F\nFort Mill, SC 29708',
    maps: 'https://www.google.com/maps/search/?api=1&query=975+Market+Street,+Suite+201-F,+Fort+Mill,+SC+29708',
  },
];

// Unsplash hotlinks are stand-ins; each has alt text + a labeled fallback
// if a URL ever fails to load. Replace with real photos before/after launch.
export const images = {
  hero: {
    src: '/hero.png',
    alt: 'A clinician resting a reassuring hand on an older adult patient’s shoulder',
    label: 'Hero photo — clinician comforting an older adult',
  },
  provider: {
    // Felicia's real headshot, served locally from public/.
    src: '/provider.png',
    alt: 'Felicia Davis, provider at Windsong Onsite Primary Care',
    label: 'Provider portrait — Felicia Davis',
  },
  about: {
    src: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=1200&q=80&auto=format&fit=crop',
    alt: 'A caring conversation between a provider and patient',
    label: 'About photo — provider with patient',
  },
  services: {
    src: '/services.png',
    alt: 'A caregiver and an older adult laughing warmly together on a couch',
    label: 'Services photo — caring connection',
  },
};

// Homepage carousel — 5 primary-care images (older patients preferred).
// [PLACEHOLDER] Unsplash stand-ins; swap for real practice photos. Each has
// a labeled beige fallback if a URL fails.
export const carouselImages = [
  {
    src: '/carousel-hands.png',
    alt: 'Caregiver holding the hands of an older patient',
    label: 'Photo 1 — caregiver & older adult',
  },
  {
    src: '/carousel-seated-exercise.png',
    alt: 'Older adult doing a seated leg exercise in a group fitness class',
    label: 'Photo 2 — seated exercise class',
  },
  {
    src: '/carousel-coffee-laugh.png',
    alt: 'Caregiver and older adult laughing together over coffee',
    label: 'Photo 3 — caring conversation',
  },
  {
    src: '/carousel-autumn-walk.png',
    alt: 'Older couple walking hand in hand through an autumn park',
    label: 'Photo 4 — active older adults',
  },
  {
    src: '/carousel-home-cooking.png',
    alt: 'Older adult preparing a fresh meal at home',
    label: 'Photo 5 — healthy home cooking',
  },
  {
    src: '/carousel-stethoscope-exam.png',
    alt: 'Nurse listening to an older patient’s heart with a stethoscope',
    label: 'Photo 6 — patient checkup',
  },
  {
    src: '/carousel-bp-check.png',
    alt: 'Nurse checking an older adult’s blood pressure at home',
    label: 'Photo 7 — blood pressure check',
  },
];

export const testimonials = [
  {
    quote:
      'Felicia Davis has been a godsend for me. She listens well, asks questions, and looks out for my best interest. Anytime I’ve needed her, she somehow fits me in. I’m so grateful.',
    name: 'Beth Rushing',
    stars: 5,
  },
  {
    quote:
      'Felicia is an expert in medication management. As a senior living professional, I have seen her help our residents stabilize and have complete 180 experiences. She is holistic in her approach and has excellent customer service with our families. I 100% recommend her services to anyone in need!',
    name: 'Sylena Hutchinson',
    stars: 5,
  },
  {
    quote:
      'Windsong provided exceptional care to my residents in an Assisted Living Facility. Felicia would ensure clear communication not only with the family but with the team as well. Her treatment plans were personalized to the needs of the resident and her focus was to meet the resident where they were in the moment to give the support needed. We are very thankful to have had the privilege to work in partnership with her.',
    name: 'Keisha Ellis',
    stars: 5,
  },
];

export const services = [
  {
    title: 'Annual Wellness Visits',
    desc: 'Comprehensive yearly check-ins focused on prevention, screenings, and staying ahead of health changes.', // [PLACEHOLDER]
  },
  {
    title: 'Chronic Condition Management',
    desc: 'Ongoing, coordinated care for diabetes, hypertension, heart disease, COPD, arthritis, and more.', // [PLACEHOLDER]
  },
  {
    title: 'Medication Review & Management',
    desc: 'Careful review of prescriptions to simplify regimens, avoid interactions, and support safe use.', // [PLACEHOLDER]
  },
  {
    title: 'Memory & Cognitive Screening',
    desc: 'Early, gentle screening for memory concerns, with clear next steps and coordination with specialists.', // [PLACEHOLDER]
  },
  {
    title: 'Preventive Care',
    desc: 'Screenings and lifestyle guidance tailored to each stage of older adulthood.', // [PLACEHOLDER]
  },
  {
    title: 'Telehealth Visits',
    desc: 'Convenient virtual appointments for follow-ups and check-ins — care that comes to you.', // [PLACEHOLDER]
  },
];
