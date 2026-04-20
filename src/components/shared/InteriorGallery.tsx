'use client';

import React from 'react';
import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { Link } from 'react-router-dom';

interface GalleryItem {
  title: string;
  image: string;
}

interface InteriorGalleryProps {
  tag?: string;
  title?: string;
  items: GalleryItem[];
}

export default function InteriorGallery({ 
  tag = "INSIDE LOOK", 
  title = "Crafted Interiors",
  items
}: InteriorGalleryProps) {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-[1400px] mx-auto text-center">
        <SectionTag>{tag}</SectionTag>
        <FadeUp>
          <h2 className="display mb-10">{title}</h2>
        </FadeUp>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded group cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/interior${idx}/800/1000`;
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-8 flex items-end bg-linear-to-t from-black/80 to-transparent translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-white font-display text-xl text-left">
                    {item.title}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-10">
          <Link href="#contact" className="btn btn-outline">Book a Visit</Link>
        </div>
      </div>
    </section>
  );
}
