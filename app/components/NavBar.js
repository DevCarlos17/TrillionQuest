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

  return (
    <div
      className={`h-[10vh] flex items-center fixed top-0 z-50 w-full transition-all duration-300 font-semibold ${
        hasScrolled ? 'bg-black shadow-lg' : ''
      }`}
    >
      {/* Navbar Principal */}
      <div className="flex items-center justify-around 2xl:space-x-32 py-3 w-full">
        {/* Logo y enlaces principales */}
        <div className="flex space-x-5 lg:space-x-10 text-xl md:text-2xl lg:text-3xl">
          <NavLink
            href="/"
            className="hidden md:inline-block lg:inline-block text-2xl lg:text-4xl font-bold"
          >
            Trillion Fundation
          </NavLink>

          <NavLink href="/">
            <Image
              src="/images/miniLogo.svg"
              alt="Mini Logo"
              width={100}
              height={50}
              className="block sm:block md:hidden lg:hidden mr-60"
            />
          </NavLink>

          <button
            href="/contact"
            className="sm:inline-block md:hidden px-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600"
          >
            Contact
          </button>

          <NavLink
            href="/why-choose-us"
            className="hidden sm:block text-xl lg:text-3xl"
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
        <div className=" hidden sm:flex justify-center space-x-4 lg:space-x-14 text-xl lg:text-3xl">
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden py-4 px-6 space-y-2">
          <Sidebar />
          {/* <NavLink href="/whyChooseUs">Why Choose Us</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink> */}
        </div>
      )}
    </div>
  );
}
