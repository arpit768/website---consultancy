'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className = '',
  tiltStrength = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches;
  });

  const handleMouse = (e: React.MouseEvent) => {
    if (isTouchDevice || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setTransform({
      rotateX: (y - 0.5) * -tiltStrength,
      rotateY: (x - 0.5) * tiltStrength,
    });
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  // On touch devices, just render a plain div
  if (isTouchDevice) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px', willChange: 'transform' }}
    >
      {children}
      {glare && isHovered && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
    </motion.div>
  );
}
