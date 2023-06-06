import React, { InputHTMLAttributes, forwardRef, useCallback, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface IAppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showPassDefault?: boolean;
  containerClassName?: string;
}

export const AppInput = forwardRef<HTMLInputElement, IAppInputProps>(function AppInputWithRef(InProps: IAppInputProps, ref) {
  const { showPassDefault = false, label, containerClassName, className, ...props } = InProps;
  const [isShow, setIsShow] = useState(!!showPassDefault);
  const togglePassword = useCallback(() => setIsShow(!isShow), [isShow, setIsShow]);
  return (
    <label className={`${containerClassName || ''} input-label-container`}>
      <p className='input-label'>{label}</p>
      <input
        className={`${className || ''} app-input`}
        ref={ref}
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
});