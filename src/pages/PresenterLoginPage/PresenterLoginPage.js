import React, { Component } from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';
import PresenterLogin from '../../modules/PresenterLoginModules/PresenterLogin';

export class PresenterLoginPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PresenterLogin />
        <Footer />
      </div>
    );
  }
}

export default PresenterLoginPage;
