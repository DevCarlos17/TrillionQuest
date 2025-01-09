import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const DigitalMarketing = () => {
  return (
    <div
      className="w-full flex justify-start sm:justify-between items-center py-4 px-8 sm:px-10 md:px-15 lg:px-24 bg-gradient-to-r from-black via-gray-950 to-white sm:bg-gradient-to-r 
        sm:from-black sm:via-gray-950 sm:to-white md:bg-gradient-to-r md:from-black md:via-gray-950 md:to-white"
    >
      {/* Título de Digital Marketing */}
      <span className=" text-2xl md:text-4xl font-bold tracking-wider right-52 text-white whitespace-nowrap md:whitespace-normal">
        Digital Marketing
      </span>

      <div className="hidden sm:flex space-x-4 md:space-x-6  gl:mt-10 ml-20 md:ml-56">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-black  transition-transform duration-700"
        >
          <FaTiktok size={40} />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-black transition-transform duration-700"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-black transition-transform duration-700"
        >
          <FaFacebook size={40} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-black transition-transform duration-700"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  );
};

export default DigitalMarketing;
