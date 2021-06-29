import conferenceDetailsApi from "../apis/ConferenceAPI";

export const ACTION_TYPES = {
  FETCH_ALL_CONFERENCE_LIST: "FETCH_ALL_CONFERENCE_LIST",
  APPROVED_CONFERENCE_LIST: "APPROVED_CONFERENCE_LIST",
  UNAPPROVED_CONFERENCE_LIST: "UNAPPROVED_CONFERENCE_LIST",
  ADD_CONFERENCE: "ADD_CONFERENCE",
  UPDATE_CONFERENCE: "UPDATE_CONFERENCE",
  APPROVE_CONFERENCE_ADMIN: "APPROVE_CONFERENCE_ADMIN",
};

export const fetchAllConferenceList = () => (dispatch) => {
  conferenceDetailsApi
    .conference()
    .getAllConferenceDetails()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_CONFERENCE_LIST,
        payload: response.data,
      });
    });
};

export const fetchAllApprovedConferenceList = () => (dispatch) => {
  conferenceDetailsApi
    .conference()
    .getApprovedConferenceDetails()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.APPROVED_CONFERENCE_LIST,
        payload: response.data,
      });
    });
};

export const fetchAllUnpprovedConferenceList = () => (dispatch) => {
  conferenceDetailsApi
    .conference()
    .getUnapprovedConferenceDetails()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.UNAPPROVED_CONFERENCE_LIST,
        payload: response.data,
      });
    });
};

export const addConferenceDetails =
  (data, OnSuccess, OnFailure) => (dispatch) => {
    conferenceDetailsApi
      .conference()
      .addConferenceDetails(data)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.ADD_CONFERENCE,
          payload: response.data,
        });
        OnSuccess();
      })
      .catch(() => {
        OnFailure();
      });
  };

export const updateConference =
  (id, data, OnSuccess, OnFailure) => (dispatch) => {
    conferenceDetailsApi
      .conference()
      .updateConferenceDetailsByEditor(id, data)
      .then(() => {
        dispatch({
          type: ACTION_TYPES.UPDATE_CONFERENCE,
          payload: { ...data },
        });
        OnSuccess();
      })
      .catch(() => {
        OnFailure();
      });
  };

export const approveConferenceDetailsByAdmin =
  (id, data, OnSuccess, OnFailure) => (dispatch) => {
    console.log(id, data);
    conferenceDetailsApi
      .conference()
      .approveConferenceDetailsByAdmin(id, data)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.APPROVE_CONFERENCE_ADMIN,
          payload: { ...response.data },
        });
        OnSuccess();
      })
      .catch(() => {
        OnFailure();
      });
  };
