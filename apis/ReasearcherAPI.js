import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;


const config = {
  headers: authHeader(),
};

const authReasearcherApi = {
  auth() {
    return {
      register: (newReasearcher) =>
        axios.post(baseUrl + "/api/authResearcher/register", newReasearcher),
      login: (loginReasearcher) =>
        axios.post(baseUrl + "/api/authResearcher", loginReasearcher),
      getAllResearches: () =>
        axios.get(baseUrl + "/api/authResearcher/all", config),
      getSpecificResearches: () =>
          axios.get(baseUrl + "/api/authResearcher", config),
      approveReasearcherPayment: (paymentToBeApproved) =>
          axios.put(baseUrl + "/api/authResearcher/approvePayment", config),

  };
  },
};
export default authReasearcherApi;
