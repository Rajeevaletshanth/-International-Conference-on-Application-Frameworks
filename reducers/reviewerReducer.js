import { ACTION_TYPES } from "../actions/reviewerActions";

const initialState = {
    reviewerList: [],
    reviewerListPending: true,
};

export const reviewerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.REVIEWER_LIST:
            return {
                ...state,
                reviewerList: [...action.payload],
                reviewerListPending: false,
            };
        case ACTION_TYPES.ADD_REVIEWER:
            return {
                ...state,
                reviewerList: [...state.reviewerList, action.payload],
            };
        default:
            return state;
    }
};
