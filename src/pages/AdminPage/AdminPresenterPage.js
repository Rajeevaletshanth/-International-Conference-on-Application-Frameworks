import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";
import AdminPresenter from "../../modules/AdminPageModules/AdminPresenterModule/AdminPresenter";

export class AdminPresenterPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AdminPresenter />
        <Footer />
      </div>
    );
  }
}

export default AdminPresenterPage;
