'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedDiv = ({
  children,
  variants,
  initial = 'hidden',
  animate = 'visible',
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // Detectar entrada al viewport

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={initial}
      animate={isInView ? animate : initial}
      className={`flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
