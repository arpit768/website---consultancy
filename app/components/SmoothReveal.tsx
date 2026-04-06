'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface SmoothRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
}

export default function SmoothReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: SmoothRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  const offset = directionMap[direction];

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: offset.y, x: offset.x, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' } : {}}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
