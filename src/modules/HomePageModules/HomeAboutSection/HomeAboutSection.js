import React, { Component } from "react";
import AboutImg from "url:../../../assets/home/about.svg";
import "./HomeAboutSection.css";

export class HomeAboutSection extends Component {
  render() {
    return (
      <div
        className="pt-4"
        style={{ backgroundColor: "#0d0049", color: "#ffffff" }}
      >
        {/* <div className="container text-center pt-5 pb-5">
          <img
            src={AboutImg}
            className="img-fluid"
            alt="aboutImg"
            style={{ width: "300px" }}
          />
          <h1 className="mt-4">About Our Conference</h1>
          <hr />
          <div className="container">
            <p>
              The 3rd International conference on advancements in computing
              -2021 is organized by the Faculty of Computing of the
              Sri Lanka Institute of Information Technology (SLIIT) as an open
              forum for academics along with industry professionals to present
              the latest findings and research output and practical deployments
              in the Computer Science and Information Technology domains.
              Primary objective of the Conference Management Tool is to uplift the research culture
              and the quality of research done by Sri Lankan researchers
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default HomeAboutSection;
