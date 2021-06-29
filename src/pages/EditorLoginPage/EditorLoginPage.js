import React, { Component } from 'react';
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import EditorLogin from "../../modules/EditorLoginModules/EditorLogin"

class EditorLoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <EditorLogin />
                <Footer />
            </div>
        );
    }
}

export default EditorLoginPage;