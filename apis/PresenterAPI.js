import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const authPresenterApi = {
  auth() {
    return {
      register: (newPresenter) =>
        axios.post(baseUrl + "/api/authPresenter/register", newPresenter),
      login: (loginPresenter) =>
        axios.post(baseUrl + "/api/authPresenter/login", loginPresenter),
      getAllPresenters: () =>
        axios.get(baseUrl + "/api/authPresenter/all", config),
    };
  },
};
export default authPresenterApi;
