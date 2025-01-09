'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import NavLink from './NavLink';
import Sidebar from './Sidebar';
import Button from './Button';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`h-[10vh] flex items-center sticky top-0 z-50 w-full transition-all duration-300 font-semibold bg-black text-white `}
    >
      {/* Navbar Principal */}
      <div className="flex items-center justify-between  mx-3 sm:mx-0 sm:justify-around 2xl:space-x-32 py-0 w-full">
        {/* Logo y enlaces principales */}
        <div className="flex w-[65%] sm:w-[40%] md:w-[30%] lg:w-[60%]  justify-between lg:justify-start  items-center lg:space-x-5 text-xl md:text-2xl lg:text-3xl">
          <NavLink
            href="/"
            className="hidden  lg:inline-block text-xl lg:text-3xl font-extrabold"
          >
            Trillion Fundation
          </NavLink>

          {/* Logo */}

          <NavLink className="" href="/">
            <Image
              src="/images/miniLogo.svg"
              alt="Mini Logo"
              width={100}
              height={100}
              className="block lg:hidden mt-2"
            />
          </NavLink>

          <NavLink
            href="/contact"
            className=" sm:hidden border border-white
             bg-gradient-to-r from-gray-950 via-gray-900 to-gray-400 
           text-yellow-500 font-bold rounded-full 
        transition-transform duration-300 
        hover:scale-105 hover:bg-gradient-to-r 
        hover:from-yellow-500 hover:via-yellow-300 hover:to-yellow-200 
        hover:text-gray-900 px-0 py-1 w-[40%] text-base text-center"
          >
            CONTACT US
          </NavLink>

          <NavLink
            href="/why-choose-us"
            className="hidden sm:block text-xl lg:text-2xl font-bold"
          >
            Why Choose Us
          </NavLink>
        </div>

        {/* Botón de menú móvil */}
        <button
          className="sm:hidden focus:outline-none cursor-pointer hover:scale-110 hover:text-yellow-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Enlaces visibles solo en pantallas grandes */}
        <div className="hidden sm:flex justify-center space-x-4 lg:space-x-14 text-xl lg:text-2xl font-bold">
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-[10vh] left-0 w-full  py-4 px-6 space-y-2 md:hidden"
        >
          <Sidebar />
        </div>
      )}
    </div>
  );
}
