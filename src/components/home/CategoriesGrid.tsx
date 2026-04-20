import React from 'react';
import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { Link } from 'react-router-dom';

const categories = [
  { label: 'Homes', image: '/assets/images/home_category.jpg', href: '/homes' },
  { label: 'Hospitality', image: '/assets/images/IMG_20230607_120141.jpg', href: '/hospitality' },
  { label: 'Offices', image: '/assets/images/SNF7878.jpg', href: '/offices' },
  { label: 'Cafes', image: '/assets/images/categories/CAFE.png', href: '/cafes' },
  { label: 'Agriculture Equipment', image: '/assets/images/agriculture/hero/Architecturehero.png', href: '/agriculture' },
];

export default function CategoriesGrid() {
  return (
    <section className="py-20 px-10 max-w-[1400px] mx-auto" id="categories">
      <SectionTag className="text-center">What We Build</SectionTag>
      <FadeUp>
        <h2 className="display text-center mb-10">Categories</h2>
      </FadeUp>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5">
        {categories.map((cat, idx) => (
          <FadeUp key={cat.label} delay={idx * 0.1}>
            <Link href={cat.href} className="relative block overflow-hidden aspect-[3/4] group">
              <img 
                src={cat.image} 
                alt={cat.label} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://picsum.photos/seed/cat${idx}/600/800`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent pt-[60px] px-6 pb-6 flex items-end">
                <div className="text-white font-display text-2xl font-normal tracking-[1px]">
                  {cat.label}
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
