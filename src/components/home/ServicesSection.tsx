import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';

const services = [
  { 
    title: 'Modular Prefab Construction (Factory Built)', 
    icon: '/assets/images/modularprefab-icon_75886218-c9b3-4507-a677-e9ca8d1b8e29.png' 
  },
  { 
    title: 'On Site Prefab Construction (Custom)', 
    icon: '/assets/images/onsite-icon.png' 
  },
  { 
    title: 'Architectural Design Services', 
    icon: '/assets/images/arch-icon.png',
    id: 'process' 
  },
  { 
    title: 'Real Estate and Airbnb Consultancy', 
    icon: '/assets/images/realestate-icon.png' 
  },
  { 
    title: 'Developer and Investor Tie Ups', 
    icon: '/assets/images/dev-icon.png' 
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-10 bg-[var(--warm)]" id="services">
      <div className="max-w-[1400px] mx-auto">
        <SectionTag className="text-center">What We Offer</SectionTag>
        <FadeUp>
          <h2 className="display text-center mb-12.5">Our Services</h2>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {services.map((service, idx) => (
            <FadeUp key={service.title} delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center p-9 bg-white border border-[var(--border)] transition-all hover:shadow-lg hover:-translate-y-1 h-full" id={service.id}>
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-16 h-16 mb-4.5 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/service${idx}/100/100`;
                  }}
                />
                <h3 className="font-display text-[17px] font-normal leading-relaxed text-black">
                  {service.title}
                </h3>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
