import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import AdminLogin from "../../modules/AdminLoginModules/AdminLogin";

export class AdminLoginPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AdminLogin />
        <Footer />
      </div>
    );
  }
}

export default AdminLoginPage;
