import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const authReviewerApi = {
    auth() {
        return {
            register: (newReviewer) => axios.post(baseUrl + "/api/authReviewer/register", newReviewer),
            login: (loginReviewer) => axios.post(baseUrl + "/api/authReviewer", loginReviewer),
            getAllEditors: () => axios.get(baseUrl + "/api/authReviewer/all")
        };
    },
};
export default authReviewerApi;
