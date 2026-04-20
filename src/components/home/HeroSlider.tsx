'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/src/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/assets/images/clients/Aerial_perspective_wide-angle_202604161840.png',
    subtitle: 'Custom Modular Prefab Construction',
    title: 'Design and Build your Unique Project Faster',
    buttonLabel: 'Explore More',
    buttonHref: '/homes',
  },
  {
    image: '/assets/images/clients/Wide-angle_ground-level_photograph_202604161844.png',
    subtitle: 'Standard Modular Prefab Construction',
    title: 'Relocate and Resell after Use',
    buttonLabel: 'Explore More',
    buttonHref: '/#categories',
  },
  {
    image: '/assets/images/clients/Ultra-wide_16_9_professional_202604171304.png',
    subtitle: 'Custom On-site Prefab Construction',
    title: 'Curate your Experience Center',
    buttonLabel: 'Explore More',
    buttonHref: '/#categories',
  },
  {
    image: '/assets/images/clients/Wide_16_9_minimalist_202604171243.png',
    subtitle: 'Architectural Design Services',
    title: 'Better by Design',
    buttonLabel: 'Explore More',
    buttonHref: '/#categories',
  },
  {
    image: '/assets/images/clients/Minimalist_wide_16_9_202604171212.png',
    subtitle: 'Farmers & Agribusiness',
    title: 'Upgrade Your Farming with Advanced Equipment',
    buttonLabel: 'Explore Equipment',
    buttonHref: '/agriculture',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black" aria-label="Hero slider">
      <div 
        className="flex h-full w-full transition-transform duration-1000 cubic-bezier(0.77, 0, 0.175, 1)"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-full flex-shrink-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://picsum.photos/seed/hero${idx}/1920/1080`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
            <div className="absolute bottom-[12%] left-[7%] text-white max-w-[540px]">
              <p className="text-[11px] tracking-[3px] uppercase mb-3.5 opacity-80 font-body font-normal">
                {slide.subtitle}
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-7.5 whitespace-pre-line">
                {slide.title}
              </h1>
              <Link href={slide.buttonHref} className="btn btn-white">
                {slide.buttonLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prev}
        className="absolute left-7.5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/15 border border-white/30 text-white hover:bg-white/30 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={next}
        className="absolute right-7.5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/15 border border-white/30 text-white hover:bg-white/30 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={cn(
              "h-0.5 transition-all duration-300",
              current === idx ? "w-12 bg-white" : "w-7 bg-white/40"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
