import React from 'react';
import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { BRAND } from '@/src/lib/constants';
import { Link } from 'react-router-dom';

const photos = [
  '/assets/images/someday1_f5507ea2-48a4-4637-994f-34660658ef70.jpg',
  '/assets/images/someday2.jpg',
  '/assets/images/someday3.jpg',
  '/assets/images/someday4_bccb7ded-ebdf-409b-a1e1-f401e1fdcb68.jpg',
];

export default function SomedaySection() {
  return (
    <section className="py-20 bg-black overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center mb-[50px]">
          <FadeUp>
            <SectionTag className="text-[#c9b99a]">Vision</SectionTag>
            <h2 className="display text-white mb-5">Someday is Now</h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-7 max-w-[540px]">
              Discover a world of possibilities for your project and property with
              {BRAND.name}'s in-house architecture team who will take your ideas into reality. 
              We help provide solutions for investors and developers to attract operators, 
              customers and business with our unique design and marketing capabilities.
            </p>
            <div className="flex gap-3.5 items-center flex-wrap">
              <Link href="/our-process" className="btn btn-sand">Our Process</Link>
              <Link href="#contact" className="px-8 py-3 text-[11px] tracking-[2px] uppercase text-white/60 border border-white/20 hover:bg-white/10 transition-all font-medium">
                Resale & Rental
              </Link>
              <Link href="#contact" className="px-8 py-3 text-[11px] tracking-[2px] uppercase text-white/60 border border-white/20 hover:bg-white/10 transition-all font-medium">
                Developers & Investors
              </Link>
            </div>
          </FadeUp>
          <div />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
          {photos.map((src, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="aspect-[3/4] overflow-hidden group">
                <img 
                  src={src} 
                  alt={`${BRAND.name} Project ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/someday${idx}/600/800`;
                  }}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
