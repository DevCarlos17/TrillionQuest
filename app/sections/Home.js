'use client';

import Image from 'next/image';
import LightRing from '../components/LightRing';
import DigitalMarketing from '../components/DigitalMarketing';
import Button from '../components/Button';
import LightPoint from '../components/LightPoint';
import Form from '../components/Form';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="lg:h-min-screen w-full flex flex-col overflow-hidden ">
      {/* Images Section */}
      <div className="hidden lg:block absolute  lg:left-0 xl:left-20 2xl:left-28 top-80 sm:top-72 md:top-96 transform z-20 -translate-y-1/2 md:bg-gray-600/50 lg:bg-gray-600/50 rounded-3xl pointer-events-auto w-[180px] h-[350px] md:w-[300px] md:h-[350px] lg:w-[360px] lg:h-[400px] mx-auto">
        <Form />
      </div>
      <section className=" w-full h-[70vh] sm:h-[70vh] flex flex-col justify-end ">
        <div className="h-[100vh]  sm:h-auto flex flex-col justify-center items-center">
          {/* Background */}
          <div className="w-[60vh] h-[60vh] sm:w-[60vh] sm:h-[60vh] ">
            <Image
              className="absolute ml-11 mt-11 sm:ml-0 sm:mt-0 w-[50vh] h-[50vh] sm:w-[60vh]  sm:h-[60vh]"
              src="/images/background.svg"
              alt="background"
              width={600}
              height={600}
            />
          </div>
          {/* Light Ring */}
          <div className="absolute z-10 w-[45vh] h-[45vh] sm:w-[60vh] sm:h-[60vh] md:w-[60vh] ">
            <LightRing glowColor="rgba(247, 220, 153, 0.7)" />
          </div>
          {/* Robot */}
          <div className="absolute hidden sm:block z-20 w-[60vh] h-[50vh] md:w-[60vh]">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
            >
              <Image
                className="w-[60vh] h-[60vh]"
                src="/images/robot.svg"
                alt="robot"
                width={600}
                height={600}
              />
            </motion.div>
          </div>
          {/* Logo */}
          <div className="absolute z-30 h-[80%] w-[80%] sm:w-[60vh]  sm:h-[60vh] md:w-[60vh] bottom-16 md:bottom-10 lg:bottom-16 ">
            <Image
              src={'/images/logoTrillion.svg'}
              width={600}
              height={600}
              alt="logoTrillion"
              className="z-10 h-[100%] w-[100%]"
            />
          </div>
        </div>
      </section>

      <div className="z-20 h-[20vh] space-y-0">
        {/* Digital Marketing */}
        <DigitalMarketing />

        {/* Button Contact Us */}
        <div className="flex h-[10vh] ">
          <Button
            href="/contact"
            name={'Contact Us'}
            style={
              'text-2xl md:px-10 md:text-3xl ml-[88px] tracking-widest hidden md:block h-[7vh] mt-[1.5vh] '
            }
          />
          <LightPoint style={' hidden md:block  z-0 w-[7%] h-auto -ml-[4%]'} />
        </div>
      </div>
      <div className="lg:hidden">
        <Form />
      </div>
    </div>
  );
}
