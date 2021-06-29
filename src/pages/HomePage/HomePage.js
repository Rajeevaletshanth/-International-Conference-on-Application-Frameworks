import React, { Component } from "react";
import HomeAboutSection from "../../modules/HomePageModules/HomeAboutSection/HomeAboutSection";
import HomeHeroSection from "../../modules/HomePageModules/HomeHeroSection/HomeHeroSection";
import KeyNoteSpeakers from "../../modules/HomePageModules/KeyNoteSpeakers/KeyNoteSpeakers";
import LatestNews from "../../modules/HomePageModules/LatestNews/LatestNews";
import Footer from "../../common/Footer/Footer";
import GetInTouch from "../../modules/HomePageModules/GetInTouchSection/GetInTouch";
import TimeLineSection from "../../modules/HomePageModules/TimeLineSection/TimeLineSection";

class HomePage extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <HomeHeroSection />
        <section id="about">
          <HomeAboutSection />
        </section>
        <section id="news">
          <LatestNews />
        </section>
        <section id="speakers">
          <KeyNoteSpeakers />
        </section>
        <TimeLineSection />
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
