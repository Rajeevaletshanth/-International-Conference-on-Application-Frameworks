import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { editorReducer } from "./editorReducer";
import { reviewerReducer } from "./reviewerReducer";
import { workshopReducer } from "./workshopReducer";
import { conferenceReducer } from "./conferenceReducer";
import { attendeeReducer } from "./attendeeReducer";
import { templateReducer } from "./templateReducer";
import { presenterReducer } from "./presenterReducer";
import { researcherReducer } from "./researcherReducer";
import { reasearchpaperReducer } from "./reasearchpaperReducar";
import { latestNewsReducer } from "./latestNewsReducer";

export const reducers = combineReducers({
  authReducer,
  editorReducer,
  reviewerReducer,
  workshopReducer,
  conferenceReducer,
  attendeeReducer,
  templateReducer,
  presenterReducer,
  researcherReducer,
  reasearchpaperReducer,
  latestNewsReducer,
});
