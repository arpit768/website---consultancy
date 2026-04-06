'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hidden, setHidden] = useState(false);
  const trailRef = useRef<{ x: number; y: number }[]>([]);

  const springX = useSpring(cursorX, { stiffness: 300, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 28 });

  const trailX = useSpring(cursorX, { stiffness: 120, damping: 25 });
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    // Only show on desktop
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : isClicking ? 8 : 12,
            height: isHovering ? 48 : isClicking ? 8 : 12,
            opacity: hidden ? 0 : 1,
            borderRadius: '50%',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ willChange: 'width, height' }}
        />
      </motion.div>

      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 64 : 36,
            height: isHovering ? 64 : 36,
            opacity: hidden ? 0 : 0.3,
            borderWidth: isHovering ? 2 : 1,
          }}
          transition={{ type: 'spring', stiffness: 250, damping: 25 }}
          className="border-brand-purple dark:border-brand-yellow rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ willChange: 'width, height' }}
        />
      </motion.div>
    </>
  );
}
