import React, { useCallback, useMemo, useState } from 'react';
import { AppButton, AppInput, ErrorToast, FadeInBottom, SuccessToast } from 'src/components';
import { motion } from 'framer-motion';
import { MainServices } from 'src/services';
import { AxiosError } from 'axios';
import { IResponse } from 'src/models/side-effects';

interface IProps {
  goTo: () => void;
}

export function UserRegister({goTo}: IProps) {

  const service = useMemo(() => new MainServices(), []);

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const isActive = useMemo(() => name && name.length > 2 && pass && pass.length > 5, [name, pass]);

  const onSubmit = useCallback(() => {
    setLoading(true);
    service.register(name, pass)
      .then(({data}) => {
        if (data.success) {
          SuccessToast('Operation successfull, Please login', 3000);
          setTimeout(goTo, 1000);
        } else {
          ErrorToast(data.message);
        }
      })
      .catch((err: AxiosError<IResponse>) => {
        if (err.response?.data.message) {
          ErrorToast(err.response?.data.message);
        }
      })
      .finally(() => setLoading(false));
  }, [name, pass]);

  return (
    <motion.div
      className='entry-type-container'
      variants={FadeInBottom}
      custom={false}
      initial={'initial'}
      animate={'animate'}
    >
      <h1 className='entry-title'>Register</h1>
      <AppInput
        label='Your name'
        placeholder='e.g. John Wick'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <AppInput
        label='Password'
        placeholder='*********'
        showPassDefault={true}
        type='password'
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <AppButton
        isLoading={loading}
        onClick={onSubmit}
        disabled={!isActive}
      >Register</AppButton>
      <h3 className='entry-subtitle'>You have an account?</h3>
      <div className='link-like w-max' onClick={goTo}>Login</div>
    </motion.div>
  );
}