'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import NavLink from './NavLink';
import Sidebar from './Sidebar';

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

  {
    /* */
  }
  return (
    <div className="h-[10vh] w-full px-7 flex items-center  sticky top-0 z-50  transition-all duration-700 font-semibold bg-black text-white">
      {/* Left Side*/}
      <div className=" w-[35%] h-full flex items-center justify-center  text-xl md:text-2xl lg:text-3xl">
        {/* Logo */}

        <div className="flex justify-center w-full lg:space-x-14 text-xl lg:text-2xl font-bold">
          <NavLink href={'/'}>
            <Image
              src="/images/miniLogo.svg"
              alt="Mini Logo"
              width={100}
              height={100}
              className="block lg:hidden md:hidden sm:hidden mt-2"
            />
          </NavLink>
          <NavLink
            href="/"
            className="hidden sm:flex  w-[50%] text-center text-3xl font-bold "
          >
            Trillion Quest
          </NavLink>
          <NavLink
            href="/why-choose-us"
            className="hidden sm:flex w-[50%] text-center text-xl lg:text-2xl font-bold"
          >
            Why Choose Us
          </NavLink>
        </div>
      </div>

      {/* Center */}
      <div className=" w-[30%] h-full justify-center items-center flex text-xl md:text-2xl lg:text-3xl">
        {/* Pantalla sm */}
        <NavLink href="/" className="w-[50%] text-center text-3xl font-bold ">
          Trillion
        </NavLink>
      </div>
      {/* Right Side */}
      <div className=" w-[35%] h-full justify-center items-center flex text-xl md:text-2xl lg:text-3xl">
        <div className="hidden sm:flex justify-center space-x-4 lg:space-x-14 text-xl lg:text-2xl font-bold">
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        {/* Botón de menú móvil */}
        <button
          className="sm:hidden focus:outline-none cursor-pointer hover:scale-110 transition-all hover:text-yellow-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 ml-24"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-[10vh] left-0 w-full py-4 px-6 space-y-2 md:hidden"
          >
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
}
