import React from 'react';
import { RouterContainer } from 'src/components';

export function Greeting() {
  return (
    <RouterContainer>
      <div className={'fill bg-slate-600 '}>
        <p>greeting</p>
      </div>
    </RouterContainer>
  );
}