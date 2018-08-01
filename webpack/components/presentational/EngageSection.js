import React, { Component } from "react";
import ContactForm from "./../ContactForm";
import SportsDirect from "./../../../assets/img/layout/sportsDirect.svg";
import LocationMap from "./../../../assets/img/layout/locationMap.svg";
import InstagramIcon from "./../../../assets/img/social/instagram.svg";
import FacebookIcon from "./../../../assets/img/social/facebook.svg";
import VimeoIcon from "./../../../assets/img/social/vimeo.svg";
import YouTubeIcon from "./../../../assets/img/social/youtube.svg";
import LinkedInIcon from "./../../../assets/img/social/linkedin.svg";
import TwitterIcon from "./../../../assets/img/social/twitter.svg";
import ChallengesWelcome from "./../../../assets/img/layout/challengesWelcome.svg";

class EngageSection extends Component {
  render() {
    return (
      <section id="contact">
        <SportsDirect className="engageLogo" />
        <h2><ChallengesWelcome/></h2>
        <div className="locationContact">
          <ul className="chooseList">
          <li>las vegas</li>
            <li>mexico city</li>
            <li>chicago</li>
            <li>toronto</li>
            <li>copenhagen</li>
            <li>singapore</li>
          </ul>
        </div>
        <div className="locationContact">
          <p>universal number: +1-702 802 0200</p>
          <p>
            <a href="mailto:success@designsuccess.com">
              success@designsuccess.com
            </a>
          </p>
        </div>
        <ContactForm />
        <LocationMap className="locationMap" />
        <footer>
          <div className="socialList">
            <FacebookIcon className="socialIcon" />
            <VimeoIcon className="socialIcon" />
            <YouTubeIcon className="socialIcon" />
            <InstagramIcon className="socialIcon" />
            <LinkedInIcon className="socialIcon" />
            <TwitterIcon className="socialIcon" />
          </div>
          <p>
            © design success international ds worldwide consulting llc. all
            rights reserved. <a href="https://designsuccess.com/privacy/">privacy of use</a> | <a href="https://designsuccess.com/terms/">terms & conditions</a>
          </p>
        </footer>
      </section>
    );
  }
}

export default EngageSection;
