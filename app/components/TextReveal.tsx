'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  once?: boolean;
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'span',
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: '-60px' });

  const words = children.split(' ');

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={`${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotateX: -80 }}
            animate={isInView ? { y: '0%', rotateX: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: 'bottom', willChange: 'transform' }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  );
}
