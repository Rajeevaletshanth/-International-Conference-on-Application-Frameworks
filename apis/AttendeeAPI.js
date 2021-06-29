import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const attendeeApi = {
  auth() {
    return {
      register: (newAttendee) =>
        axios.post(baseUrl + "/api/authAttendee/register", newAttendee),
      login: (loginAttendee) =>
        axios.post(baseUrl + "/api/authAttendee", loginAttendee),
      getAllAttendees: () =>
        axios.get(baseUrl + "/api/authAttendee/all", config),
    };
  },
};

export default attendeeApi;
