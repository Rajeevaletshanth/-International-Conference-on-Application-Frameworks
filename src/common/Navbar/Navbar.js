import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/authActions";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="/">
            <span
              style={{ fontSize: "30px", fontWeight: "bold", color: "#ffffff" }}
            >
            <span style={{ color: "#ffffff" }}>ConfM Tool</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "#ffffff" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse navLinkTab"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto navLinkTab">
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="/"
                  style={{ color: "#ffffff" }}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="#about"
                  style={{ color: "#ffffff" }}
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="#news"
                  style={{ color: "#ffffff" }}
                >
                  NEWS
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="/Keynotes"
                  style={{ color: "#ffffff" }}
                >
                  KEYNOTES
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="/Papers"
                  style={{ color: "#ffffff" }}
                >
                  PAPERS
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab js-scroll-trigger"
                  href="/templates"
                  style={{ color: "#ffffff" }}
                >
                  TEMPLATES
                </a>
              </li>
            </ul>

            {this.props.user ? (
              <ul className="navbar-nav mr-auto navLinkTab mr-sm-5 navLinkLeft">
                {this.props.user.role == "attendee" ? (
                  <li className="nav-item active">
                    <a
                      className="nav-link navLinkTab js-scroll-trigger"
                      href="/"
                      style={{ color: "#ffffff" }}
                    >
                      {this.props.user.email}
                    </a>
                  </li>
                ) : this.props.user.role == "admin" ? (
                  <li className="nav-item active">
                    <a
                      className="nav-link navLinkTab js-scroll-trigger"
                      href="/admin"
                      style={{ color: "#ffffff" }}
                    >
                      {this.props.user.email}
                    </a>
                  </li>
                ) : this.props.user.role == "editor" ? (
                  <li className="nav-item active">
                    <a
                      className="nav-link navLinkTab js-scroll-trigger"
                      href="/editordashboard"
                      style={{ color: "#ffffff" }}
                    >
                      {this.props.user.email}
                    </a>
                  </li>
                ) : this.props.user.role == "reviewer" ? (
                  <li className="nav-item active">
                    <a
                      className="nav-link navLinkTab js-scroll-trigger"
                      href="/reviewerDashboard"
                      style={{ color: "#ffffff" }}
                    >
                      {this.props.user.email}
                    </a>
                  </li>
                ) : this.props.user.role == "presenter" ? (
                  <li className="nav-item active">
                    <a
                      className="nav-link navLinkTab js-scroll-trigger"
                      href="/"
                      style={{ color: "#ffffff" }}
                    >
                      {this.props.user.email}
                    </a>
                  </li>
                ) : this.props.user.role == "researcher" ? (
                  <li className="nav-item active">
                    <a
                      className="nav-link navLinkTab js-scroll-trigger"
                      href="/"
                      style={{ color: "#ffffff" }}
                    >
                      {this.props.user.email}
                    </a>
                  </li>
                ) : (
                  ""
                )}
                <li className="nav-item active" style={{ cursor: "pointer" }}>
                  <a
                    className="nav-link navLinkTab"
                    onClick={() => {
                      this.props.logout();
                    }}
                    style={{ color: "#ffffff" }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav mr-auto navLinkTab mr-sm-5 navLinkLeft">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ color: "#ffffff" }}
                  >
                    LOGIN
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/attendeelogin">
                      ATTENDEE
                    </a>
                    <a class="dropdown-item" href="/researcherlogin">
                      RESEARCHER
                    </a>
                    <a class="dropdown-item" href="/presenterlogin">
                      PRESENTER
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ color: "#ffffff" }}
                  >
                    REGISTER
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/AttendeeRegistration">
                      ATTENDEE
                    </a>
                    <a class="dropdown-item" href="/ReasearcherRegistration">
                      RESEARCHER
                    </a>
                    <a class="dropdown-item" href="/PresenterRegistration">
                      PRESENTER
                    </a>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapActionToProps = {
  logout: actions.logout,
};

export default connect(mapStateToProps, mapActionToProps)(Navbar);
