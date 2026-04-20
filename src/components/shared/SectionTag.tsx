import React from 'react';
import { cn } from '@/src/lib/utils';

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className }: SectionTagProps) {
  return (
    <p className={cn("section-tag", className)}>
      {children}
    </p>
  );
}
