import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const authEditorApi = {
  auth() {
    return {
      register: (newEditor) =>
        axios.post(baseUrl + "/api/autheditor/register", newEditor),
      login: (loginEditor) =>
        axios.post(baseUrl + "/api/autheditor", loginEditor),
      getAllEditors: () => axios.get(baseUrl + "/api/autheditor/all"),
    };
  },
};
export default authEditorApi;
