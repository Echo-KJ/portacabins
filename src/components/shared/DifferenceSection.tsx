'use client';

import React from 'react';
import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { Link } from 'react-router-dom';

interface DifferenceSectionProps {
  tag?: string;
  title?: string;
  description?: string;
  features: string[];
  image: string;
}

export default function DifferenceSection({
  tag = "The STC Difference",
  title = "Built Different. Lived Better.",
  description = "Our modular architecture combines factory precision with sustainable materials, giving you a weather-resistant, highly durable living space in a fraction of the time.",
  features,
  image
}: DifferenceSectionProps) {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
        <div className="order-2 lg:order-1">
          <FadeUp>
            <SectionTag>{tag}</SectionTag>
            <h2 className="display text-4xl mb-7">{title}</h2>
            <p className="section-body mb-10 text-[var(--mid)]">
              {description}
            </p>
            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-[1.1rem] text-black">
                  <div className="w-6 h-6 bg-[var(--brand-warm)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--accent)] text-xs">✓</span>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/our-process" className="btn btn-outline">Our Process</Link>
          </FadeUp>
        </div>
        <div className="order-1 lg:order-2">
          <FadeUp delay={0.2}>
            <img 
              src={image} 
              alt="Interior Details" 
              className="w-full h-full aspect-[4/5] object-cover rounded shadow-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://picsum.photos/seed/diff/800/1000';
              }}
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
