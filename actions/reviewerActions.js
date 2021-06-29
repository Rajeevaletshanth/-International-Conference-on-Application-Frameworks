import reviewerApi from "../apis/ReviewerAPI";

export const ACTION_TYPES = {
    REVIEWER_LIST: "REVIEWER_LIST",
    ADD_REVIEWER: "ADD_REVIEWER",
};

export const fetchAllReviewers = () => (dispatch) => {
    reviewerApi
        .auth()
        .getAllEditors()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.REVIEWER_LIST,
                payload: response.data,
            });
        })
        .catch(() => {});
};

export const reviewerRegister = (data, OnSuccess, OnFailure) => (dispatch) => {
    reviewerApi
        .auth()
        .register(data)
        .then((response) => {
            const newUser = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
            };

            dispatch({
                type: ACTION_TYPES.ADD_REVIEWER,
                payload: newUser,
            });
            OnSuccess();
        })
        .catch(() => {
            OnFailure();
        });
};
