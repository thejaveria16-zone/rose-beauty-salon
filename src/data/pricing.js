// Pricing tiers — minimal luxury structure
export const pricingTiers = [
  {
    id: 'discover',
    name: 'Discover',
    tagline: 'A first encounter',
    price: '180',
    duration: '60 minutes',
    includes: [
      'Personal consultation',
      'Signature treatment of choice',
      'Welcome porcelain tea ritual',
      'Take-home hand cream',
    ],
    featured: false,
  },
  {
    id: 'soiree',
    name: 'Soirée',
    tagline: 'The essential edit',
    price: '420',
    duration: '2.5 hours',
    includes: [
      'Hair styling & finish',
      'Soirée makeup application',
      'Express facial cleanse',
      'Signature manicure',
      'Champagne service',
    ],
    featured: true,
  },
  {
    id: 'maison',
    name: 'La Maison',
    tagline: 'A full day of beauty',
    price: '880',
    duration: '5 hours',
    includes: [
      'Full hair couture session',
      'Editorial makeup artistry',
      'Caviar renewal facial',
      'Hammam ritual',
      'Manicure & pedicure',
      'Private suite & gourmet lunch',
    ],
    featured: false,
  },
];

export const aLaCarte = [
  { category: 'Hair Couture', items: [
    { name: 'Signature Cut', price: '160' },
    { name: 'Balayage', price: '320' },
    { name: 'Keratin Renewal', price: '280' },
    { name: 'Bridal Styling', price: '240' },
  ]},
  { category: 'Makeup Artistry', items: [
    { name: 'Day Soirée', price: '140' },
    { name: 'Bridal Makeup', price: '380' },
    { name: 'Editorial', price: '260' },
    { name: 'Lessons (per hour)', price: '180' },
  ]},
  { category: 'Skin Rituals', items: [
    { name: 'Rose Quartz Facial', price: '220' },
    { name: 'Cryo Lift', price: '280' },
    { name: 'Caviar Renewal', price: '340' },
    { name: 'LED Therapy', price: '160' },
  ]},
  { category: 'Spa & Wellness', items: [
    { name: 'Hammam Ritual', price: '240' },
    { name: 'Aromatherapy Massage', price: '210' },
    { name: 'Hot Stone Voyage', price: '270' },
    { name: 'Couples Sanctuary', price: '480' },
  ]},
];
