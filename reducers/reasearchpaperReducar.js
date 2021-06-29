import { ACTION_TYPES } from "../actions/reasearchpaperActions";

const initialState = {
    approvedReasearchPaperList: [],
    unapprovedReasearchPaperList: [],
    approvedReasearchPaperListPending: true,
    unapprovedReasearchPaperListPending: true,

};

export const reasearchpaperReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_APPROVED_REASEARCHPAPER_LIST:
            return {
                ...state,
                approvedReasearchPaperList: [...action.payload],
                approvedReasearchPaperListPending: false,
            };
        case ACTION_TYPES.GET_UNAPPROVED_REASEARCHPAPER_LIST:
            return {
                ...state,
                unapprovedReasearchPaperList: [...action.payload],
                unapprovedReasearchPaperListPending: false,
            };
        case ACTION_TYPES.APPROVE_REASEARCHPAPER:
            return {
                ...state,
                approvedReasearchPaperList: [...state.approvedReasearchPaperList, action.payload],
                unapprovedReasearchPaperList: state.unapprovedReasearchPaperList.filter(
                    (x) => x._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
};
