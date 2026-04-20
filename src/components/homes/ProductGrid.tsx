'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import FadeUp from '@/src/components/shared/FadeUp';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
  price: string;
  image: string;
  badge?: string;
  details?: {
    features: string[];
    specifications: string[][];
  };
}

interface ProductGridProps {
  products: Product[];
  categories: string[];
}

export default function ProductGrid({ products, categories }: ProductGridProps) {
  const [activeTab, setActiveTab] = useState('All');
  const [openPanelId, setOpenPanelId] = useState<string | null>(null);

  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(p => p.category.includes(activeTab));

  return (
    <section className="py-20 px-10 max-w-[1400px] mx-auto" id="products">
      {/* Tabs */}
      <div className="flex justify-center mb-10 overflow-x-auto pb-2.5 no-scrollbar">
        <div className="flex gap-3">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-4 py-2 text-sm uppercase tracking-wider transition-all border-b-2 whitespace-nowrap",
                activeTab === cat ? "border-[var(--accent)] text-black font-medium" : "border-transparent text-[var(--mid)] hover:text-black"
              )}
            >
              {cat} {cat === 'All' ? '' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
        {filteredProducts.map((product) => (
          <FadeUp key={product.id}>
            <div className="bg-white border border-[#eee] rounded-lg overflow-hidden group flex flex-col h-full hover:shadow-lg transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/${product.id}/800/600`;
                  }}
                />
                {product.badge && (
                  <span className={cn(
                    "absolute top-4 right-4 px-3 py-1 text-[10px] font-semibold tracking-widest rounded-full uppercase",
                    product.badge === 'BESTSELLER' ? "bg-[var(--accent)] text-white" : "bg-black text-white"
                  )}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl mb-2 text-black">{product.name}</h3>
                <p className="text-sm text-[var(--mid)] line-clamp-2 mb-4 leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map(spec => (
                    <span key={spec} className="bg-[var(--brand-warm)] px-2.5 py-1 text-[10px] rounded text-[var(--mid)] uppercase font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-[var(--accent)] font-medium mt-auto mb-6">{product.price}</p>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setOpenPanelId(product.id)}
                    className="btn btn-outline py-3 leading-none"
                  >
                    View Details
                  </button>
                  <Link href="#contact" className="btn btn-dark py-3 leading-none flex items-center justify-center">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* In-Grid Detail Panel (Simplified) */}
            {openPanelId === product.id && product.details && (
              <div className="col-span-full mt-4 p-8 bg-[var(--warm)] rounded-lg relative animate-in fade-in slide-in-from-top-4 duration-500">
                <button 
                  onClick={() => setOpenPanelId(null)}
                  className="absolute top-4 right-4 text-2xl text-[var(--mid)] hover:text-black"
                >
                  ×
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-bold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {product.details.features.map(f => (
                        <li key={f} className="flex gap-2 text-sm text-[var(--mid)]">
                          <span className="text-[var(--accent)] font-bold">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-bold mb-4">Specifications</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        {product.details.specifications.map(([k, v]) => (
                          <tr key={k} className="border-b border-black/10 last:border-none">
                            <td className="py-3 font-semibold text-black w-2/5">{k}</td>
                            <td className="py-3 text-[var(--mid)]">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
