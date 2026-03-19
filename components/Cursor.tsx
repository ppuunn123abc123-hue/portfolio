'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const ringX = useSpring(0, { damping: 24, stiffness: 260, mass: 0.6 });
  const ringY = useSpring(0, { damping: 24, stiffness: 260, mass: 0.6 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handlePointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select');
      setIsHoveringInteractive(Boolean(interactive));
    };

    const handlePointerOut = () => {
      setIsHoveringInteractive(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handlePointerOver);
    document.addEventListener('mouseout', handlePointerOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseout', handlePointerOut);
    };
  }, []);

  useEffect(() => {
    ringX.set(mousePosition.x - 20);
    ringY.set(mousePosition.y - 20);
  }, [mousePosition.x, mousePosition.y, ringX, ringY]);

  return (
    <>
      <motion.div
        className="fixed z-[9999] pointer-events-none"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHoveringInteractive ? 1.35 : 1,
        }}
        transition={{
          type: 'tween',
          duration: 0.08,
        }}
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#c8f135',
          mixBlendMode: 'difference',
          opacity: isVisible ? 1 : 0,
        }}
      />

      <motion.div
        className="fixed z-[9998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid #c8f135',
          opacity: isVisible ? 0.55 : 0,
          boxShadow: isHoveringInteractive ? '0 0 20px #c8f13566' : 'none',
        }}
        animate={{
          scale: isHoveringInteractive ? 1.25 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
