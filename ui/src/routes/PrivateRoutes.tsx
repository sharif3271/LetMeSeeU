import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import { TOKEN_KEY } from 'src/models/consts';


export function PrivateRoute() {
  const location = useLocation();
  return !!localStorage.getItem(TOKEN_KEY) || true
      ? <Outlet />
      : <Navigate to={'Unauthorized'} state={{ from: location }} replace={true}/>;
}
