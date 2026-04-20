import React from 'react';
import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { Link } from 'react-router-dom';
import { BRAND } from '@/src/lib/constants';

export default function ProjectsCta() {
  return (
    <section className="bg-black overflow-hidden" id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto">
        <div className="p-20 md:p-[80px_70px] flex flex-col justify-center text-white order-2 lg:order-1">
          <FadeUp>
            <SectionTag className="text-[#c9b99a]">Portfolio</SectionTag>
            <h2 className="display text-white mb-5">Don't believe it,<br />see it</h2>
            <p className="text-white/65 text-base leading-relaxed mb-8 max-w-[540px]">
              We take great pride in our work, with over 200 projects completed. Dive into
              {BRAND.name}'s designs and projects from the past four years.
            </p>
            <div className="flex gap-3.5 items-center flex-wrap">
              <Link href="#projects" className="btn btn-white">Projects</Link>
              <Link href="#services" className="px-8 py-3 text-[11px] tracking-[2px] uppercase text-white/70 border border-white/30 hover:bg-white/10 transition-all font-medium">
                Architecture
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="h-full min-h-[460px] order-1 lg:order-2">
          <FadeUp delay={0.2}>
            <img 
              src="/assets/images/projects_landing_page_image.jpg" 
              alt="Our Projects" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://picsum.photos/seed/projects/1000/800';
              }}
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
