import attendeeAPI from "../apis/AttendeeAPI";

export const ACTION_TYPES = {
  ATTENDEE_LIST: "ATTENDEE_LIST",
};

export const fetchAllAttendees = () => (dispatch) => {
  attendeeAPI
    .auth()
    .getAllAttendees()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ATTENDEE_LIST,
        payload: response.data,
      });
    });
};
