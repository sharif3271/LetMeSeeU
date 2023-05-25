import { createSelector } from '@reduxjs/toolkit';
import { TStore } from 'store/reducers';
import { IMainStore } from 'src/models';

export const selectMainStore = createSelector(
    [(state: TStore) => state.MainStore],
    (MainStore => MainStore)
);
export const selectProfile = createSelector(
    selectMainStore,
    store => ({
      profile: store.profile,
      profileLoading: store.profileLoading,
    } as Partial<IMainStore>)
);