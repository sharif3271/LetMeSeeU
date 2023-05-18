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
};

export const GText: Record<string, Variant> = {
  initial: {opacity: 0, y: '20vh'},
  animate: i => ({opacity: 1, y: '0vh', transition: { delay: i * 0.15 + 1}}),
};