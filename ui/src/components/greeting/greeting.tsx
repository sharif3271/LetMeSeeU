import React from 'react';
import { RouterContainer } from 'src/components';
import Logo from 'src/assets/icons/logo.svg';
import { motion } from 'framer-motion';

export function Greeting() {
  return (
    <RouterContainer>
      <div className={'fill flex-col-start bg-slate-50 '}>
        <motion.img
          src={Logo}
          initial={{y: 400, opacity: 0}}
          animate={{y: 50, opacity: 1}}
          transition={{ ease: 'linear', duration: 1, delay: 0.5}}
          alt='Logo'
          className='user-entry-logo'
        />
      </div>
    </RouterContainer>
  );
}