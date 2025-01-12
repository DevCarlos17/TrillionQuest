import { FaLinkedin, FaInstagram, FaWhatsappSquare, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex flex-col justify-center w-full md:h-[18vh] items-center py-2 bg-slate-700 text-white text-opacity-90 gap-y-1 font-semibold">
      <p className="text-1xl md:text-2xl">© 2025 TRILLION QUEST - All rights reserved.</p>

      <div className="container mx-auto flex flex-col text-center w-full h-full text-1xl md:text-2xl justify-center items-center mb-5">
        <div className="flex flex-col justify-center text-center space-y-4 sm:flex md:hidden">
          <p className="underline underline-offset-8 text-center cursor-pointer">Our journey</p>
          <p className="underline underline-offset-8 text-center cursor-pointer">Explore Services</p>
          <p className="underline underline-offset-8 text-center cursor-pointer">Privacy Practices</p>
          <p className="underline underline-offset-8 text-center cursor-pointer">Terms of Engagement</p>
          <p className="underline underline-offset-8 text-center cursor-pointer">Client Support</p>
        </div>


        <div className="hidden md:flex justify-evenly w-full space-x-10">
          <p className="underline underline-offset-8 cursor-pointer">Our journey</p>
          <p className="underline underline-offset-8 cursor-pointer">Explore Services</p>
          <p className="underline underline-offset-8 cursor-pointer">Privacy Practices</p>
          <p className="underline underline-offset-8 cursor-pointer">Terms of Engagement</p>
          <p className="underline underline-offset-8 cursor-pointer">Client Support</p>
        </div>
      </div>

      {/*Redes sociales */}
      <div className="flex space-x-10">
        <a
          href="https://www.tiktok.com/@trillionquest?_t=ZT-8stpLos8kec&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-white  transition-transform duration-700"
        >
          <FaTiktok size={40} />
        </a>

        <a
          href="https://www.instagram.com/trillionquest_?igsh=MWwwbnprYnpneDV4bg=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://www.linkedin.com/company/trillionquest/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
        >
          <FaWhatsappSquare size={40} />
        </a>
        <a
          href="https://www.linkedin.com/company/trillionquest/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-white transition-transform duration-700"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  );
}
