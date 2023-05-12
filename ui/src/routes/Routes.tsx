import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesModel, } from 'src/models';
import { NotFound, Home } from 'src/components';
import { PrivateRoute } from './PrivateRoutes';

export function AppRoutes() {
    return (
        <Routes>
            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
                {/*Home component is for rendering Headers or Footers or side-panels ... */}
                <Route path={RoutesModel.root} element={<Home />}>
                </Route>
            </Route>

            {/* no match (404) */}
            <Route path='*' element={<NotFound />} />

        </Routes>
    );
}
