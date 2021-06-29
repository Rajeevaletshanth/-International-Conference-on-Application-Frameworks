import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import AdminAttendee from "../../modules/AdminPageModules/AdminAttendeeModule/AdminAttendee";
import Footer from "../../common/Footer/Footer";

export class AdminAttendeePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AdminAttendee />
        <Footer />
      </div>
    );
  }
}

export default AdminAttendeePage;
