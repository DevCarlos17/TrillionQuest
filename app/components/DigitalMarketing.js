import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const DigitalMarketing = () => {

  const text = "Digital Marketing";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    if (!hasMoved) return; // No empieza a escribir hasta que termine el movimiento

    const typingSpeed = isDeleting ? 50 : 100; // Velocidad de escritura/borrado

    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else {
        setIsDeleting(!isDeleting);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, hasMoved]);

  return (
    <div
      className="w-full flex justify-start sm:justify-between items-center py-4 px-8 sm:px-10 md:px-15 lg:px-24 bg-gradient-to-r from-black via-gray-950 to-white sm:bg-gradient-to-r 
        sm:from-black sm:via-gray-950 sm:to-white md:bg-gradient-to-r md:from-black md:via-gray-950 md:to-white"
    >
      {/* Título de Digital Marketing */}
      <motion.span
        className="text-2xl md:text-4xl font-bold tracking-wider text-white"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        onAnimationComplete={() => setHasMoved(true)} // Cuando termina el movimiento, comienza el efecto de escritura
      >
        {displayedText}
      </motion.span>

      <div className="hidden sm:flex space-x-4 md:space-x-6  gl:mt-10 ml-20 md:ml-56">
        <a
          href="https://www.tiktok.com/@trillionquest?_t=ZT-8stpLos8kec&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-black  transition-transform duration-700"
        >
          <FaTiktok size={40} />
        </a>

        <a
          href="https://www.instagram.com/trillionquest_?igsh=MWwwbnprYnpneDV4bg=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-black transition-transform duration-700"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://www.linkedin.com/company/trillionquest/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 hover:scale-150 text-black transition-transform duration-700"
        >
          <IoLogoWhatsapp size={40} />
        </a>
        <a
          href="https://www.linkedin.com/company/trillionquest/"
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
