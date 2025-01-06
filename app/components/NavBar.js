'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import NavLink from './NavLink';

export default function NavBar() {
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
      className={`h-[8vh] flex items-center sticky top-0 z-40 w-full transition-all duration-300 font-semibold ${
        hasScrolled ? 'bg-black shadow-lg' : ''
      }`}
    >
      {/* Navbar Principal */}
      <div className="flex items-center justify-between py-3 w-full">
        {/* Logo y enlaces principales */}
        <div className="w-[50vw] flex justify-center items-start space-x-5 lg:space-x-20 text-xl md:text-2xl lg:text-3xl">
          <NavLink
            href="/"
            className="hidden md:inline-block lg:inline-block text-2xl lg:text-4xl font-bold"
          >
            Trillion Fundation
          </NavLink>

          <NavLink href="/">
            <Image
              src="/images/mini-logo.svg"
              alt="Mini Logo"
              width={48}
              height={48}
              className="block sm:block md:hidden lg:hidden self-start"
            />
          </NavLink>
          <NavLink
            href="/whyChooseUs"
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
            className="h-6 w-6"
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
        <div className="w-[50vw] hidden sm:flex justify-center space-x-4 lg:space-x-10 text-xl lg:text-3xl">
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden py-4 px-6 space-y-2">
          <NavLink href="/whyChoosUs">Why Choose Us</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      )}
    </div>
  );
}
