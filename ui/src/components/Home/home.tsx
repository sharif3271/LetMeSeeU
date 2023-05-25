import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router';
import { RouterContainer } from 'src/components';
import { isInConnectionPath } from 'src/models';

export function Home() {

  const {pathname} = useLocation();
  const isInConnection = useMemo(() => isInConnectionPath(pathname), [pathname]);

  return (
    <RouterContainer>
      <div className={'home-container ' + (isInConnection ? 'connection' : 'home')}>
        <div className='home-list'></div>
        <div className='home-connection'>
          <Outlet />
        </div>
      </div>
    </RouterContainer>
  );
}