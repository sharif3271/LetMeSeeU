import { Variant } from 'framer-motion';

export const RoutingAnimation: Record<string, Variant> = {
  initial: {
    x: '90vw',
    opacity: 0.3
  },
  final: {
    x: '0vw',
    opacity: 1,
    transition: {
      type: 'spring',
      mass: '0.5',
      stiffness: 100
    }
  },
};