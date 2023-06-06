import React, { InputHTMLAttributes, useCallback, useMemo, useRef } from 'react';
import { AppInput } from 'src/components';
import { MdSearch, MdClose } from 'react-icons/md';

interface IInputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputSearch({className, value,  ...props}: IInputSearchProps) {

  const ref = useRef<HTMLInputElement>(null);
  const clearSearch = useCallback(() => {
    if (ref.current) ref.current.value = '';
  }, [ref.current]);
  const FocusSearch = useCallback(() => {
    if (ref.current) ref.current.focus();
  }, [ref.current]);

  return (
    <div className='relative flex items-center w-full'>
      <MdSearch className='absolute left-0 cursor-text w-6 h-6 fill-slate-400' onClick={FocusSearch}/>
      <AppInput
        {...props}
        ref={ref}
        className={`${className || ''} input-search`}
        value={value}
        containerClassName='w-full'
      />
      {!!value && (
        <MdClose className='absolute right-0  w-6 h-6 cursor-pointer fill-slate-400' onClick={clearSearch}/>
      )}
    </div>
  );
}