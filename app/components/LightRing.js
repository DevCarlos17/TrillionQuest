'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LightRing({ glowColor = false }) {
  const [boxShadow, setBoxShadow] = useState('');

  useEffect(() => {
    const updateBoxShadow = () => {
      if (window.innerWidth >= 768) {
        setBoxShadow(
          `10px 0 50px 20px ${glowColor}, inset 0 0 60px 0px ${glowColor}`
        );
      } else {
        setBoxShadow(`0 0 20px 10px ${glowColor}`);
      }
    };

    updateBoxShadow();
    window.addEventListener('resize', updateBoxShadow);

    return () => {
      window.removeEventListener('resize', updateBoxShadow);
    };
  }, [glowColor]);

  return (
    <div className="flex justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[100%] h-[100%]">
        <motion.div
          className="absolute w-full h-full rounded-full"
          style={{ boxShadow }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
