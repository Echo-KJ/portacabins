'use client';

import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import FadeUp from './FadeUp';
import SectionTag from './SectionTag';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  tag?: string;
  heading?: string;
  isFullWidth?: boolean;
}

export default function FaqAccordion({ 
  items, 
  tag = "Got Questions?", 
  heading = "FAQ",
  isFullWidth = false 
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={cn("py-20 px-10 max-w-[860px] mx-auto", isFullWidth && "max-w-full bg-[var(--warm)]")} id="faq">
      <div className={cn("mx-auto", isFullWidth ? "max-w-[860px]" : "w-full")}>
        <SectionTag>{tag}</SectionTag>
        <FadeUp>
          <h2 className="display mb-10">{heading}</h2>
        </FadeUp>

        <div className="space-y-0">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-[var(--border)] last:border-none">
              <button 
                onClick={() => toggle(idx)}
                className="w-full py-5.5 text-left flex justify-between items-center gap-5 transition-colors group"
                aria-expanded={openIndex === idx}
              >
                <span className="text-[15px] font-medium leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {item.question}
                </span>
                <span className={cn(
                  "text-xl text-[var(--brand-sand)] transition-transform duration-300",
                  openIndex === idx && "rotate-45"
                )}>
                  +
                </span>
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === idx ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
              )}>
                <p className="text-sm leading-relaxed text-[var(--mid)]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
