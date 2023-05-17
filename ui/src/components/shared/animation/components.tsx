import React from 'react';
import { motion } from 'framer-motion';
import { RoutingAnimation } from 'appRoot/src/components/shared';

export function RouterContainer({children}) {
  return (
    <motion.div
      variants={RoutingAnimation}
      initial={'initial'}
      animate={'final'}
      className='page-container'
    >
      {children}
    </motion.div>
  );
}