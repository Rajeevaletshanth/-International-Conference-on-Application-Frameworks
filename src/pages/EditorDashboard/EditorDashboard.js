import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";
import Editor from "../../modules/EditorDashboardModules/Editor";

export class EditorDashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Editor />
        <Footer />
      </div>
    );
  }
}

export default EditorDashboard;
