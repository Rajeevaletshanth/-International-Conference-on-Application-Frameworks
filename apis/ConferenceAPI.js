import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const ConferenceDetailsApi = {
  conference() {
    return {
      getAllConferenceDetails: () => axios.get(baseUrl + "/api/conference"),
      getApprovedConferenceDetails: () =>
        axios.get(baseUrl + "/api/conference/approved"),
      getUnapprovedConferenceDetails: () =>
        axios.get(baseUrl + "/api/conference/unapproved"),
      addConferenceDetails: (newConference) =>
        axios.post(baseUrl + "/api/conference", newConference, config),
      approveConferenceDetailsByAdmin: (id, approveConference) =>
        axios.put(
          baseUrl + "/api/conference/approveconference/" + id,
          approveConference,
          config
        ),
      updateConferenceDetailsByEditor: (id, updateConference) =>
        axios.put(baseUrl + "/api/conference/" + id, updateConference, config),
    };
  },
};
export default ConferenceDetailsApi;
