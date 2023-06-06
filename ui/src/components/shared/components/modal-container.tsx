import React, { HTMLAttributes } from 'react';

export function ModalConatiner(props: HTMLAttributes<HTMLDivElement>) {
  const {children, className, ...rest} = props;
  return (
    <div
      className={`modal-container ${className}`}
      {...rest}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
}