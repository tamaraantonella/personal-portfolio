export const easing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

export const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

export const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const subtitleAndContent = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};
export const title = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.2, delay: 0.2 },
  },
};


