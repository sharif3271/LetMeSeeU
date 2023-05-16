import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import { TOKEN_KEY, GREETING_DONE_KEY } from 'src/models/consts';
import { AppRoutes } from 'src/models';


export function PrivateRoute() {
  const location = useLocation();
  return !!localStorage.getItem(TOKEN_KEY)
      ? <Outlet />
      : !!localStorage.getItem(GREETING_DONE_KEY)
        ? <Navigate to={'Unauthorized'} state={{ from: location }} replace={true}/>
        : <Navigate to={AppRoutes.greeting}/>;
}
