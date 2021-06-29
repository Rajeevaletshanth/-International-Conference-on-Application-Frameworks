import { ACTION_TYPES } from "../actions/researcherActions";

const initialState = {
  researcherList: [],
  researcherListPending: true,
  singleReasearcher:"",
};

export const researcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.RESEARCHER_LIST:
      return {
        ...state,
        researcherList: [...action.payload],
        researcherListPending: false,
      };
    case ACTION_TYPES.GET_SPECIFIC_RESEARCHER_DETAILS:
      return {
        ...state,
        singleReasearcher: action.payload,
      };
    case ACTION_TYPES.APPROVE_REASEARCHER_PAYMENT:
      return {
        ...state,
        singleReasearcher: action.payload,
      };
    default:
      return state;
  }
};
