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
    <div className=" mx-auto h-[100vh] w-full flex items-center justify-cente">
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
          <div className="z-10 absolute left-1/4 -top-6 md:left-1/4 lg:left-1/3 md:right-80 md:-top-10 flex w-[60vw] h-full">
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

        <div className="mt-8 w-[40vw] md:space-y-14] text-start md:text-right lg:text-left">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Social Media Expertise
          </p>
          <p className="text-white text-lg md:text-2xl mt-6 md:mt-12 ">
            Personalized strategies, improved
            <br />
            visibility, and fostering genuine
            <br />
            connections with your target audience <br />
            across all platforms.
          </p>
          <Button
            name={'Learn More'}
            style={
              'text-md  md:text-xl lg:text-2xl mt-7 md:mt-14 px-4 md:px-12 py-1 md:py-2 border tracking-widest '
            }
          />
        </div>
      </div>
    </div>
  );
}
