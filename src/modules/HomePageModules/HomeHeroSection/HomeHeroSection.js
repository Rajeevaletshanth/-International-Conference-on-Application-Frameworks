import React, { Component } from "react";
import Navbar from "../../../common/Navbar/Navbar";
import HomePageConferenceDetail from "../HomePageConferenceDetail/HomePageConferenceDetail";
import "./HomeHeroSection.css";

export class HomeHeroSection extends Component {
  render() {
    return (
      <div className="HomeHeroDiv">
        <Navbar />
        <HomePageConferenceDetail />
      </div>
    );
  }
}

export default HomeHeroSection;
