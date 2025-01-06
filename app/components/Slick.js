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
    <motion
      className="w-full py-4 relative overflow-hidden animate-glow rounded-lg"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center">
            <partner.icon
              className="w-12 h-12 sm:w-16 sm:h-16 text-white transition-transform duration-500 hover:scale-125 hover:text-yellow-500"
              aria-label={partner.name}
            />
          </div>
        ))}
      </Slider>
    </motion>
  );
};

export default PartnerSlider;
