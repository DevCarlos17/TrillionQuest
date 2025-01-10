import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function SocialMediaBar() {
  return (
    <div
      className="w-full flex justify-center items-center py-2 px-8 sm:px-10 md:px-15 lg:px-24 bg-gradient-to-r from-white via-gray-300 to-black sm:bg-gradient-to-r 
                sm:from-white sm:via-gray-300 sm:to-black md:bg-gradient-to-r md:from-white md:via-gray-300 md:to-black rounded-2xl"
    >
      <div className="flex space-x-4 md:space-x-6">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 md:hover:scale-150 text-black transition-transform duration-700"
        >
          <FaTiktok size={40} />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 md:hover:scale-150 text-black transition-transform duration-700"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 md:hover:scale-150 text-black transition-transform duration-700"
        >
          <FaFacebook size={40} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 md:hover:scale-150 text-black transition-transform duration-700"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  );
}
