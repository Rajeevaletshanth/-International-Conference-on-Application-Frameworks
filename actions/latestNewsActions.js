import latestNewsAPI from "../apis/LatestNewsAPI";

export const ACTION_TYPES = {
  ADD_LATEST_NEWS: "ADD_LATEST_NEWS",
  GET_ALL_LATEST_NEWS: "GET_ALL_LATEST_NEWS",
  GET_ALL_APPROVED_NEWS: "GET_ALL_APPROVED_NEWS",
  GET_ALL_UNAPPROVED_NEWS: "GET_ALL_UNAPPROVED_NEWS",
  APPROVE_NEWS: "APPROVE_NEWS",
  DELETE_NEWS: "DELETE_NEWS",
};

export const addLatestNews = (data, OnSuccess, OnFailure) => (dispatch) => {
  latestNewsAPI
    .latestNews()
    .addLatestNews(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_LATEST_NEWS,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const fetchAllLatestNews = () => (dispatch) => {
  latestNewsAPI
    .latestNews()
    .getAllNews()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_LATEST_NEWS,
        payload: response.data,
      });
    })
    .catch(() => {});
};

export const deleteLatestNews = (id) => async (dispatch) => {
  latestNewsAPI.latestNews().deleteLatestNews(id);
  await dispatch({
    type: ACTION_TYPES.DELETE_NEWS,
    payload: id,
  });
};

export const fetchAllApprovedNews = () => (dispatch) => {
  latestNewsAPI
    .latestNews()
    .getAllApprovedNews()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_APPROVED_NEWS,
        payload: response.data,
      });
    })
    .catch(() => {});
};

export const fetchAllUnapprovedNews = () => (dispatch) => {
  latestNewsAPI
    .latestNews()
    .getAllUnapprovedNews()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_UNAPPROVED_NEWS,
        payload: response.data,
      });
    })
    .catch(() => {});
};

export const approveNewsFunction = (id, newsObj) => (dispatch) => {
  latestNewsAPI
    .latestNews()
    .approveNews(id, newsObj)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.APPROVE_NEWS,
        payload: response.data,
      });
    })
    .catch(() => {});
};
