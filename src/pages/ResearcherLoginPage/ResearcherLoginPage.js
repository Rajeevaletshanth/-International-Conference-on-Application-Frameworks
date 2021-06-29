import React, { Component } from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';
import ResearcherLogin from '../../modules/ResearcherLoginModules/ResearcherLogin';

export class ResearcherLoginPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ResearcherLogin />
        <Footer />
      </div>
    );
  }
}

export default ResearcherLoginPage;
