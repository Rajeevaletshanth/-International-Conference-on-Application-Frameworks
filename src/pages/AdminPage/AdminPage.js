import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import AdminDashboard from "../../modules/AdminPageModules/AdminDashboardModule/AdminDashboard";
import PendingEditorContent from "../../modules/AdminPageModules/PendingEditorContentModule/PendingEditorContent";
import PendingEditorTemplates from "../../modules/AdminPageModules/PendingEditorTemplatesModule/PendingEditorTemplates";
export class AdminPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AdminDashboard />
        <PendingEditorContent />
        <PendingEditorTemplates />
        <Footer />
      </div>
    );
  }
}

export default AdminPage;
