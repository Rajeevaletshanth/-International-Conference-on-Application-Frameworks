import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";
import AdminEditorComponent from "../../modules/AdminPageModules/AdminEditorModule/AdminEditorComponent";

export class AdminEditorPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AdminEditorComponent />
        <Footer />
      </div>
    );
  }
}

export default AdminEditorPage;
