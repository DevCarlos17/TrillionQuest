import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import NavLink from './NavLink';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
        onClick={handleClose}
      ></div>

      {/* Blur */}
      <div
        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Side Menu */}
      <nav className="fixed p-5 right-5 top-5 w-[200px] h-[50%] bg-gray-800 rounded-3xl z-20 shadow-2xl transform transition-all duration-700">
        <IoClose
          size={40}
          className="absolute top-4 right-4 cursor-pointer hover:text-yellow-400"
          onClick={handleClose}
        />

        <div className="relative mt-14 flex flex-col font-bold space-y-2">
          <div className="text-2xl py-2 px-4 rounded-lg hover:bg-gray-700 focus:bg-gray-600 transition-colors">
            <NavLink href="/about" className="flex justify-center">
              About Us
            </NavLink>
          </div>
          <div className="text-2xl py-2 px-4 rounded-lg hover:bg-gray-700 focus:bg-gray-600 transition-colors">
            <NavLink href="/contact" className="flex justify-center">
              Contact
            </NavLink>
          </div>
          <div className="text-2xl py-2 px-4 rounded-lg hover:bg-gray-700 focus:bg-gray-600 transition-colors">
            <NavLink href="/services" className="flex justify-center">
              Services
            </NavLink>
          </div>
        </div>
        {/* Footer */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="p-4 rounded-xl bg-gray-700/20 backdrop-blur-sm cursor-pointer">
            <p className="text-sm text-gray-400 text-center">
              Need help?{' '}
              <Link className="text-white font-bold" href="/contact">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
