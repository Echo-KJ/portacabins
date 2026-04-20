'use client';

import React from 'react';
import { motion } from 'motion/react';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}

export default function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
