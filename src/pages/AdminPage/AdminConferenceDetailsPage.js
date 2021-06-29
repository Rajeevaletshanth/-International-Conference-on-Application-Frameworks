import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import AdminConferenceDetails from "../../modules/AdminPageModules/AdminConferenceDetails/AdminConferenceDetails";

export class AdminConferenceDetailsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AdminConferenceDetails />
        <Footer />
      </div>
    );
  }
}

export default AdminConferenceDetailsPage;
