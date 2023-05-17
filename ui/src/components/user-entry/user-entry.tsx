import React, { useCallback, useLayoutEffect, useState } from 'react';
import { AppButton, AppInput, RouterContainer } from 'src/components';
import { motion } from 'framer-motion';

export function UserEntry() {
  const [entryType, setEntryType ] = useState<'Login' | 'Register'>('Login');
  const [pageLoaded, setPageLoaded] = useState(false);
  const go2register = useCallback(() => setEntryType('Register'), []);
  const go2login = useCallback(() => setEntryType('Login'), []);
  useLayoutEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <RouterContainer>
      <div className={'fill'}>
        {entryType === 'Login' && (
          <motion.div
            className='entry-type-container'
            initial={{
              y: '30vh',
              opacity: 0,
            }}
            animate={{
              y: '0vh',
              opacity: 1,
              transition: {ease: 'easeIn', duration: 0.4, delay: pageLoaded ? 0 : 0.4}
            }}
          >
            <h1 className='entry-title'>{entryType}</h1>
            <AppInput
              label='Your name'
              placeholder='e.g. John Wick'
            />
            <AppInput
              label='Password'
              placeholder='*********'
            />
            <AppButton>Login</AppButton>
            <h3 className='entry-subtitle'>Not a member?</h3>
            <div className='link-like w-max' onClick={go2register}>Register</div>
          </motion.div>
        )}
        {entryType === 'Register' && (
          <motion.div
            className='entry-type-container'
            initial={{
              y: '30vh',
              opacity: 0,
            }}
            animate={{
              y: '0vh',
              opacity: 1,
              transition: {ease: 'easeIn', duration: 0.5}
            }}
          >
            <h1 className='entry-title'>{entryType}</h1>
            <AppInput
              label='Your name'
              placeholder='e.g. John Wick'
            />
            <AppInput
              label='Phone number '
              placeholder='e.g. XXX-XXX-XXXX'
            />
            <AppInput
              label='Password'
              placeholder='*********'
            />
            <AppButton>Register</AppButton>
            <h3 className='entry-subtitle'>You hane an account?</h3>
            <div className='link-like w-max' onClick={go2login}>Login</div>
          </motion.div>
        )}
      </div>
    </RouterContainer>
  );
}