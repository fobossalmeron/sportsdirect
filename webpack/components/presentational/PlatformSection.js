import React, { Component } from "react";
import DiagramAnimated from "./../../../assets/img/layout/diagramAnimated.svg";
import InstagramIcon from "./../../../assets/img/social/instagram.svg";
import FacebookIcon from "./../../../assets/img/social/facebook.svg";
import YouTubeIcon from "./../../../assets/img/social/youtube.svg";
import LinkedInIcon from "./../../../assets/img/social/linkedin.svg";
import TwitterIcon from "./../../../assets/img/social/twitter.svg";
import Graph2 from "./../../../assets/img/layout/graph2.svg";
import Graph2mobile from "./../../../assets/img/layout/graph2mobile.svg";
import Platform from "./../Platform/index";

class PlatformSection extends Component {
  render() {
    return (
      <section id="platform">
        <h2>
          #1 propietary<br />platform & solution
        </h2>
        <p>9 cutting-edge tools</p>
        <Platform />
        <div id="deepdata">
          <h2>deep data demand. done.</h2>
          <div className="firstColumned">
            <p>
              Get deep data that no other can deliver with 3D Data Platform:
              Direct Deep Data
            </p>
            <p>
              sports:direct’s proprietary and patent-pending 3D Data Platform
              provide unprecedented deep consumer, engagement and ROI data.
            </p>
            <p>
              End-to-end measurements and capabilities measure Billions of Data
              Points and 100+ Million Physical Locations Worldwide.
            </p>
          </div>
          <div className="secondColumned">
            <DiagramAnimated />

          </div>
          <div className="thirdColumned">
            <h2>tracks:</h2>
            <span>
              1 billion data points<br />
              100+ million locations
            </span>
            <div className="socialInteraction">
              <FacebookIcon />
              <div className="deepOnly" />
              <YouTubeIcon />
              <InstagramIcon />
              <div className="deepOnly" />
              <LinkedInIcon />
              <TwitterIcon />
              <p>*: Deep engagement data only</p>
            </div>
          </div>
        </div>
        <div id="trackingPlatform">
          <h2>3D Data: Deep Tracking Platform</h2>
          <Graph2 className="desktop"/>
          <Graph2mobile className="mobile"/>
        </div>
      </section>
    );
  }
}

export default PlatformSection;
