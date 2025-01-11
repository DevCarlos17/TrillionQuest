import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutCollageImages() {
  const images = [
    { src: '/images/Collage1.svg', height: 'h-64' },
    { src: '/images/Collage2.svg', height: 'h-56' },
    { src: '/images/Collage3.svg', height: 'h-72' },
    { src: '/images/Collage4.svg', height: 'h-60' },
    { src: '/images/Collage5.svg', height: 'h-52' },
  ];

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <div className="flex w-[90%] flex-row items-center justify-center space-x-4 md:mb-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative w-48 ${image.height} overflow-hidden rounded-lg`}
            initial={{ x: '20vw', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 + index * 0.5, ease: 'easeOut' }}
          >
            <Image
              src={image.src}
              alt={`Collage ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        ))}
      </div>
      <span className="text-2xl md:text-5xl font-bold my-10">
        Let’s turn them into solutions
      </span>
    </div>
  );
}
