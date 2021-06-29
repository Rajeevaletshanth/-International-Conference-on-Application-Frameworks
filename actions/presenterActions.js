import presenterAPI from "../apis/PresenterAPI";

export const ACTION_TYPES = {
  PRESENTER_LIST: "PRESENTER_LIST",
};

export const fetchAllPresenters = () => (dispatch) => {
  presenterAPI
    .auth()
    .getAllPresenters()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.PRESENTER_LIST,
        payload: response.data,
      });
    });
};
