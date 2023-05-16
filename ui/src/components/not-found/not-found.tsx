import React from 'react';
import { useNavigate } from 'react-router';
import { RouterContainer } from 'src/components';

export function NotFound() {
  const nav = useNavigate();
  return (
    <RouterContainer>
      <div className={'fill bg-slate-600'}>
        <p onClick={() => nav(-1)} className='text-4xl text-descGray'>404 Not Found!!</p>
      </div>
    </RouterContainer>
  );
}