import React from 'react';
import { useNavigate } from 'react-router';
import { RouterContainer } from 'src/components';

export function Home() {
  const nav = useNavigate();
  return (
    <RouterContainer>
      <div className={'h-full w-full bg-red-500'}>
        <button onClick={() => nav('nkvjsdbf')}>another</button>
      </div>
    </RouterContainer>
  );
}