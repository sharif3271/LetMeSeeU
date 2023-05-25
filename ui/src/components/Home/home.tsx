import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router';
import { RouterContainer } from 'src/components';
import { isInConnectionPath } from 'src/models';
import { UsersList } from 'src/components';
import { MainFacade } from 'src/store/stores/main';

export function Home() {

  const facade = useMemo(() => new MainFacade(), []);
  const {pathname} = useLocation();
  const isInConnection = useMemo(() => isInConnectionPath(pathname), [pathname]);

  useLayoutEffect(() => {
    facade.initiateHome();
  }, []);

  return (
    <RouterContainer>
      <div className={'home-container ' + (isInConnection ? 'connection' : 'home')}>
        <div className='home-list'>
          <UsersList />
        </div>
        <div className='home-connection'>
          <Outlet />
        </div>
      </div>
    </RouterContainer>
  );
}