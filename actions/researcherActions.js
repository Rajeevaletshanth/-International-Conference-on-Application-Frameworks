import reasearcherAPI from "../apis/ReasearcherAPI";

export const ACTION_TYPES = {
  RESEARCHER_LIST: "RESEARCHER_LIST",
    GET_SPECIFIC_RESEARCHER_DETAILS: "GET_SPECIFIC_RESEARCHER_DETAILS",
    APPROVE_REASEARCHER_PAYMENT: "APPROVE_REASEARCHER_PAYMENT",

};

export const fetchAllResearchers = () => (dispatch) => {
  reasearcherAPI
    .auth()
    .getAllResearches()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.RESEARCHER_LIST,
        payload: response.data,
      });
    });
};

export const fetchSpecificResearchers = () => (dispatch) => {
    reasearcherAPI
        .auth()
        .getSpecificResearches()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.GET_SPECIFIC_RESEARCHER_DETAILS,
                payload: response.data,
            });
        });
};

export const approveReasearcherPayment = (paymentToBeApproved) => (dispatch) => {
    console.log(paymentToBeApproved)
    reasearcherAPI
        .auth()
        .approveReasearcherPayment(paymentToBeApproved)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.APPROVE_REASEARCHER_PAYMENT,
                payload: response.data,
            });
        });
};