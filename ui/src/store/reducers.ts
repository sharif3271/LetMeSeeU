import { configureStore } from '@reduxjs/toolkit';
import { MainStore } from 'appRoot/src/store/stores/main';

export const reducers = ({
  MainStore,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export type TStore = ReturnType<typeof store.getState>;