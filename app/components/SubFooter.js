import { MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

export default function SubFooter() {
  return (
    <div className="hidden md:flex justify-between px-8 w-full h-[10vh] text-lg">
      {/* Contact & Social */}
      <div className="h-full flex flex-col justify-evenly">
        <li className="flex font-bold text-2xl text-white text-opacity-90 gap-x-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 hover:text-yellow-500 transition-transform duration-200"
          >
            <FaPhone size={35} />
          </a>
          <span className="hover:scale-110 hover:text-yellow-500">
            +1 (515) 553-7235
          </span>
        </li>

        <li className="flex font-bold text-2xl text-white text-opacity-90 gap-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 hover:text-yellow-500 transition-transform duration-200"
          >
            <MdOutlineEmail size={35} />
          </a>
          <span className="hover:scale-110 hover:text-yellow-500">
            info@trillionquest.com
          </span>
        </li>

        {/* <li className="flex font-bold text-2xl text-white text-opacity-90 gap-x-5">
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-150 hover:text-yellow-500 transition-transform duration-200"
                >
                    <LuMapPin size={35} />
                </a>
                <span>Add a subheading</span>
            </li> */}
      </div>

      {/* Useful Links */}
      <div className="flex flex-col justify-evenly text-start text-white text-opacity-90 font-bold text-2xl">
        <span className="uppercase ml-4">USEFUL LINKS</span>

        <span className="w-[15vw]">
          <a href="#" className="ml-4">
            Why choose us
          </a>
          <hr className="text-gray-400/80" />
        </span>

        <span>
          <a href="#" className="ml-4">
            Services
          </a>
          <hr className="text-gray-400/80" />
        </span>

        <span>
          <a href="#" className="ml-4">
            About Us
          </a>
          <hr className="text-gray-400/80" />
        </span>
      </div>
    </div>
  );
}
