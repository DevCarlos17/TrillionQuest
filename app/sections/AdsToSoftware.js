'use client';

import { FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import AnimatedDiv from '../motion/components/AnimateDiv';
import { slideInFromLeft, slideInFromRight } from '../motion/utils/variants';

export default function AdsToSoftware() {
  return (
    <div className="min-h-screen w-full">
      <div className="p-4 mx-auto md:flex justify-center items-center">
        {/* Section 1 */}
        <section className="flex flex-col justify-evenly items-center md:items-start space-y-8 md:space-y-20">
          <AnimatedDiv variants={slideInFromLeft} className="text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              From Ads to <br />
              Software development
            </h1>

            <p className="text-white text-lg md:text-3xl mt-6 md:mt-12 ">
              We have proven experts in every aspect of the digital <br />
              landscape, offering a comprehensive range of services <br />
              to elevate your brand and deliver measurable results.
            </p>
          </AnimatedDiv>

          {/* Phone Ads Mobile */}
          <div className="">
            <Image
              className="sm:h-[50vh] w-[50vh] md:hidden"
              src={'/images/phoneAds.svg'}
              width={500}
              height={500}
              alt="phoneAds"
            />

            <AnimatedDiv
              variants={slideInFromLeft}
              className="text-white justify-end flex items-end p-4"
            >
              <ul className="text-xl lg:text-2xl xl:text-3xl">
                {[
                  'Personalized Marketing Campaigns',
                  'Web Development',
                  'Content Creation',
                  'SEO Optimization',
                  'Email Marketing',
                  'Software and App Development',
                  'Process Automation for business',
                ].map((item) => (
                  <li key={item} className="mb-4 flex items-center">
                    • {item}
                    <Image
                      src={'/images/gear.png'}
                      width={100}
                      height={50}
                      alt="gear"
                      className="w-6 h-6 ml-2"
                    />
                  </li>
                ))}
              </ul>
            </AnimatedDiv>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col justify-center items-center md:items-start">
          <AnimatedDiv variants={slideInFromRight}>
            <Image
              src={'/images/phoneAds.svg'}
              alt="telefono_ads"
              width={580}
              height={580}
              className="hidden md:block h-[70vh] ml-14"
            />

            {/* Botón con flecha */}
            <div className="flex flex-col md:ml-28 items-center py-10 lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                name="Learn More"
                href="https://calendly.com/agostino-trillionquest/quick-call"
                className="border flex items-center gap-5 border-white
    bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 
    text-yellow-400 font-bold rounded-full 
    transition-transform duration-300 
    hover:scale-110 text-1xl md:text-3xl hover:bg-gradient-to-r 
    hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-200 
    hover:text-gray-900 px-10 cursor-pointer md:px-16 py-4">
                Learn More
                <FaArrowRight className="h-4 md:h-8 w-6 md:w-6" />
              </a>

              {/* Iconos de redes sociales */}
              <div className="hidden sm:flex space-x-4 md:space-x-6 gl:mt-10 ml-20 md:ml-56">
                {[
                  {
                    href: 'https://www.tiktok.com/@trillionquest?_t=ZT-8stpLos8kec&_r=1',
                    Icon: FaTiktok,
                  },
                  {
                    href: 'https://www.instagram.com/trillionquest_?igsh=MWwwbnprYnpneDV4bg==',
                    Icon: FaInstagram,
                  },
                  {
                    href: 'https://www.linkedin.com/company/trillionquest/',
                    Icon: IoLogoWhatsapp,
                  },
                  {
                    href: 'https://www.linkedin.com/company/trillionquest/',
                    Icon: FaLinkedin,
                  },
                ].map(({ href, Icon }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
                  >
                    <Icon size={40} />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedDiv>
        </section>
      </div>
    </div>
  );
}
