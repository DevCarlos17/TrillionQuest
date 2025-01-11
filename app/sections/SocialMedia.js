'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/Button';


const images = ['/images/chat1.svg', '/images/chat2.svg', '/images/chat3.svg'];

export default function SocialMedia() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mx-auto h-[50vh] md:h-[70vh] w-full flex items-center justify-center">
      <div className="h-auto w-full text-white flex justify-around md:justify-center items-center space-x-16 md:space-x-0 ">
        {/* Imagen de teléfono */}

        <div className="h-[70vh] w-[50vw] flex justify-center items-center relative">
          <Image
            src={'/images/phone.svg'}
            alt="phone"
            width={800}
            height={800}
            className=" md:h-[70vh]"
          />
          <div className="z-20 absolute left-1/4 -top-6 md:left-1/4 lg:left-1/3 md:right-80 md:-top-10 flex w-[60vw] h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentImageIndex]}
                src={images[currentImageIndex]}
                alt={`chat-${currentImageIndex + 1}`}
                className=""
                // Animaciones

                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 w-[40vw] h-[50vh] md:space-y-20 text-start md:text-right lg:text-left">
          <motion.p className="text-2xl md:text-4xl lg:text-5xl font-bold"
            initial={{ x: "20vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}>
            Social Media Expertise
          </motion.p>
          <motion.p className="text-white text-lg md:text-3xl mt-6 md:mt-12 "
            initial={{ x: "20vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}>

            Personalized strategies, improved
            <br />
            visibility, and fostering genuine
            <br />
            connections with your target audience <br />
            across all platforms.
          </motion.p>
          <Button
            name={'Learn More'}
            style={
              'text-md  md:text-xl lg:text-2xl mt-7 md:mt-14 px-4 md:px-12 py-1 md:py-2 border tracking-widest absolute z-30 '
            }
          />
        </div>
      </div>
    </div>
  );
}
