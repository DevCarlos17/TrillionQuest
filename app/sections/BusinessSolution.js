"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/Button';

export default function BusinessSoulution() {
  return (
    <div className="text-white md:mb-20 flex flex-col h-[75vh] md:h-[80vh] xl:h-[50vh] w-full justify-end lg:justify-center items-center ">
      {/*Container */}
      <div className="w-[70%] h-[80%] flex flex-col lg:flex-row items-center justify-center ">
        {/* Texto */}
        <div className="w-[80vw] md:w-[80vh] space-y-14 flex flex-col items-center sm:text-justify">
          {/* Título animado */}
          <motion.span
            className="text-3xl md:text-4xl lg:text-5xl font-bold ml-10"
            initial={{ x: "50vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <p>AI-Powered Business Solutions</p>
          </motion.span>

          <motion.span
            className="text-white text-2xl lg:text-2xl xl:text-3xl mt-7 ml-10 sm:text-justify pr-5"
            initial={{ x: "50vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }} // Activar animación al estar visible
            transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
          >
            <span>
              Leverage the power of artificial intelligence to optimize your business process.
            </span>
          </motion.span>


          <Button
            name={'Learn More'}
            style={
              'text-md md:text-xl w-[50%] sm:w-[40%] md:w-[60%] lg:w-[90%] xl:w-[70%] lg:text-2xl px-2 py-3 md:py-4 border tracking-widest'
            }
          />
        </div>
        {/* Robots Image*/}
        <div className="w-[130%] h-[50vh] flex flex-col items-start justify-center">
          <Image
            className="md:h-[100vh] md:w-[60vw]"
            src={'/images/robot1.svg'}
            width={700}
            height={700}
            alt="robot1"
          />
        </div>
      </div>
    </div>
  );
}