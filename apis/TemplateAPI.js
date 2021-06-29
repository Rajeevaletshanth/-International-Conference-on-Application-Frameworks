import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const templateApi = {
  auth() {
    return {
      addTemplate: (newTemplate) =>
        axios.post(baseUrl + "/api/Templates", newTemplate, config),
      viewTemplate: () => axios.get(baseUrl + "/api/Templates"),
      deleteTemplate: (id) =>
        axios.delete(baseUrl + "/api/Templates/" + id, config),
      approveTemplate: (id, approveObj) =>
        axios.put(baseUrl + "/api/Templates/approve/" + id, approveObj, config),
      viewTemplateApproved: () =>
        axios.get(baseUrl + "/api/Templates/approved"),
    };
  },
};

export default templateApi;
