'use client';

import FadeUp from './FadeUp';
import { cn } from '@/src/lib/utils';

interface StatItem {
  number: string;
  label: string;
  icon?: string;
}

interface StatStripProps {
  stats: StatItem[];
  className?: string;
}

export default function StatStrip({ stats, className }: StatStripProps) {
  return (
    <section className={cn("bg-linear-to-br from-[#f5f5f5] to-[#e8e8e8] py-4 px-[5%] border-b border-[#ddd]", className)}>
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-7.5 lg:flex-nowrap">
        {stats.map((stat, idx) => (
          <FadeUp key={idx} delay={idx * 0.1} className="flex items-center gap-3 whitespace-nowrap">
            {stat.icon && <span className="text-2xl">{stat.icon}</span>}
            <div>
              <h3 className="text-xl mb-0 text-black font-semibold font-body leading-none">{stat.number}</h3>
              <p className="font-body text-[0.95rem] capitalize tracking-0 text-[var(--mid)] m-0">{stat.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
