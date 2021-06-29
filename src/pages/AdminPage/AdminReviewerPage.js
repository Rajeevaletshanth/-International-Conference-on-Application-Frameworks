import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";
import AdminReviewerComponent from "../../modules/AdminPageModules/AdminReviewerModule/AdminReviewerComponent";

export class AdminReviewerPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AdminReviewerComponent />
        <Footer />
      </div>
    );
  }
}

export default AdminReviewerPage;
