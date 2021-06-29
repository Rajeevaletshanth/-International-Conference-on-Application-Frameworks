import templateApi from "../apis/TemplateAPI";

export const ACTION_TYPES = {
  ADD_TEMPLATE: "ADD_TEMPLATE",
  GET_ALL_TEMPLATES: "GET_ALL_TEMPLATES",
  DELETE_TEMPLATE: "DELETE_TEMPLATE",
  GET_ALL_APPROVED_TEMPLATE_LIST: "GET_ALL_APPROVED_TEMPLATE_LIST",
  APPROVED_TEMPLATE: "APPROVED_TEMPLATE",
};

export const addTemplate = (data, OnSuccess, OnFailure) => (dispatch) => {
  console.log(data);
  templateApi
    .auth()
    .addTemplate(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_TEMPLATE,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const viewTemplate = () => (dispatch) => {
  templateApi
    .auth()
    .viewTemplate()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_TEMPLATES,
        payload: response.data,
      });
    });
};

export const deleteTemplate = (id) => (dispatch) => {
  templateApi
    .auth()
    .deleteTemplate(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE_TEMPLATE,
        payload: { id },
      });
    })
    .catch(() => {});
};

export const viewTemplateApproved = () => (dispatch) => {
  templateApi
    .auth()
    .viewTemplateApproved()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_APPROVED_TEMPLATE_LIST,
        payload: response.data,
      });
    });
};

export const approveTemplate = (id, approveObj) => (dispatch) => {
  templateApi
    .auth()
    .approveTemplate(id, approveObj)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.APPROVED_TEMPLATE,
        payload: response.data,
      });
    });
};
