import { ACTION_TYPES } from "../actions/conferenceActions";

const initialState = {
  conferenceList: [],
  conferenceListPending: true,
  approvedConferenceList: [],
  approvedConferenceListPending: true,
  unapprovedConferenceList: [],
  unapprovedConferenceListPending: true,
};

export const conferenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_CONFERENCE_LIST:
      return {
        ...state,
        conferenceList: [...action.payload],
        conferenceListPending: false,
      };
    case ACTION_TYPES.APPROVED_CONFERENCE_LIST:
      return {
        ...state,
        approvedConferenceList: [...action.payload],
        approvedConferenceListPending: false,
      };
    case ACTION_TYPES.UNAPPROVED_CONFERENCE_LIST:
      return {
        ...state,
        unapprovedConferenceList: [...action.payload],
        unapprovedConferenceListPending: false,
      };
    case ACTION_TYPES.APPROVE_CONFERENCE_ADMIN:
      return {
        ...state,
        conferenceList: state.conferenceList.map((x) =>
          x._id === action.payload._id ? action.payload : x
        ),
      };
    case ACTION_TYPES.UPDATE_CONFERENCE:
      return {
        ...state,
        conferenceList: state.conferenceList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };
    case ACTION_TYPES.ADD_CONFERENCE:
      return {
        ...state,
        conferenceList: [...state.conferenceList, action.payload],
      };
    default:
      return state;
  }
};
