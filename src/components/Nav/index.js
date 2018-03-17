import React, { Component } from "react";
import Link from 'gatsby-link';
import ReactSVG from 'react-svg';
import { withPrefix } from 'gatsby-link';
//import ScrollAnimation from 'react-animate-on-scroll';
//import TweenMax from "gsap";
//import ScrollMagic from "scrollmagic";

// var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

// Nav
// var instaScene = new ScrollMagic.Scene({triggerElement: "#video", offset: 10})
//        .setClassToggle( "#sportsNavLogo", "reveal")
//        .addTo(controller);
class Nav extends Component {

  render() {
    return(
      <header>
        <a className="hideText" href="http://designsuccess.com">
        <ReactSVG wrapperClassName="designSuccessLogo" path={withPrefix('/svg/layout/designSuccess.svg')}/>
          design:success
        </a>
        <a href="/" className="hideText">
          <ReactSVG wrapperClassName="sportsNavLogo" id="sportsNavLogo" path={withPrefix('/svg/layout/sportsDirect.svg')}/>
          sports:direct
        </a>
        <a href="#background">
          background
        </a>
        <a href="#platform">
          platform
        </a>
        <a href="#benefits">
          benefits
        </a>
        {/*<a href="#trustedby">
          trusted by
    </a>*/}
        <a href="#engage">
          engage
        </a>
      </header>
    );
  }
}

export default Nav
