import { ACTION_TYPES } from 'src/store/types';
import { IMainStore } from 'src/models';

const initialState: IMainStore = {
};

export const MainStore = (state = initialState, action: any): IMainStore => {
  switch (action.type) {
    case ACTION_TYPES.SAMPLE_TYPE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
