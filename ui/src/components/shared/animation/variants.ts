import { Variant } from 'framer-motion';

export const RoutingAnimation: Record<string, Variant> = {
  initial: {
    x: '90vw',
    opacity: 0.3,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
  final: {
    x: '0vw',
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.4
    }
  },
  exit: {
    x: '-100vw',
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.3
    }
  }
};

export const GText: Record<string, Variant> = {
  initial: {opacity: 0, y: '20vh'},
  animate: i => ({opacity: 1, y: '0vh', transition: { delay: i * 0.15 + 1}}),
};
export const FadeInBottom: Record<string, Variant> = {
  initial: {
    y: '30vh',
    opacity: 0,
  },
  animate: i => ({
    y: '0vh',
    opacity: 1,
    transition: {ease: 'easeIn', duration: 0.3, delay: !!i ? 0 : 0.4}
  }),
};