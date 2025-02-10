import { MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import NavLink from './NavLink';

export default function SubFooter() {
  return (
    <div className="flex justify-between bg-black py-10 md:py-20 items-center px-10 xl:px-28 h-[25vh] w-full">
      {/* Contact & Social */}
      <ul className="flex flex-col items-start space-y-6">
        {/* Teléfono */}
        <li className="flex items-center gap-x-3 md:gap-x-5 font-bold text-white">
          <a
            href="tel:+15155537235"
            className="hover:scale-110 hover:text-yellow-500 transition-transform duration-700 flex items-center gap-x-2"
          >
            <FaPhone size={20} />
          </a>
          <a
            href="https://wa.me/13524388372"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-yellow-500 text-sm md:text-lg cursor-pointer"
          >
            +1 (515) 553-7235
          </a>
        </li>

        {/* Email */}
        <li className="flex items-center gap-x-3 md:gap-x-5 font-bold text-white">
          <a
            href="mailto:info@trillionquest.com"
            className="hover:scale-110 hover:text-yellow-500 transition-transform duration-700 flex items-center gap-x-2"
          >
            <MdOutlineEmail size={25} />
          </a>
          <a
            href="mailto:info@trillionquest.com"
            className="hover:scale-110 hover:text-yellow-500 text-sm md:text-lg cursor-pointer"
          >
            info@trillionquest.com
          </a>
        </li>
      </ul>

      {/* Useful Links */}
      <div className="flex flex-col items-start space-y-4 text-white text-opacity-90 font-bold text-sm md:text-lg">
        <span className="uppercase">Useful Links</span>
        <span>
          <NavLink href="/why-choose-us">Why Choose Us</NavLink>
          <hr className="text-gray-400/80 mt-1" />
        </span>
        <span>
          <NavLink href="/services">Services</NavLink>
          <hr className="text-gray-400/80 mt-1" />
        </span>
        <span>
          <NavLink href="/about">About Us</NavLink>
          <hr className="text-gray-400/80 mt-1" />
        </span>
      </div>
    </div>
  );
}
