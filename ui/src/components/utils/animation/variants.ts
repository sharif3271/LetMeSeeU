import { Variant } from 'framer-motion';

export const RoutingAnimation: Record<string, Variant> = {
  initial: {
    x: '100vw',
    opacity: 0
  },
  final: {
    x: '0vw',
    opacity: 1,
    transition: {
      type: 'spring',
      mass: '0.3'
    }
  }
};