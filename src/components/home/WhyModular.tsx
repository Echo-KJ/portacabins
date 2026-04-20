import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { BRAND } from '@/src/lib/constants';

const benefits = [
  { title: 'Time and Budget Predictability', icon: '/assets/images/time-icon.png' },
  { title: 'Relocatable Structures', icon: '/assets/images/relocate-icon.png' },
  { title: 'Collaborating with Professionals', icon: '/assets/images/collab-icon.png' },
  { title: 'Off Site Modular Construction', icon: '/assets/images/offsite-icon.png' },
  { title: 'Salvage Value & Resale', icon: '/assets/images/salvage-icon.png' },
  { title: 'High Quality Structures', icon: '/assets/images/structure-icon_9e095fc6-0e21-4be0-b93d-f17b5452cffc.png' },
];

export default function WhyModular() {
  return (
    <section className="py-20 px-10 max-w-[1400px] mx-auto">
      <SectionTag className="text-center">The Advantage</SectionTag>
      <FadeUp>
        <h2 className="display text-center mb-12.5">Why Modular?</h2>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((item, idx) => (
          <FadeUp key={item.title} delay={idx * 0.1}>
            <div className="flex items-start gap-4.5 p-7 border border-[var(--border)] h-full">
              <img 
                src={item.icon} 
                alt={`${BRAND.name} benefit icon`} 
                className="w-12 h-12 object-contain flex-shrink-0 mt-1"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://picsum.photos/seed/benefit${idx}/80/80`;
                }}
              />
              <h3 className="font-display text-[19px] font-normal leading-snug">
                {item.title}
              </h3>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
