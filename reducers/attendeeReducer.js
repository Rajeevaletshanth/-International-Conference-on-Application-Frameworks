import { ACTION_TYPES } from "../actions/attendeeActions";

const initialState = {
  attendeeList: [],
  attendeeListPending: true,
};

export const attendeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ATTENDEE_LIST:
      return {
        ...state,
        attendeeList: [...action.payload],
        attendeeListPending: false,
      };
    default:
      return state;
  }
};
