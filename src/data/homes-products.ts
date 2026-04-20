export const homesProducts = [
  {
    id: 'studio-1',
    name: 'Studio Cabin',
    category: 'Studio Cabins',
    description: 'Our bestselling guest house or farm retreat. Everything you need packed into a brilliantly designed footprint.',
    specs: ['10×12 ft', 'Guest House'],
    price: 'Starting from ₹8,00,000',
    image: '/assets/images/homes-img/Studio Cabin.png',
    badge: 'BESTSELLER',
    details: {
      features: [
        'Weather resistant for Indian climate (rain, heat, humidity)',
        'Relocatable — can be moved to new site',
        'Factory built for consistent quality',
        'Energy efficient insulation reduces AC/heating costs',
        'Customizable layouts, finishes and colors',
        'Complies with local building norms'
      ],
      specifications: [
        ['External Dimensions', '10×12×10 ft'],
        ['Structure', 'Mild Steel Frame'],
        ['Exterior Cladding', 'Corten Steel / Fibre Cement Board'],
        ['Interior Finish', 'Drywall with Paint'],
        ['Insulation', 'Rock Wool (Walls, Roof, Floor)'],
        ['Flooring', 'Vinyl / Tile / Hardwood'],
        ['Delivery Time', '12–16 Weeks']
      ] as [string, string][]
    }
  },
  {
    id: 'studio-2',
    name: 'Compact Studio',
    category: 'Studio Cabins',
    description: 'Ultra-compact footprint, perfect for small lots or a backyard office.',
    specs: ['8×10 ft', 'Office'],
    price: 'Starting from ₹5,50,000',
    image: '/assets/images/homes-img/Compact Studio.png',
    details: {
      features: ['Compact design', 'Quick installation', 'Fully pre-wired'],
      specifications: [['Dimensions', '8×10 ft']]
    }
  },
  {
    id: '1bhk-1',
    name: '1 BHK Prefab Home',
    category: '1 BHK Homes',
    description: 'A complete living solution designed for long-term comfort. Generous natural light and premium finishing.',
    specs: ['20×20 ft', '1 Bedroom'],
    price: 'Starting from ₹14,00,000',
    badge: 'BESTSELLER',
    image: '/assets/images/homes-img/1_BHK.png'
  },
  {
    id: '1bhk-premium',
    name: '1 BHK Premium',
    category: '1 BHK Homes',
    description: 'Built for entertaining. Features an expansive open-plan living and kitchen area.',
    specs: ['24×20 ft', 'Premium'],
    price: 'Starting from ₹18,00,000',
    image: '/assets/images/homes-img/1 BHK Premium.png'
  },
  {
    id: '2bhk-1',
    name: '2 BHK Prefab Home',
    category: '2 BHK Homes',
    description: 'A full family home without the multi-year construction headache. Expansive living area and private suites.',
    specs: ['30×20 ft', '2 Bedrooms'],
    price: 'Starting from ₹24,00,000',
    image: '/assets/images/homes-img/2_BHK.png'
  },
  {
    id: 'custom-1',
    name: 'Custom Build',
    category: 'Custom Builds',
    description: 'We design from a blank canvas. Let our architects draft the exact floor plan and facade you envision.',
    specs: ['As Required', 'Architectural'],
    price: 'Price on Request',
    badge: 'CUSTOM',
    image: '/assets/images/homes-img/custom_prefab.png'
  }
];

export const homesFaqs = [
  {
    question: "How long do these structures actually last compared to brick?",
    answer: "Engineered with commercial-grade mild steel and Corten steel, our homes are designed for permanent living. With basic maintenance, they have a lifespan matching or exceeding traditional brick-and-mortar homes, without the cracking and dampness issues typical of concrete."
  },
  {
    question: "Will the house become extremely hot during Indian summers?",
    answer: "Not at all. We use high-density Rock Wool insulation across all walls, roofs, and floors. This creates a thermal envelope that blocks outside heat, keeping the interior significantly cooler than a standard concrete house, and drastically reducing your AC bills."
  },
  {
    question: "Do I need to build a heavy concrete foundation?",
    answer: "No. One of the biggest cost-savings is the foundation. Our structures only require simple concrete plinths or a ground-screw system. We will share exact foundation drawings for your local mason to execute, which takes only a few days."
  },
  {
    question: "Are there hidden costs outside of the quoted price?",
    answer: "We believe in 100% pricing transparency. Your quote covers the fully finished home. The only variables are transport (calculated based on distance from our Bangalore factory), crane rental for installation day, and your local site prep (plumbing/electrical connections). We outline all of this in your first proposal."
  },
  {
    question: "Can I completely change the floor plan and interior finish?",
    answer: "Yes. The modular framework allows for total flexibility. You can move interior walls, add massive glass facades, choose luxury bathroom fittings, and select custom exterior cladding. Our architects will create 3D renders until you are completely satisfied."
  },
  {
    question: "Do I need building approvals from the government?",
    answer: "Because our units are technically non-permanent, relocatable structures without deep foundations, they often bypass lengthy traditional building permit processes. However, local panchayat or municipal rules vary, so we recommend confirming local guidelines for temporary structures."
  }
];
