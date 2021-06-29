import editorApi from "../apis/EditorAPI";

export const ACTION_TYPES = {
  EDITOR_LIST: "EDITOR_LIST",
  ADD_EDITOR: "ADD_EDITOR",
};

export const fetchAllEditors = () => (dispatch) => {
  editorApi
    .auth()
    .getAllEditors()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.EDITOR_LIST,
        payload: response.data,
      });
    })
    .catch(() => {});
};

export const editorRegister = (data, OnSuccess, OnFailure) => (dispatch) => {
  editorApi
    .auth()
    .register(data)
    .then((response) => {
      const newuser = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };

      dispatch({
        type: ACTION_TYPES.ADD_EDITOR,
        payload: newuser,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

