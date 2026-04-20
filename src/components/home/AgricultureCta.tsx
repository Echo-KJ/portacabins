import React from 'react';
import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { Link } from 'react-router-dom';

export default function AgricultureCta() {
  return (
    <section className="relative w-full overflow-hidden aspect-video min-h-[480px]">
      <FadeUp className="h-full">
        <div className="relative h-full w-full">
          <img 
            src="/assets/images/agriculture/hero/Architecturehero.png" 
            alt="Agriculture Solutions" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://picsum.photos/seed/agriculture/1920/1080';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/5" />
          <div className="absolute bottom-[10%] left-[6%] max-w-[520px] text-white">
            <SectionTag className="text-[#c9b99a] mb-3">NEW DIVISION</SectionTag>
            <h2 className="display text-white mb-4">Precision-Engineered<br />Agricultural Equipment</h2>
            <p className="text-white/75 text-[15px] leading-relaxed mb-7">
              Heavy-duty tractor equipment, cultivators, rotavators, and storage solutions built for modern Indian farms.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/agriculture" className="btn btn-white">View Products</Link>
              <Link href="#contact" className="px-8 py-3 text-[11px] tracking-[2px] uppercase text-white border border-white/60 hover:bg-white/10 transition-all font-medium">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
