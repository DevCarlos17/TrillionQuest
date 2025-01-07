'use client';

import { FaMeta, FaGoogle, FaMicrosoft } from 'react-icons/fa6';
import { SiOpenai } from 'react-icons/si';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnerSlider = () => {
  const partners = [
    { name: 'Meta', icon: FaMeta },
    { name: 'OpenAI', icon: SiOpenai },
    { name: 'Google', icon: FaGoogle },
    { name: 'Microsoft', icon: FaMicrosoft },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      className="w-full py-4 relative border animate-glow border-white overflow-hidden rounded-lg"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.name}>
            <div className="flex items-center justify-center group cursor-pointer">
              {/* Ícono */}
              <partner.icon
                className="w-[7vw] h-[7vh] md:w-[8vw] md:h-[8vh] lg:w-[9vw] xl:h-[9vh] text-white transition-transform duration-500 group-hover:scale-125 group-hover:text-yellow-500"
                aria-label={partner.name}
              />
              {/* Nombre */}
              <span className="text-3xl md:text-4xl lg:text-5xl  font-semibold text-white transition-colors duration-300 group-hover:text-yellow-500">
                {partner.name}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default PartnerSlider;
