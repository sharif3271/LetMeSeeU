import React from 'react';

interface IAppInputProps {
  label?: string;
}

export function AppInput(
  { label, className, ...props }: IAppInputProps & React.HTMLAttributes<HTMLInputElement>
) {
  return (
    <label className='flex flex-col'>
      <p className='opacity-90'>{label}</p>
      <input
        className={`
        bg-transparent border-b-2 border-slate-400
        px-0 py-2 text-base focus:outline-none
        ${className || ''}
      `}
        {...props}
      />
    </label>
  );
}