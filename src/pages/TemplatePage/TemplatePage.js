import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";
import Templates from "../../modules/TemplatePageModules/Templates/Templates";

export class TemplatePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Templates />
        <Footer />
      </div>
    );
  }
}

export default TemplatePage;
