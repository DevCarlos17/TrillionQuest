import { MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import NavLink from './NavLink';

export default function SubFooter() {
  return (
    <div className="flex justify-between pt-10 md:pt-20 items-start md:items-start xl:items-center px-8 w-full h-[60vh] lg:h-[30vh] xl:h-[50vh] text-lg bg-black/15 md:bg-black/5 lg:bg-inherit  ">
      {/* Contact & Social */}
      <div className=" space-y-6 flex flex-col justify-center  ">
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
      <div className="flex flex-col justify-evenly text-start text-white text-opacity-90 font-bold text-2xl md:space-y-2 h-[20vh]  ">
        <span className="uppercase ml-4 mb-2">USEFUL LINKS</span>

        <span className="w-[15vw]">
          <NavLink href="/why-choose-us">Why Choose Us</NavLink>
          <hr className="text-gray-400/80" />
        </span>

        <span>
          <NavLink href="/services">Services</NavLink>
          <hr className="text-gray-400/80" />
        </span>

        <span>
          <NavLink href="/about">About Us</NavLink>
          <hr className="text-gray-400/80" />
        </span>
      </div>
    </div>
  );
}
