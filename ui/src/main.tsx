import React from 'react';
import { Provider } from 'react-redux';
import './assets/style/style.css';
import { AllRoutes } from 'src/routes/Routes';
import { store } from 'store/reducers';
import { BrowserRouter } from 'react-router-dom';

export function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AllRoutes />
      </Provider>
    </BrowserRouter>
  );
}