import React, { Component } from "react";
import ReactPlayer from "react-player";
import WorldsFirst from "./../../../assets/img/layout/worldsFirst.svg";
import ReduceRiskIcon from "./../../../assets/img/layout/reduceRisk.svg";
import IncreaseRoiIcon from "./../../../assets/img/layout/increaseRoi.svg";
import DeepDataIcon from "./../../../assets/img/layout/deepDataPower.svg";
import TheBackground from "./../../../assets/img/layout/theBackground.svg";

class BackgroundSection extends Component {
  render() {
    return (
      <section id="background">
        <ReactPlayer url="https://vimeo.com/264421949" className="fullVideo" />
        <div id="worldsfirst">
          <h2>
            <WorldsFirst />
          </h2>
          <p>
            360 degree social media data & management platform to coach, grow,
            manage and monitor sports talent<br /> - while getting deeper data.<br />
            <span>Result: Reduce risk and increase ROI</span>
          </p>
          <div className="firstColumned">
            <div className="option">
              <ReduceRiskIcon />
              <p>reduce risk</p>
            </div>
            <div className="option">
              <IncreaseRoiIcon />
              <p>increase ROI</p>
            </div>
            <div className="option">
              <DeepDataIcon />
              <p>deep data power</p>
            </div>
          </div>
        </div>
        <div id="backgroundGrid">
          <h2>
            <TheBackground />
          </h2>
          <div className="backgroundText">
            <p>Social Media is important for brands!</p>
            <p>
              <b>BUT</b> Brands, athletes, agents, clubs, and federations face
              new and increased challenges or dangers because of social media
              speed and transparency.<br />
              What is the true ROI?<br />
              Who is really following on Social Media?<br />
              And how to protect investments?
            </p>
          </div>
          <h3>relax - the world’s first & only solution is here…</h3>
        </div>
      </section>
    );
  }
}

export default BackgroundSection;
