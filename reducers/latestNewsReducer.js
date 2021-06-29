import { ACTION_TYPES } from "../actions/latestNewsActions";

const initialState = {
  latestNewsList: [],
  approvedNewsList: [],
  unapprovedNewsList: [],
};

export const latestNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_LATEST_NEWS:
      return {
        ...state,
        latestNewsList: [...state.latestNewsList, action.payload],
      };
    case ACTION_TYPES.GET_ALL_LATEST_NEWS:
      return {
        ...state,
        latestNewsList: [...action.payload],
      };
    case ACTION_TYPES.GET_ALL_APPROVED_NEWS:
      return {
        ...state,
        approvedNewsList: [...action.payload],
      };
    case ACTION_TYPES.GET_ALL_UNAPPROVED_NEWS:
      return {
        ...state,
        unapprovedNewsList: [...action.payload],
      };
    case ACTION_TYPES.APPROVE_NEWS:
      return {
        ...state,
        unapprovedNewsList: state.unapprovedNewsList.map((x) =>
          x._id === action.payload._id ? action.payload : x
        ),
      };
    case ACTION_TYPES.DELETE_NEWS:
      return {
        ...state,
        latestNewsList: state.latestNewsList.filter(
          (x) => x._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
