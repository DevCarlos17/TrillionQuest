'use client';

<<<<<<< HEAD
import { FaLinkedin, FaInstagram, FaTiktok, FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
=======
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsappSquare,
  FaTiktok,
  FaArrowRight,
  FaArrowDown,
} from 'react-icons/fa';
>>>>>>> 47a7f88fe3ce0ccb8352e99dbcab56f0726ec613
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import AnimatedDiv from '../motion/components/AnimateDiv';
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '../motion/utils/variants';

export default function Parther() {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Controla si la animación ya comenzó
  const counterRef = useRef(null); // Referencia al contador

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.5 } // El 50% del elemento debe estar visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const end = 100; // Valor final del contador
      const duration = 2000; // Duración de la animación en ms
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [hasStarted]);

  return (
    <div className="flex flex-col lg:flex-row lg:px-10 lg:py-14 items-center lg:items-start justify-center space-y-10 lg:space-y-0 lg:space-x-20 font-semibold">
      {/* Logo */}
      <AnimatedDiv
        variants={slideInFromLeft}
        className="lg:w-[40%] flex justify-center lg:justify-end"
      >
        <Image
          className="w-[90%] h-auto max-w-[400px] lg:max-w-full"
          src="/images/logo.svg"
          alt="Logo1"
          width={400}
          height={400}
        />
      </AnimatedDiv>

      {/* Texto */}
      <AnimatedDiv
        variants={slideInFromTop}
        className="lg:w-[50%] text-center lg:text-left text-white space-y-10"
      >
        <h1
          className="font-bold text-4xl lg:text-5xl"
          style={{ lineHeight: '1.6' }}
        >
          <span>PARTNER WITH</span> <br />
          <span className="text-yellow-400">TRILLION QUEST</span> <br />
          <span>AND HELP MILLIONS</span>
        </h1>

        <AnimatedDiv variants={slideInFromRight}>
          <div>
            <p className="text-1xl lg:text-2xl">
              Together, we create success and <br /> change lives.
            </p>
          </div>

          {/* Contador */}
          <div
            ref={counterRef}
            className="flex items-center justify-center lg:justify-start text-2xl lg:text-7xl space-x-4"
          >
            <h1 className="font-bold">{count}+</h1>
            <div className="flex items-center -space-x-5">
              {/* Imagenes circulares */}
              {[
                '/images/img1.png',
                '/images/image2.jpg',
                '/images/image3.jpg',
                '/images/image4.jpg',
              ].map((src, index) => (
                <div
                  key={index}
                  className="w-20 h-20 rounded-full overflow-hidden cursor-pointer hover:z-50 hover:scale-150 transition-transform duration-700"
                >
                  <Image
                    className="w-full h-full"
                    src={src}
                    alt={`Imagen ${index + 1}`}
                    width={600}
                    height={600}
                  />
                </div>
              ))}
            </div>
<<<<<<< HEAD
          </a>

          {/* Iconos de redes sociales */}
          <div className="hidden sm:flex space-x-4 md:space-x-6 gl:mt-10 ml-20 md:ml-56">
            <a
              href="https://www.tiktok.com/@trillionquest?_t=ZT-8stpLos8kec&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <FaTiktok size={40} />
            </a>

            <a
              href="https://www.instagram.com/trillionquest_?igsh=MWwwbnprYnpneDV4bg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://www.linkedin.com/company/trillionquest/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <IoLogoWhatsapp size={40} />
            </a>
            <a
              href="https://www.linkedin.com/company/trillionquest/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <FaLinkedin size={40} />
            </a>
=======
>>>>>>> 47a7f88fe3ce0ccb8352e99dbcab56f0726ec613
          </div>
        </AnimatedDiv>

        <AnimatedDiv variants={slideInFromRight}>
          <div className="flex flex-col items-center lg:flex-row lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Botón con flecha */}
            <a
              href="#"
              className="uppercase tracking-widest px-2 py-1 md:py-3 md:px-4 border border-white/50 bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full transition-transform duration-700 text-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 hover:text-gray-900 flex items-center justify-center space-x-2"
            >
              <div className="flex items-center">
                <span className="text-sm pl-6 lg:text-lg">Learn More</span>
                <FaArrowDown className="block lg:hidden ml-6 h-10 w-8" />
                <FaArrowRight className="hidden lg:block ml-8 h-8 w-6" />
              </div>
            </a>

            {/* Iconos de redes sociales */}
            <div className="hidden sm:flex space-x-4 md:space-x-6 gl:mt-10 ml-20 md:ml-56">
              <a
                href="https://www.tiktok.com/@trillionquest?_t=ZT-8stpLos8kec&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
              >
                <FaTiktok size={40} />
              </a>

              <a
                href="https://www.instagram.com/trillionquest_?igsh=MWwwbnprYnpneDV4bg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
              >
                <FaInstagram size={40} />
              </a>
              <a
                href="https://www.linkedin.com/company/trillionquest/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
              >
                <FaWhatsappSquare size={40} />
              </a>
              <a
                href="https://www.linkedin.com/company/trillionquest/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
              >
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv variants={slideInFromBottom}>
          <div className="text-sm md:text-2xl text-white">
            We redefine marketing strategies with innovation and creativity, We
            transform vision into impactful realities.
          </div>
        </AnimatedDiv>
      </AnimatedDiv>
    </div>
  );
}
