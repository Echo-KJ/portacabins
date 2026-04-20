export const officeProducts = [
  {
    id: 'off-1',
    name: 'Single Seat Office Cabin',
    category: 'Single Cabin',
    description: 'Compact, highly efficient workspace for focused productivity.',
    specs: ['10×10 ft', 'A/C · Wi-Fi Ready'],
    price: '₹3,50,000',
    image: '/assets/images/offices/products/placeholder.jpg',
    details: {
      features: ['Climate-controlled', 'Fully pre-wired', 'Professional interiors', 'Relocatable'],
      specifications: [
        ['Structure', 'Mild Steel Frame'],
        ['Electrical', 'Pre-wired, DB Board']
      ] as [string, string][]
    }
  },
  {
    id: 'off-2',
    name: 'Executive Office Cabin',
    category: 'Single Cabin',
    description: 'Premium workspace designed for leadership and client meetings.',
    specs: ['12×10 ft', 'Premium Finish'],
    price: '₹5,00,000',
    image: '/assets/images/offices/products/placeholder.jpg'
  },
  {
    id: 'off-3',
    name: 'Double Cabin Office',
    category: 'Double Cabin',
    description: 'Two separate cabins with shared entry or reception area.',
    specs: ['20×10 ft', '2 Cabins'],
    price: '₹8,00,000',
    badge: 'BESTSELLER',
    image: '/assets/images/offices/products/placeholder.jpg'
  },
  {
    id: 'off-4',
    name: 'Co-Working Hub',
    category: 'Co-Working Units',
    description: 'Open plan seating for up to 10 team members with shared amenities.',
    specs: ['24×16 ft', '10 Seats'],
    price: '₹12,00,000',
    image: '/assets/images/offices/products/placeholder.jpg'
  }
];

export const officeFaqs = [
  {
    question: "Can the cabin be used as a permanent office?",
    answer: "Yes. Our office cabins are built to withstand Indian climate conditions year-round. They function as permanent offices with proper insulation, air conditioning and electrical provision."
  },
  {
    question: "Can I expand the office later by adding more modules?",
    answer: "Yes. Our modular system allows you to add units as your team grows — simply connect additional cabins to expand floor area without disrupting existing operations."
  },
  {
    question: "Does the cabin come with electrical wiring and AC points?",
    answer: "Yes. All office cabins are pre-wired with DB board, power outlets, AC mounting points and data cable conduits. You only need to connect to the main power supply on site."
  }
];
