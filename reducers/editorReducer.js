import { ACTION_TYPES } from "../actions/editorActions";

const initialState = {
  editorList: [],
  editorListPending: true,
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.EDITOR_LIST:
      return {
        ...state,
        editorList: [...action.payload],
        editorListPending: false,
      };
    case ACTION_TYPES.ADD_EDITOR:
      return {
        ...state,
        editorList: [...state.editorList, action.payload],
      };
    default:
      return state;
  }
};
