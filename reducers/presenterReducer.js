import { ACTION_TYPES } from "../actions/presenterActions";

const initialState = {
  presenterList: [],
  presenterListPending: true,
};

export const presenterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.PRESENTER_LIST:
      return {
        ...state,
        presenterList: [...action.payload],
        presenterListPending: false,
      };
    default:
      return state;
  }
};
