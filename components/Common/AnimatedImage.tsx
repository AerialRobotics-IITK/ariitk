'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedImageProps {
  children: ReactNode;
  side?: 'left' | 'right';
  delay?: number;
  className?: string;
}

const AnimatedImage = ({
  children,
  side = 'left',
  delay = 0,
  className = ''
}: AnimatedImageProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === 'left' ? -100 : 100,
        scale: 0.8,
        boxShadow: '0 0 0px rgba(59, 130, 246, 0)'
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.5)'
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: 'easeOut',
        boxShadow: { duration: 1.2, ease: 'easeOut', delay }
      }}
      className={className}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 12px 40px rgba(59, 130, 246, 0.8)'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedImage;
