/* ---------------------------------------------------------------
   SINGLE SOURCE OF TRUTH for placeholder content.
   Everything marked [PLACEHOLDER] needs Felicia's real content.
   Swap image URLs here once real photography is available.
---------------------------------------------------------------- */

export const practice = {
  name: 'Windsong Primary Care',
  legalName: 'Windsong Primary Care', // [PLACEHOLDER] confirm legal entity name
  tagline: 'Compassionate Onsite Primary Care for Older Adults',
  brandLine1: 'Windsong',
  brandLine2: 'Onsite Primary Care',
  phone: '(980) 585-2016', // [PLACEHOLDER] confirm — currently the psych practice number
  fax: '(980) 585-2019',   // [PLACEHOLDER] confirm
  email: 'contact@windsongcare.com', // [PLACEHOLDER] confirm mailbox exists
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
    alt: 'A clinician giving an older adult patient a vaccination',
    label: 'Hero photo — clinician vaccinating an older adult',
  },
  provider: {
    // Felicia's real headshot, hosted in the imageSamples repo (same hosting
    // pattern as the psych site). Swap to felicia-l-davis.png if preferred.
    src: 'https://raw.githubusercontent.com/Brandi-Kinard/imageSamples/main/windsong-psych/felicia-davis.avif',
    alt: 'Felicia Davis, provider at Windsong Primary Care',
    label: 'Provider portrait — Felicia Davis',
  },
  about: {
    src: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=1200&q=80&auto=format&fit=crop',
    alt: 'A caring conversation between a provider and patient',
    label: 'About photo — provider with patient',
  },
  services: {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80&auto=format&fit=crop',
    alt: 'A clinician reviewing a care plan with a patient',
    label: 'Services photo — care planning',
  },
};

// Homepage carousel — 5 primary-care images (older patients preferred).
// [PLACEHOLDER] Unsplash stand-ins; swap for real practice photos. Each has
// a labeled beige fallback if a URL fails.
export const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80&auto=format&fit=crop',
    alt: 'Clinician holding the hands of an older patient',
    label: 'Photo 1 — clinician & older adult',
  },
  {
    src: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80&auto=format&fit=crop',
    alt: 'Provider taking a patient’s blood pressure',
    label: 'Photo 2 — blood pressure check',
  },
  {
    src: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80&auto=format&fit=crop',
    alt: 'A caring conversation between provider and patient',
    label: 'Photo 3 — caring conversation',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop',
    alt: 'Active older adults outdoors',
    label: 'Photo 4 — active older adults',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80&auto=format&fit=crop',
    alt: 'Clinician reviewing a care plan with a patient',
    label: 'Photo 5 — care planning',
  },
  {
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80&auto=format&fit=crop',
    alt: 'Older adult patient smiling during a checkup',
    label: 'Photo 6 — patient checkup',
  },
  {
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80&auto=format&fit=crop',
    alt: 'Provider consulting with an older adult patient',
    label: 'Photo 7 — provider consultation',
  },
];

// [PLACEHOLDER] — real patient testimonial (with written permission) needed.
export const testimonial = {
  quote:
    'After years of feeling rushed through appointments, I finally have a doctor who listens. Felicia takes the time to explain everything and treats me like family.',
  name: 'Margaret H.', // [PLACEHOLDER]
  detail: 'Patient since 2026', // [PLACEHOLDER]
  stars: 5,
  image: {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop',
    alt: 'Smiling older adult patient',
    label: 'Testimonial photo — older adult headshot',
  },
};

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
    title: 'Preventive Care & Immunizations',
    desc: 'Vaccinations, screenings, and lifestyle guidance tailored to each stage of older adulthood.', // [PLACEHOLDER]
  },
  {
    title: 'Telehealth Visits',
    desc: 'Convenient virtual appointments for follow-ups and check-ins — care that comes to you.', // [PLACEHOLDER]
  },
];
