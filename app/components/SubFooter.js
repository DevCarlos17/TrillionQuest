import { MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import NavLink from './NavLink';

export default function SubFooter() {
  return (
    <div className="flex justify-between bg-black pt-10 md:pt-20 items-center px-10 xl:px-28 h-[20vh] md:h-[25vh] lg:h-[25vh] xl:h-[25vh] w-full">
      {/* Contact & Social */}
      <ul className="space-y-6 flex flex-col items-center justify-center -mt-24">
        {/* Teléfono */}
        <li className="flex items-center gap-x-3 md:gap-x-5 font-bold text-white">
          <a
            href="tel:+15155537235"
            className="hover:scale-110 hover:text-yellow-500 transition-transform duration-700 flex items-center gap-x-2"
          >
            <FaPhone size={30} className="hidden sm:block md:block" />
          </a>
          <span className="hover:scale-110 hover:text-yellow-500 text-1xl md:text-3xl cursor-pointer">
            +1 (515) 553-7235
          </span>
        </li>

        {/* Email */}
        <li className="flex items-center gap-x-3 md:gap-x-5 font-bold text-white ">
          <a
            href="mailto:info@trillionquest.com"
            className="hover:scale-110 hover:text-yellow-500 transition-transform duration-700 flex items-center gap-x-2"
          >
            <MdOutlineEmail size={30} className="hidden sm:block md:block" />
          </a>
          <span className="hover:scale-110 hover:text-yellow-500 text-1xl md:text-3xl cursor-pointer">
            info@trillionquest.com
          </span>
        </li>
      </ul>

      {/* Useful Links */}
      <div div className="flex -mt-14 flex-col justify-evenly mr-5 md:mr-0 text-center text-white text-opacity-90 font-bold text-1xl md:text-2xl md:space-y-2 h-[20vh]" >
        <span className="uppercase ml-4 mb-2">USEFUL LINKS</span>

        <span className="w-[15vw] whitespace-nowrap">
          <NavLink href="/why-choose-us">Why Choose Us</NavLink>
          <hr className="text-gray-400/80 w-full" />
        </span>

        <span>
          <NavLink href="/services">Services</NavLink>
          <hr className="text-gray-400/80" />
        </span>

        <span>
          <NavLink href="/about">About Us</NavLink>
          <hr className="text-gray-400/80" />
        </span>
      </div >
    </div >
  );
}
