import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';

interface Testimonial {
  name: string;
  location: string;
  product: string;
  quote: string;
  stars?: number;
}

interface TestimonialSectionProps {
  tag?: string;
  title?: string;
  testimonials: Testimonial[];
}

export default function TestimonialSection({
  tag = "WHAT CLIENTS SAY",
  title = "Real Homes, Real People",
  testimonials
}: TestimonialSectionProps) {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <SectionTag className="text-center">{tag}</SectionTag>
        <FadeUp>
          <h2 className="display text-center mb-10">{title}</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {testimonials.map((t, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="bg-white border border-[#eaeaea] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-10 rounded-xl flex flex-col h-full hover:-translate-y-1.5 transition-all hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
                <div className="text-[#fbbf24] text-xl mb-6 tracking-widest">
                  {"★".repeat(t.stars || 5)}
                </div>
                <p className="text-[1.05rem] text-black italic font-light leading-relaxed mb-8 flex-grow">
                  "{t.quote}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-display text-xl text-black mb-1">{t.name}</h4>
                  <p className="text-[0.85rem] text-[var(--mid)]">
                    {t.location} — {t.product}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
