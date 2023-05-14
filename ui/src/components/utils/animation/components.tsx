import React from 'react';
import { motion } from 'framer-motion';
import { RoutingAnimation } from 'src/components/utils';

export function RouterContainer({children}) {
  return (
    <motion.div
      variants={RoutingAnimation}
      initial={'initial'}
      animate={'final'}
      exit={'exit'}
      className='page-container'
    >
      {children}
    </motion.div>
  );
}