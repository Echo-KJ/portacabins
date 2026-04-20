import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';

const steps = [
  { 
    num: '01', 
    title: 'Consultation', 
    desc: 'Book a site visit or online call, discuss your unique requirements.',
    icon: '💬'
  },
  { 
    num: '02', 
    title: 'Design & Quote', 
    desc: 'Our team creates layout, 3D render and a detailed, transparent quote.',
    icon: '📐'
  },
  { 
    num: '03', 
    title: 'Factory Build', 
    desc: 'Your cabin is precision-built and assembled in our Bangalore factory.',
    icon: '🏭'
  },
  { 
    num: '04', 
    title: 'Delivery & Install', 
    desc: 'Transported securely and seamlessly installed directly at your site.',
    icon: '🚚'
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 px-10 bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        <SectionTag className="border-white/20 text-[var(--brand-sand)]">HOW IT WORKS</SectionTag>
        <FadeUp>
          <h2 className="display text-white mb-15">From Concept to Cabin in 4 Steps</h2>
        </FadeUp>
        
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-px bg-[var(--brand-sand)] z-0 opacity-50" />
          
          {steps.map((step, idx) => (
            <FadeUp key={idx} delay={idx * 0.15} className="relative z-10 flex flex-col items-center group">
              <div className="font-display text-5xl md:text-6xl text-white/10 leading-none mb-[-25px] transition-colors group-hover:text-white/20">
                {step.num}
              </div>
              <div className="w-[70px] h-[70px] bg-black border border-[var(--brand-sand)] rounded-full flex items-center justify-center text-2xl mb-6 transition-transform group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium mb-4">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
                {step.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
