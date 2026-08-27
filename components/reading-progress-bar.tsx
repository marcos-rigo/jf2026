'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

interface ReadingProgressBarProps {
  className?: string;
}

/**
 * Barra fina fija arriba de la página que se llena a medida que el usuario
 * scrollea. Pensada para landings de scroll continuo sin sidebar de
 * navegación (a diferencia del patrón con TocNav de otras temáticas).
 */
export function ReadingProgressBar({ className = '' }: ReadingProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <motion.div
      style={{ scaleX: progress }}
      className={`fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue ${className}`}
    />
  );
}
