import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;


const config = {
  headers: authHeader(),
};

const workshopApi = {
  auth() {
    return {
      getApprovedWorkshops: () =>
        axios.get(baseUrl + "/api/Workshops/approved"),
      getUnapprovedWorkshops: () =>
          axios.get(baseUrl + "/api/Workshops/unapproved",config),
      ApproveWorkshops: (Workshops) =>
          axios.put(baseUrl + "/api/Workshops/approveWorkshop",Workshops, config),
    };
  },
};
export default workshopApi;
