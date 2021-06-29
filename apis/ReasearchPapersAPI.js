import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
    headers: authHeader(),
};

const reasearchPapersApi = {
    auth() {
        return {
            getApprovedReasearchPapers: () =>
                axios.get(baseUrl + "/api/ResearchPapers/approved"),
            getUnapprovedReasearchPapers: () =>
                axios.get(baseUrl + "/api/ResearchPapers/unapproved",config),
            ApproveReasearchPapers: (ReasearchPaper) =>
                axios.put(baseUrl + "/api/ResearchPapers/approvaldecision",ReasearchPaper, config),
        };
    },
};
export default reasearchPapersApi;
