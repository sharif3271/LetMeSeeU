import { createSelector } from '@reduxjs/toolkit';
import { TStore } from 'store/reducers';

export const selectMainStore = createSelector(
    [(state: TStore) => state.MainStore],
    (MainStore => MainStore)
);
// export const selectPastList = createSelector(
//     selectMainStore,
//     store => store.sample
// );