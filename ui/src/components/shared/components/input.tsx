import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface IAppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showPassDefault?: boolean;
}

export function AppInput({ showPassDefault = false, label, className, ...props }: IAppInputProps) {
  const [isShow, setIsShow] = useState(!!showPassDefault);
  const togglePassword = useCallback(() => setIsShow(!isShow), [isShow, setIsShow]);
  return (
    <label className='input-label-container'>
      <p className='input-label'>{label}</p>
      <input
        className={`app-input ${className || ''}`}
        {...{
          ...props,
          type: (props.type !== 'password' ? props.type : (isShow ? 'text' : 'password')),
        }}
      />
      {
        props.type === 'password' && (
          isShow
          ? <AiOutlineEye className='input-password-eye' onClick={togglePassword} />
          : <AiOutlineEyeInvisible className='input-password-eye' onClick={togglePassword} />
        )
      }
    </label>
  );
}