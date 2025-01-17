import { FaLinkedin, FaInstagram, FaWhatsappSquare, FaTiktok } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";


export default function Footer() {
  return (
    <div className="flex flex-col justify-center w-full md:h-[10vh] items-center py-5 bg-slate-700 text-white text-opacity-90 font-semibold">
      <p className="text-1xl md:text-2xl">© 2025 TRILLION QUEST - All Rights Reserved.</p>

      <div className="container mx-auto flex flex-col text-center w-full h-full text-1xl justify-center items-center mb-5">
        <div className="flex flex-col justify-center text-center space-y-4 sm:flex md:hidden">
          <p className="text-center cursor-pointer">Our journey</p>
          <p className="text-center cursor-pointer">Explore Services</p>
          <p className="text-center cursor-pointer">Privacy Practices</p>
          <p className="text-center cursor-pointer">Terms of Engagement</p>
          <p className="text-center cursor-pointer">Client Support</p>
          {/* Icons SM */}
          <div className='flex space-x-5'>
            <a
              href="https://www.tiktok.com/@trillionquest?_t=ZT-8stpLos8kec&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white  transition-transform duration-700"
            >
              <FaTiktok size={25} />
            </a>
            <a
              href="https://www.instagram.com/trillionquest_?igsh=MWwwbnprYnpneDV4bg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/trillionquest/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <IoLogoWhatsapp size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/trillionquest/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>


        <div className="hidden text-lg md:flex justify-center space-x-20 mt-3 w-full">
          <p className="cursor-pointer">Our journey</p>
          <p className="cursor-pointer">Explore Services</p>
          <p className="cursor-pointer">Privacy Practices</p>
          <p className="cursor-pointer">Terms of Engagement</p>
          <p className="cursor-pointer">Client Support</p>

          {/* Icons */}
          <div className='flex space-x-5'>
            <a
              href="https://www.tiktok.com/@trillionquest?_t=ZT-8stpLos8kec&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white  transition-transform duration-700"
            >
              <FaTiktok size={25} />
            </a>
            <a
              href="https://www.instagram.com/trillionquest_?igsh=MWwwbnprYnpneDV4bg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/trillionquest/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <IoLogoWhatsapp size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/trillionquest/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
