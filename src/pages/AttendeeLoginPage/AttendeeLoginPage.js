import React, { Component } from 'react';
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import AttendeeLogin from "../../modules/AttendeeLoginModules/AttendeeLogin";

class AttendeeLoginPage extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <AttendeeLogin />
            <Footer />
          </div>
        );
    }
}

export default AttendeeLoginPage;