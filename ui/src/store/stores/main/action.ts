import { IUser } from 'appRoot/src/models/side-effects';
import { ACTION_TYPES } from 'src/store/types';
import { AppLoadings } from 'src/models';

export const toggleLoading = (loadingType: AppLoadings) => ({
  type: ACTION_TYPES.TOGGLE_LOADING,
  payload: loadingType
});
export const updateProfile = (user: IUser | null) => ({
  type: ACTION_TYPES.UPDATE_PROFILE,
  payload: user,
});
