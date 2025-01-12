'use client';

import BoxServices from '../components/BoxServices';
import Button from '../components/Button';
import Slick from '../components/Slick';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function Goals() {
  return (
    <div className="text-center">
      <motion.h1
        className="text-5xl font-bold mb-5"
        initial={{ x: '20vw', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        Achieve Your Goals - TRILLION QUEST
      </motion.h1>

      <motion.h2
        className="font-sans text-2xl tracking-widest uppercase mb-1"
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
      >
        The new digital era is here
      </motion.h2>

      <motion.h2
        className="font-sans text-2xl tracking-widest"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
      >
        Rated 4.8/5 <span className="text-yellow-500">★★★★★</span> Reviews
      </motion.h2>

      <div className="mb-10">
        <BoxServices />
      </div>

      {/* Button Contact Us */}
      <div className="flex h-[10vh] items-center justify-center gap-8">
        {/* Botón */}
        <Button
          name={'Contact Us'}
          href={'/contact'}
          style={
            'text-2xl md:text-3xl tracking-widest hidden md:block h-[7vh] px-6'
          }
        />

        {/* Flecha */}
        <IoMdArrowRoundForward
          size={40}
          className="h-10 w-10 text-yellow-500"
        />

        {/* Texto */}
        <div className="flex h-[7vh] items-center">
          <p className="font-bold text-3xl">
            Are you ready to embark on your Trillion Quest?
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Slick />
      </div>
    </div>
  );
}
