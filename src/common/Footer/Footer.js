import React, { Component } from "react";
import "./Footer.css";
import {AiOutlineCopyrightCircle} from "react-icons/ai";



export default class Footer extends Component {
  render() {
    return (
      <div className="FooterBackground">
        <div className="container-fluid">
          <div className="card cardFooter">
            <div className="heading text-center">
              <div className="head1">Conference Management 2021</div>
              <p className="bdr"></p>
            </div>
            <div className="card-footer row m-0">
              <p>
                {" "}
                <label>
                  {" "}
                  <i className="fas fa-phone fa-rotate-90 text-primary"></i>{" "}
                </label>{" "}
                800-601-0230
              </p>
              <div>
                <p>
                  {" "}
                  <small className="follow-text">
                    FOLLOW US ON SOCIAL MEDIA
                  </small>{" "}
                  <label className="footer-right">
                    {" "}
                    <i className="fab fa-instagram"></i>{" "}
                    <i className="fab fa-facebook-square"></i>{" "}
                    <i className="fab fa-linkedin"></i>{" "}
                    <i className="fab fa-twitter-square"></i>{" "}
                  </label>{" "}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-center">All copyrights <AiOutlineCopyrightCircle color="white" fontSize="1.5em" /> reserved </p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
