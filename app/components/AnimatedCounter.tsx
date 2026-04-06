'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [displayValue, setDisplayValue] = useState('0');

  // Extract numeric part and suffix (e.g., "2017" -> 2017, "" | "100%" -> 100, "%" | "7+" -> 7, "+")
  const numericMatch = value.match(/^([\d.]+)(.*)$/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;
  const isNumeric = !!numericMatch;

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    const duration = 2000;
    const startTime = Date.now();
    const isDecimal = value.includes('.');

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * targetNumber;

      if (isDecimal) {
        setDisplayValue(current.toFixed(1));
      } else {
        setDisplayValue(Math.round(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, isNumeric, targetNumber, value]);

  if (!isNumeric) {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {isInView ? displayValue : '0'}
      {suffix}
    </span>
  );
}
