import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";
import AdminResearchers from "../../modules/AdminPageModules/AdminResearchersModule/AdminResearchers";

export class AdminResearcherPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AdminResearchers />
        <Footer />
      </div>
    );
  }
}

export default AdminResearcherPage;
