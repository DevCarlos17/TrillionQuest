'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Detecta si el usuario ha hecho scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Cierra el menú al hacer clic fuera
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
      className={`h-[10vh] w-full  transition-all duration-300 font-semibold ${
        hasScrolled ? 'bg-black shadow-lg' : ''
      }`}
    >
      {/* Navbar Principal */}
      <div className="flex items-center justify-between py-3 w-[100vw] ">
        {/* Logo y enlaces principales */}
        <div className="w-[50vw] flex  justify-center items-start space-x-5  lg:space-x-20 text-xl md:text-2xl lg:text-3xl  ">
          {/* Enlace visible solo en pantallas md y gl */}
          <a
            href="#"
            className="hidden sm:hidden md:inline-block lg:inline-block text-2xl lg:text-4xl font-bold cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
          >
            Trillion Fundation
          </a>

          {/* Imagen visible solo en pantallas sm */}
          <a href="#" className="mr-auto">
            <Image
              src="/images/mini-logo.svg"
              alt="Mini Logo"
              width={48}
              height={48}
              className="block sm:block md:hidden gl:hidden self-start"
            />
          </a>
          {/* Enlace visible solo en pantallas grandes */}
          <a
            href="#"
            className=" hidden sm:block text-xl self-center lg:text-3xl cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
          >
            Why Choose Us
          </a>
        </div>
        {/* Botón de menú móvil */}
        <button
          className="hidden border border-white
            bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 
            text-yellow-500 font-bold rounded-full 
            transition-transform px-5 py-1 text-1xl "
        >
          Contact Us
        </button>

        {/* Enlaces visibles solo en pantallas grandes */}
        <div className="w-[50vw] hidden sm:flex justify-center space-x-4 lg:space-x-10 text-xl lg:text-3xl ">
          <a
            href="#"
            className=" cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
          >
            About Us
          </a>
          <div className="relative group">
            <button className=" cursor-pointer hover:scale-110 hover:text-yellow-500 transition">
              Services
            </button>
          </div>
          <a
            href="#"
            className=" cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Botón de menú para móviles */}
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
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden py-4 px-6 space-y-2 ">
          <a
            href="#"
            className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300 "
          >
            Why Choose Us
            <hr className="text-slate-500 w-[20%]" />
          </a>
          <a
            href="#"
            className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
          >
            About Us
            <hr className="text-slate-500 w-[15%]" />
          </a>
          <a
            href="#"
            className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
          >
            Services
            <hr className="text-slate-500 w-[13%]" />
          </a>
          <a
            href="#"
            className="block text-lg cursor-pointer hover:scale-110 hover:text-yellow-500 transition duration-300"
          >
            Contact
            <hr className="text-slate-500 w-[11%]" />
          </a>
        </div>
      )}
      {/* Linea blanca */}
      <hr className="text-slate-400 border border-slate-400 w-full" />
    </div>
  );
}
