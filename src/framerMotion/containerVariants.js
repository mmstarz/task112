export const pageContainerVariant = {
  initial: {
    opacity: 0,
    width: '100%',
    x: '100vw',
    transition: {
      type: 'spring',
    },
  },
  animate: {
    opacity: 1,
    x: '0',
    transition: {
      type: 'spring',
      delay: 0.5,
      duration: 0.5,
      when: 'beforeChildren',
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
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
