export const containerVariant = {
  initial: {
    opacity: 0,
    x: '100vw',
    transition: {
      ease: 'easeIn',
    },
  },
  animate: {
    opacity: 1,
    x: '0',
    transition: {
      ease: 'easeIn',
      delay: 0.5,
      duration: 0.5,
      when: 'beforeChildren',
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
  },
  exit: {
    x: '100vw',
    transition: {
      ease: 'easeIn',
      duration: 0.5,
      delay: 0.25,
    },
  },
};

export const toRight = {
  initial: {
    opacity: 0,
    x: 100,
    width: '100%',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
    x: -100,
  },
  transition: { stiffness: 500, damping: 30 },
};
