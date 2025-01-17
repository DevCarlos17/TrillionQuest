'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/Button';
import AnimatedDiv from '../motion/components/AnimateDiv';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '../motion/utils/variants';

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
          <AnimatedDiv variants={slideInFromLeft}>
            <Image
              src={'/images/phone.svg'}
              alt="phone"
              width={800}
              height={800}
              className=" md:h-[70vh]"
            />
          </AnimatedDiv>

          <AnimatedDiv
            variants={slideInFromRight}
            className="z-20 absolute left-1/4 -top-6 md:left-1/4 lg:left-1/3 md:right-80 md:-top-10 flex w-[60vw] h-full"
          >
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
          </AnimatedDiv>
        </div>

        <AnimatedDiv
          variants={slideInFromRight}
          className="mt-8 w-[40vw] h-[50vh] flex flex-col items-center  md:space-y-20 text-start md:text-right "
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Social Media Expertise
          </p>
          <p className="text-white text-lg md:text-3xl mt-6 md:mt-12 ">
            Personalized strategies, improved
            <br />
            visibility, and fostering genuine
            <br />
            connections with your target audience <br />
            across all platforms.
          </p>
          <a
            href="https://calendly.com/agostino-trillionquest/quick-call"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white 
  bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 
  text-yellow-400 font-bold rounded-full 
  transition-transform duration-300 
  hover:scale-110 text-1xl md:text-3xl hover:bg-gradient-to-r 
  hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-200 
  hover:text-gray-900 px-10 cursor-pointer md:px-16 py-4">
            Learn More
          </a>
        </AnimatedDiv>
      </div>
    </div>
  );
}
