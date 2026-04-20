'use client';

import React from 'react';
import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  badge: string;
  year: string;
  image: string;
}

interface ProjectsShowcaseProps {
  tag?: string;
  title?: string;
  description?: string;
  projects: Project[];
}

export default function ProjectsShowcase({
  tag = "OUR WORK",
  title = "Showcase",
  description = "A collection of our completed modular structures across India.",
  projects
}: ProjectsShowcaseProps) {
  return (
    <section className="py-20 px-10 bg-[var(--brand-warm)]">
      <div className="max-w-[1400px] mx-auto text-center">
        <SectionTag>{tag}</SectionTag>
        <FadeUp>
          <h2 className="display mb-10">{title}</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="relative aspect-[16/11] overflow-hidden rounded group cursor-pointer shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/project${idx}/800/600`;
                  }}
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <h3 className="text-white font-display text-2xl mb-2.5 translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-white/80 text-[0.85rem] tracking-widest uppercase">
                    <span>{project.badge}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-10">
          {description && <p className="mb-7 text-[var(--mid)]">{description}</p>}
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="#contact" className="btn btn-outline">View All Projects</Link>
            <Link href="#contact" className="btn btn-dark">Start Your Project</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
