import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const authAdminApi = {
  auth() {
    return {
      register: (newAdmin) =>
        axios.post(baseUrl + "/api/authadmin/register", newAdmin),
      login: (loginAdmin) => axios.post(baseUrl + "/api/authadmin", loginAdmin),
    };
  },
};
export default authAdminApi;
