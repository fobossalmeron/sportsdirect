import React, { Component } from "react";
import HamburgerIcon from "./../../assets/img/layout/hamburger.svg";
import DesignSuccess from "./../../assets/img/layout/designSuccess.svg";
import SportsDirect from "./../../assets/img/layout/sportsDirect.svg";
import DesignSuccessMobile from "./../../assets/img/layout/designSuccessMobile.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false,
      menuToggled: false
    };
    this.navScrollMagic = this.navScrollMagic.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.doHideNav = this.doHideNav.bind(this);
  }

  toggleMenu() {
    this.setState({ menuToggled: !this.state.menuToggled });
    document.body.classList.toggle("restrictBody");
    document.addEventListener("touchstart", this.touchstart);
    document.addEventListener("touchmove", this.touchmove);
    function touchstart(e) {
      e.preventDefault();
    }
    function touchmove(e) {
      e.preventDefault();
    }
    this.props.closeModal();
  }

  doHideNav() {
    this.setState({ menuToggled: false });
    document.body.classList.remove("restrictBody");
    document.removeEventListener("touchstart", this.touchstart);
    document.removeEventListener("touchmove", this.touchmove);
    this.props.closeModal();
  }

  componentDidMount() {
    if (typeof this.props.relativePath !== "undefined") {
      this.setState({ relative: true }, () => this.navScrollMagic());
    } else {
      this.navScrollMagic();
    }
  }

  doScrollToHome() {
    this.props.closeModal();
    if (typeof this.props.scrollToHome !== "undefined") {
      event.preventDefault();
      this.props.scrollToHome();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#home");
      }
    }
  }

  doScrollToBackground() {
    this.props.closeModal();
    if (typeof this.props.scrollToBackground !== "undefined") {
      event.preventDefault();
      this.props.scrollToBackground();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#background");
      }
    }
  }

  doScrollToPlatform() {
    this.props.closeModal();

    if (typeof this.props.scrollToPlatform !== "undefined") {
      event.preventDefault();
      this.props.scrollToPlatform();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#platform");
      }
    }
  }

  doScrollToBenefits() {
    this.props.closeModal();
    if (typeof this.props.scrollToBenefits !== "undefined") {
      event.preventDefault();
      this.props.scrollToBenefits();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#benefits");
      }
    }
  }

  doScrollToTrusted() {
    this.props.closeModal();
    if (typeof this.props.scrollToTrusted !== "undefined") {
      event.preventDefault();
      this.props.scrollToTrusted();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#trustedby");
      }
    }
  }

  doScrollToEngage() {
    this.props.closeModal();

    if (typeof this.props.scrollToEngage !== "undefined") {
      event.preventDefault();
      this.props.scrollToEngage();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#contact");
      }
    }
  }

  navScrollMagic() {
    var controllerX = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 0 }
    });
    var logoScene = new ScrollMagic.Scene({
      triggerElement: "body",
      offset: 20
    })
      .setClassToggle("header", "headerScroll")
      .addTo(controllerX);
  }

  render() {
    var baseUrl = this.state.relative ? this.props.relativePath : "";
    var active = this.state.menuToggled ? "active" : "";

    return (
      <header>
        <div className={`headerWrapper ${active}`}>
          <a href={"https://designsuccess.com"} className="hideText">
            <DesignSuccess className="designSuccessLogo" />
            <DesignSuccessMobile className="designSuccessLogoMobile" />
            design:success
          </a>
          <a
            onClick={() => {
              this.doHideNav();
              this.doScrollToHome(event);
            }}
            href={baseUrl + "#home"}
            className="hideText a"
          >
            <SportsDirect className="websiteLogo" id="websiteLogo" />
            sports:direct
          </a>
          <HamburgerIcon
            id="hamburger"
            className={active}
            onClick={() => this.toggleMenu()}
          />
          <nav className={active}>
            <ul>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToBackground();
                }}
              >
                <a href={baseUrl + "#background"}>background</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToPlatform();
                }}
              >
                <a href={baseUrl + "#platform"}>platform</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToBenefits();
                }}
              >
                <a href={baseUrl + "#benefits"}>benefits</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToTrusted();
                }}
              >
                <a href={baseUrl + "#trustedby"}>trusted by</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToEngage();
                }}
              >
                <a href={baseUrl + "#contact"}>contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
