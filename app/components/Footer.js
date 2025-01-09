import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex flex-col justify-center w-full md:h-[18vh] items-center py-2 bg-slate-700 text-white text-opacity-90 gap-y-1 font-semibold">
      <p className="text-1xl md:text-2xl">© 2025 TRILLION QUEST - All rights reserved.</p>

      <div className="container mx-auto flex flex-col text-center w-full h-full text-1xl md:text-2xl justify-center items-center mb-5">
        <div className="flex flex-col justify-center text-center space-y-4 sm:flex md:hidden">
          <p className="underline underline-offset-8 text-center">Our journey</p>
          <p className="underline underline-offset-8 text-center">Explore Services</p>
          <p className="underline underline-offset-8 text-center">Privacy Practices</p>
          <p className="underline underline-offset-8 text-center">Terms of Engagement</p>
          <p className="underline underline-offset-8 text-center">Client Support</p>
        </div>


        <div className="hidden md:flex justify-evenly w-full space-x-10">
          <p className="underline underline-offset-8">Our journey</p>
          <p className="underline underline-offset-8">Explore Services</p>
          <p className="underline underline-offset-8">Privacy Practices</p>
          <p className="underline underline-offset-8">Terms of Engagement</p>
          <p className="underline underline-offset-8">Client Support</p>
        </div>
        {/*Redes sociales */}
      </div>
      <div className="flex space-x-10">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 hover:text-yellow-500 transition-transform duration-200"
        >
          <FaInstagram size={35} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 hover:text-yellow-500 transition-transform duration-200"
        >
          <FaFacebook size={35} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150 hover:text-yellow-500 transition-transform duration-200"
        >
          <FaLinkedin size={35} />
        </a>
      </div>
    </div>
  );
}
