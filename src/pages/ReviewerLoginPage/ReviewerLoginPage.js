import React, { Component } from 'react';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';
import ReviewerLogin from '../../modules/ReviewerLoginModules/ReviewerLogin';

export class ReviewerLoginPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ReviewerLogin />
        <Footer />
      </div>
    );
  }
}

export default ReviewerLoginPage;
