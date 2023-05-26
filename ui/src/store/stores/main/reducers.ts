import { ACTION_TYPES } from 'src/store/types';
import { IMainStore } from 'src/models';
import { toggleLoading, updateProfile } from 'src/store/stores/main/action';
import { IUser } from 'appRoot/src/models/side-effects';

const initialState: IMainStore = {
  profile: null,
};

export const MainStore = (state = initialState, action: any): IMainStore => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_PROFILE:
      const user = (action as ReturnType<typeof updateProfile>).payload;
      return {
        ...state,
        profile: user !== null ? {...(state.profile ? state.profile : {}), ...user} as IUser : null
      };
    case ACTION_TYPES.TOGGLE_LOADING:
      const loadingType = (action as ReturnType<typeof toggleLoading>).payload;
      return {
        ...state,
        [loadingType]: !state[loadingType]
      };
    default:
      return state;
  }
};
