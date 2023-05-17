import React from 'react';


export function AppButton(
  {children, className, ...props}: React.HTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      className={`bg-gradient-to-r from-[#1859F9] to-[#1879D9]
        p-4 py-3 text-xl text-slate-50 rounded-lg
        hover:to-0% active:to-100% active:from-100%
        ${!!className ? className : ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
}