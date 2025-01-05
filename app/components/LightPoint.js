import { motion } from 'framer-motion';

export default function LightPoint({ style }) {
  return (
    <motion
      // En pantallas pequeñas (sm), puedes cambiar la posición
      className={` w-[8vw] h-[10vh] rounded-full  sm:left-32  ${style}`}
      style={{
        background:
          'radial-gradient(circle, rgba(255,255,255,0.7) 10%, rgba(0,0,0,0) 60%)',
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
