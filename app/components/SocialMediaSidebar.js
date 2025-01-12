import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function SocialMediaSidebar() {
  return (
    <div
      className="fixed left-4 -translate-y-1/2 top-1/2 h-[23vh] md:h-[25vh] w-[4vh] md:w-[6vh] rounded-2xl flex flex-col items-center 
            border border-gray-300 text-white py-4 space-y-10 shadow-lg z-50"
    >
      <a
        href="https://www.tiktok.com/@trillionquest?_t=ZT-8stpLos8kec&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl md:text-4xl hover:scale-125 hover:text-yellow-300 transition-transform duration-200"
      >
        <FaPhoneAlt />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl md:text-4xl hover:scale-125 hover:text-yellow-300 transition-transform duration-200"
      >
        <FiMail />
      </a>
      <a
        href="https://wa.me/13524388372
"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl md:text-4xl hover:scale-125 hover:text-yellow-300 transition-transform duration-200"
      >
        <IoLogoWhatsapp />
      </a>
    </div>
  );
}
