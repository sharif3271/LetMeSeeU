import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { AppButton, AppInput, ErrorToast, FadeInBottom, SuccessToast } from 'src/components';
import { motion } from 'framer-motion';
import { MainServices } from 'src/services';
import { AxiosError } from 'axios';
import { IResponse } from 'src/models/side-effects';
import { useNavigate } from 'react-router';
import { AppRoutes } from 'src/models';
import { TOKEN_KEY } from 'src/models/consts';


interface IProps {
  goTo: () => void;
}

export function UserLogin({goTo}: IProps) {

  const [pageLoaded, setPageLoaded] = useState(false);
  const service = useMemo(() => new MainServices(), []);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const isActive = useMemo(() => name && name.length > 3 && password && password.length > 5, [name, password]);

  const onSubmit = useCallback(() => {
    setLoading(true);
    service.login(name, password)
      .then(({data}) => {
        if (data.success) {
          SuccessToast('Login successfull', 2000);
          localStorage.setItem(TOKEN_KEY, data.data);
          setTimeout(() => {
            navigate(AppRoutes.root);
          }, 500);
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
  }, [name, password]);

  useLayoutEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
  }, []);
  return (
    <motion.div
      className='entry-type-container'
      variants={FadeInBottom}
      custom={pageLoaded}
      initial={'initial'}
      animate={'animate'}
    >
      <h1 className='entry-title'>Login</h1>
      <AppInput
        label='Your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='e.g. John Wick'
      />
      <AppInput
        label='Password'
        placeholder='*********'
        type='password'
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <AppButton
        isLoading={loading}
        onClick={onSubmit}
        disabled={!isActive}
      >Login</AppButton>
      <h3 className='entry-subtitle'>Not a member?</h3>
      <div className='link-like w-max' onClick={goTo}>Register</div>
    </motion.div>
  );
}