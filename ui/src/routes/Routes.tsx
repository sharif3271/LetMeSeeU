import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppRoutes, } from 'src/models';
import { NotFound, Home, Greeting, UserEntry } from 'src/components';
import { PrivateRoute } from './PrivateRoutes';
import { AnimatePresence } from 'framer-motion';


export function AllRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route element={<PrivateRoute />}>
          {/* main routes of App */}
          <Route path={AppRoutes.root} element={<Home />} />
        </Route>
        <Route path={AppRoutes.greeting} element={<Greeting />} />
        <Route path={AppRoutes.userEntry} element={<UserEntry />} />
        {/* no match (404) */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
