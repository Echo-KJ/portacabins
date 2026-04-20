import React from 'react';
import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { Link } from 'react-router-dom';

export default function ExperienceSection() {
  return (
    <section className="bg-[var(--warm)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto">
        <div className="h-full min-h-[500px]">
          <FadeUp>
            <img 
              src="/assets/images/experience/Main_Prompt__A_202604172136.png" 
              alt="Experience our prefab construction" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://picsum.photos/seed/experience/1000/1000';
              }}
            />
          </FadeUp>
        </div>
        <div className="p-20 md:p-[80px_70px] flex flex-col justify-center">
          <FadeUp delay={0.2}>
            <SectionTag>Touch & Feel</SectionTag>
            <h2 className="display mb-5">Experience it</h2>
            <p className="section-body mb-7">
              It is difficult to understand the quality of construction through photos and
              renders. We encourage all our customers to visit us, touch and feel the unit. 
              Book a slot today!
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="#contact" className="btn btn-dark">Visit Model Home</Link>
              <Link href="#contact" className="btn btn-outline">Visit Head Office</Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
