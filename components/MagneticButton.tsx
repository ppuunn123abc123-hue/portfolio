'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magneticRadius = 40;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const button = ref.current;
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - buttonCenterX, 2) +
        Math.pow(e.clientY - buttonCenterY, 2)
    );

    if (distance < magneticRadius) {
      const angle = Math.atan2(
        e.clientY - buttonCenterY,
        e.clientX - buttonCenterX
      );
      const pullDistance = (1 - distance / magneticRadius) * 15;
      setPosition({
        x: Math.cos(angle) * pullDistance,
        y: Math.sin(angle) * pullDistance,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`pointer-events-auto cursor-pointer transition-all ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="pointer-events-auto">
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="pointer-events-auto bg-transparent border-none p-0"
    >
      {buttonContent}
    </button>
  );
}
