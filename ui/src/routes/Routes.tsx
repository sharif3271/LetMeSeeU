import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RoutesModel, } from 'src/models';
import { NotFound, Home } from 'src/components';
import { PrivateRoute } from './PrivateRoutes';
import { AnimatePresence } from 'framer-motion';


export function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route element={<PrivateRoute />}>
          {/* main routes of App */}
          <Route path={RoutesModel.root} element={<Home />} />
        </Route>
        {/* no match (404) */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
