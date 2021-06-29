import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import RegPresenter from '../pages/RegPresenter/RegPresenter';
import RegAttendee from '../pages/RegAttendee/RegAttendee';
import RegRearseacher from '../pages/RegReasearcher/RegRearseacher';
import KeynoteSpeakerPage from '../pages/KeynoteSpeakerPage/KeynoteSpeakerPage';
import TemplatePage from '../pages/TemplatePage/TemplatePage';
import AdminPage from '../pages/AdminPage/AdminPage';
import AdminEditorPage from '../pages/AdminPage/AdminEditorPage';
import AdminReviewerPage from '../pages/AdminPage/AdminReviewerPage';
import AdminAttendeePage from '../pages/AdminPage/AdminAttendeePage';
import AdminResearcherPage from '../pages/AdminPage/AdminResearcherPage';
import AdminPresenterPage from '../pages/AdminPage/AdminPresenterPage';
import AdminConferenceDetailsPage from '../pages/AdminPage/AdminConferenceDetailsPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ReasearchPapersPage from '../pages/ReasearchPapersPage/ReasearchPapersPage';
import ReviewerDashboard from '../pages/ReviewerDashboard/ReviewerDashboard';
import EditorDashboard from '../pages/EditorDashboard/EditorDashboard';
import RegAdmin from '../pages/RegAdmin/RegAdmin';
import AdminLoginPage from '../pages/AdminLoginPage/AdminLoginPage';
import ReviewerLoginPage from '../pages/ReviewerLoginPage/ReviewerLoginPage';
import ResearcherLoginPage from '../pages/ResearcherLoginPage/ResearcherLoginPage';
import PresenterLoginPage from '../pages/PresenterLoginPage/PresenterLoginPage';
import AttendeeLoginPage from "../pages/AttendeeLoginPage/AttendeeLoginPage";
import EditorLoginPage from "../pages/EditorLoginPage/EditorLoginPage";

class RouteComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/PresenterRegistration' exact component={RegPresenter} />
          <Route path='/ReasearcherRegistration' exact component={RegRearseacher}/>
          <Route path='/AttendeeRegistration' exact component={RegAttendee} />
          <Route path='/Keynotes' exact component={KeynoteSpeakerPage} />
          <Route path='/templates' exact component={TemplatePage} />
          <Route path='/admin' exact component={AdminPage} />
          <Route path='/admineditor' exact component={AdminEditorPage} />
          <Route path='/adminreviewer' exact component={AdminReviewerPage} />
          <Route path='/adminattendee' exact component={AdminAttendeePage} />
          <Route path='/adminresearcher' exact component={AdminResearcherPage}/>
          <Route path='/adminpresenter' exact component={AdminPresenterPage} />
          <Route path='/adminconference' exact component={AdminConferenceDetailsPage}/>
          <Route path='/Papers' exact component={ReasearchPapersPage} />
          <Route path='/Profile' exact component={ProfilePage} />
          <Route path='/ReviewerDashboard' exact component={ReviewerDashboard}/>
          <Route path='/editordashboard' exact component={EditorDashboard} />
          <Route path='/ReviewerDashboard' exact component={ReviewerDashboard}/>
          <Route path='/adminreg' exact component={RegAdmin} />
          <Route path='/adminlogin' exact component={AdminLoginPage} />
          <Route path='/reviewerlogin' exact component={ReviewerLoginPage} />
          <Route path='/researcherlogin' exact component={ResearcherLoginPage}/>
          <Route path='/presenterlogin' exact component={PresenterLoginPage} />
          <Route path='/attendeelogin' exact component={AttendeeLoginPage} />
          <Route path='/editorlogin' exact component={EditorLoginPage} />
          <Route path='/attendeeRegister' exact component={RegAttendee} />
        </Switch>
      </Router>
    );
  }
}

export default RouteComponent;
