// src/data/navigation.ts
export const navLinks = [
  { label: 'Portable Cabins', href: '#categories' }, // Replaced Projects
  { label: 'Agricultural Equipment', href: '/agriculture' }, // Replaced Architecture
  {
    label: 'Categories',
    children: [
      { label: 'Homes', href: '/homes' },
      { label: 'Hospitality', href: '/hospitality' },
      { label: 'Offices', href: '/offices' },
      { label: 'Cafes', href: '/cafes' },
      { label: 'Agricultural Equipment', href: '/agriculture' },
    ],
  },
  {
    label: 'About',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Process', href: '/our-process' },
      { label: 'Careers', href: '#contact' },
    ],
  },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
];

export const mobileNavCategories = [
  {
    heading: 'Products',
    links: [
        { label: 'Portable Cabins', href: '#categories' },
        { label: 'Agricultural Equipment', href: '/agriculture' },
        { label: 'Homes / Cabins', href: '/homes' }
    ]
  },
  {
    heading: 'Solutions',
    links: [
        { label: 'Hospitality', href: '/hospitality' },
        { label: 'Offices', href: '/offices' },
        { label: 'Cafes', href: '/cafes' }
    ]
  },
  {
    heading: 'Company',
    links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Process', href: '/our-process' },
        { label: 'FAQ', href: '#faq' }
    ]
  }
];
