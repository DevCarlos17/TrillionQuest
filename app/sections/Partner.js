import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Image from 'next/image';

export default function Parther() {
  return (
    <div className="flex flex-col lg:flex-row lg:px-10 lg:py-14 items-center lg:items-start justify-center space-y-10 lg:space-y-0 lg:space-x-20 font-semibold">

      {/* Logo */}
      <div className="lg:w-[40%] flex justify-center lg:justify-end">
        <Image
          className="w-[90%] h-auto max-w-[400px] lg:max-w-full"
          src="/images/logo.svg"
          alt="Logo1"
          width={400}
          height={400}
        />
      </div>

      {/* Texto */}
      <div className="lg:w-[50%] text-center lg:text-left text-white space-y-10">
        <h1
          className="font-bold text-4xl lg:text-5xl"
          style={{ lineHeight: '1.6' }}
        >
          <span>PARTNER WITH</span> <br />
          <span className="text-yellow-400">TRILLION QUEST</span> <br />
          <span>AND HELP MILLIONS</span>
        </h1>

        <div>
          <p className="text-1xl lg:text-2xl">
            Together, we create success and <br /> change lives.
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-start text-2xl lg:text-5xl space-x-4">
          <h1 className="font-bold">100+</h1>
          <div className="flex items-center -space-x-5">
            {/* Imagenes circulares */}
            {['/images/img1.png', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg'].map((src, index) => (
              <div
                key={index}
                className="w-20 h-20 rounded-full overflow-hidden cursor-pointer hover:z-50 hover:scale-150 transition-transform duration-700"
              >
                <Image
                  className="w-full h-full"
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  width={600}
                  height={600}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:mr-64 items-center lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Botón con flecha */}
          <a
            href="#"
            className="uppercase tracking-widest px-6 py-1 md:py-3 border border-white/50 bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 text-yellow-500 font-bold rounded-full transition-transform duration-700 text-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 hover:text-gray-900 relative flex items-center justify-center space-x-3">
            <div className="flex items-center">
              <span className='text-sm md:text-2xl'>Learn More</span>
              <FaArrowDown className='block md:hidden ml-6 h-10 w-8' />
              <FaArrowRight className="hidden md:block ml-8 h-8 w-6" />
            </div>
          </a>

          {/* Iconos de redes sociales */}
          <div className="flex items-center space-x-10 mt-4 md:mt-0 text-white">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 transition-transform duration-700"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 transition-transform duration-700"
            >
              <FaFacebook size={40} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 hover:scale-150 transition-transform duration-700"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>

        <div className="text-sm md:text-2xl text-white">
          We redefine marketing strategies with innovation and creativity,
          We transform vision into impactful realities.
        </div>
      </div>
    </div>
  );
}
