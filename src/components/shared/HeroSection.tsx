import React from 'react';
import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  btn1Label?: string;
  btn1Href?: string;
  btn2Label?: string;
  btn2Href?: string;
}

export default function HeroSection({
  tag,
  title,
  description,
  image,
  btn1Label = "Explore",
  btn1Href = "#products",
  btn2Label = "Get a Quote",
  btn2Href = "#contact"
}: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end p-[8%_5%] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-[800px] pb-8">
        <FadeUp>
          <SectionTag className="text-[var(--brand-sand)] border-[var(--brand-sand)]">{tag}</SectionTag>
          <h1 className="display text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-7">{title}</h1>
          <p className="text-[15px] leading-[1.8] text-white/80 max-w-[600px] mb-7">
            {description}
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <Link href={btn1Href} className="btn btn-white">{btn1Label}</Link>
            <Link href={btn2Href} className="btn btn-dark opacity-90">{btn2Label}</Link>
          </div>
        </FadeUp>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>
    </section>
  );
}
