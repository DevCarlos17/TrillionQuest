'use client';

import { FaMeta, FaGoogle, FaMicrosoft } from 'react-icons/fa6';
import { SiOpenai } from 'react-icons/si';
import SliderComponent from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PartnersSlider() {
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
    autoplaySpeed: 2000, // Cambiado de 0 a 2000ms para evitar problemas
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
      className="w-full py-4 relative overflow-hidden animate-glow border border-yellow-400 rounded-lg"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
    >
      {/* Slider */}
      <div className="relative z-10">
        <SliderComponent {...settings}>
          {partners.map((partner) => (
            <div key={partner.name}>
              <div className="flex items-center justify-center space-x-4 group cursor-pointer">
                {/* Ícono */}
                <partner.icon
                  className="w-16 h-20 text-white transition-transform duration-500 group-hover:scale-125 group-hover:text-yellow-500"
                  aria-label={`${partner.name} logo`}
                />
                {/* Nombre */}
                <span className="text-5xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-500">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>
    </motion>
  );
}
