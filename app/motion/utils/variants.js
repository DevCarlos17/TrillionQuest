const slideInFromRight = {
  hidden: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.5 },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.3, ease: 'easeOut', delay: 0.2 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn', delay: 0.2 },
  },
};

const slideInFromLeft = {
  hidden: {
    x: '-88%',
    opacity: 0,
    transition: { duration: 0.5 },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.3, ease: 'easeOut', delay: 0.2 },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn', delay: 0.2 },
  },
};

const slideInFromTop = {
  hidden: {
    y: '-100%',
    opacity: 0,
    transition: { duration: 0.5 },
  },
  visible: {
    y: 0, // Regresa a su posición inicial
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  exit: {
    y: '-100%', // Sale nuevamente hacia arriba
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

const slideInFromBottom = {
  hidden: {
    y: '100%',
    opacity: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
  visible: {
    y: 0, // Regresa a su posición inicial
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
  },
  exit: {
    y: '100%', // Sale nuevamente hacia abajo
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn', delay: 0.2 },
  },
};

export { slideInFromRight, slideInFromLeft, slideInFromTop, slideInFromBottom };
