import reasearchPapersApi from '../apis/ReasearchPapersAPI';

export const ACTION_TYPES = {
    GET_APPROVED_REASEARCHPAPER_LIST: "GET_APPROVED_REASEARCHPAPER_LIST",
    GET_UNAPPROVED_REASEARCHPAPER_LIST: "GET_UNAPPROVED_REASEARCHPAPER_LIST",
    APPROVE_REASEARCHPAPER:"APPROVE_REASEARCHPAPER",

};

export const fetchAllApprovedReasearchpapers = () => (dispatch) => {
    reasearchPapersApi
        .auth()
        .getApprovedReasearchPapers()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.GET_APPROVED_REASEARCHPAPER_LIST,
                payload: response.data,
            });
        });
};

export const fetchAllUnapprovedReasearchpapers = () => (dispatch) => {
    reasearchPapersApi
        .auth()
        .getUnapprovedReasearchPapers()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.GET_UNAPPROVED_REASEARCHPAPER_LIST,
                payload: response.data,
            });
        });
};

export const approveReasearchPapers = (unapprovedReasearchpaper) => (dispatch) =>{
    reasearchPapersApi
        .auth()
        .ApproveReasearchPapers(unapprovedReasearchpaper)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.APPROVE_REASEARCHPAPER,
                payload: response.data,
            });
        });
}

