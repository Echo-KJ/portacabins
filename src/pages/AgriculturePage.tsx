import HeroSection from '../components/shared/HeroSection';
import StatStrip from '../components/shared/StatStrip';
import ProductGrid from '../components/homes/ProductGrid';
import FadeUp from '../components/shared/FadeUp';
import SectionTag from '../components/shared/SectionTag';
import ContactForm from '../components/shared/ContactForm';
import FaqAccordion from '../components/shared/FaqAccordion';

const agriStats = [
  { number: '24+', label: 'Equipment Types', icon: '⚙️' },
  { number: '6', label: 'Work Categories', icon: '🚜' },
  { number: 'Pan India', label: 'Availability', icon: '🚚' },
  { number: 'Expert', label: 'Support Included', icon: '🔧' },
];

const agriProducts = [
  {
    id: 'ag-1',
    name: 'Cultivator',
    category: 'Soil Preparation',
    description: 'Loosens soil and removes weeds between crop rows.',
    specs: ['Wheat', 'Rice', 'Cotton'],
    price: 'Price on Request',
    image: '/assets/images/tractor-equipment/Heavy-duty_tractor_cultivator_202603251810.jpeg'
  },
  {
    id: 'ag-2',
    name: 'Rotavator (Rotary Tiller)',
    category: 'Soil Preparation',
    description: 'Breaks and mixes soil finely for perfect seedbed preparation.',
    specs: ['Rice', 'Wheat', 'All Crops'],
    price: 'Price on Request',
    image: '/assets/images/tractor-equipment/Tractor_rotavator_on_202603251810.jpeg'
  },
  {
    id: 'ag-3',
    name: 'Seed Drill',
    category: 'Planting & Seeding',
    description: 'Plants seeds at uniform depth and spacing for even germination.',
    specs: ['Maize', 'Cotton'],
    price: 'Price on Request',
    image: '/assets/images/tractor-equipment/Tractor-mounted_seed_drill_202603251814.jpeg'
  }
];

const agriFaqs = [
  {
    question: "Which tractor horsepower is compatible with your equipment?",
    answer: "Most of our equipment is compatible with tractors ranging from 35 HP to 75 HP."
  },
  {
    question: "Do you supply spare parts after purchase?",
    answer: "Yes, spare parts are available for all equipment we sell. We maintain stock at our Bangalore facility."
  }
];

export default function AgriculturePage() {
  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center p-[8%_7%] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/images/tractor-equipment/Tractor_front_loader_202603251858(1).jpeg" alt="Tractor Equipment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 max-w-[600px]">
          <FadeUp>
            <p className="text-[11px] tracking-[3px] uppercase mb-3.5 opacity-80 font-body">TRACTOR EQUIPMENT</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-7">The Right Tool for Every Field</h1>
            <p className="section-body text-white/80 mb-7">
              Complete range of tractor-mounted equipment for soil preparation, planting, irrigation, harvesting and heavy utility work.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a href="#products" className="btn btn-white">Browse Equipment</a>
              <a href="#contact" className="btn btn-dark">Get a Quote</a>
            </div>
          </FadeUp>
        </div>
      </section>

      <StatStrip stats={agriStats} className="bg-[#f5f1ec] py-15" />

      <ProductGrid 
        products={agriProducts} 
        categories={['Soil Preparation', 'Planting & Seeding', 'Irrigation & Water', 'Crop Care', 'Harvesting', 'Heavy & Utility']}
      />

      {/* Why Agri Section */}
      <section className="bg-black text-white py-20 px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <SectionTag className="text-[var(--brand-sand)]">The Advantage</SectionTag>
          <FadeUp>
            <h2 className="display text-white mb-12.5">Farm Ready Engineering</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5">
            {[
              { title: "Tractor Compatible", desc: "All equipment designed for standard tractor PTO systems", icon: "⚙️" },
              { title: "Durable Build", desc: "Heavy-duty steel construction for Indian field conditions", icon: "🛡️" },
              { title: "Pan India Delivery", desc: "Equipment delivered and set up at your farm location", icon: "🚚" },
              { title: "After-Sales Support", desc: "Technical support and spare parts availability", icon: "🔧" },
            ].map((item, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="p-8 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl mb-2.5">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <FaqAccordion items={agriFaqs} heading="Agriculture FAQ" />
    </>
  );
}
