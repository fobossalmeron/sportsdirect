import React, { Component } from "react";
import Nav from "./Nav";
import HomeSection from "./presentational/HomeSection";
import BackgroundSection from "./presentational/BackgroundSection";
import PlatformSection from "./presentational/PlatformSection";
import BenefitsSection from "./presentational/BenefitsSection";
import TrustedSection from "./presentational/TrustedSection";
import EngageSection from "./presentational/EngageSection";
import scrollToComponent from "react-scroll-to-component";
import SportsDirectIcon from "./../../assets/img/layout/sportsDirect.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOn: false,
      modalOpen: false,
      maintenance: false
    };
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOn: !this.state.menuOn });
  }

  hideNav() {
    this.setState({ menuOn: false });
  }

  initScrollMagic() {
    const script = document.createElement("script");
    script.src = "assets/js/scrollmagic.js";
    script.async = true;
    document.body.appendChild(script);
  }

  quitMaintenance() {
    this.setState({ maintenance: false });
    this.initScrollMagic();
  }

  componentDidMount() {
    if (this.state.maintenance == false) {
      this.initScrollMagic();
    }
  }

  render() {
    var maintenanceScreen = (
      <div className="loading">
        <SportsDirectIcon/>
        <h2>website under construction</h2>
        <button onClick={this.quitMaintenance}>quit</button>
      </div>
    );
    var app = (
      <div>
        <Nav
          toggleMenu={this.toggleMenu.bind(this)}
          hideNav={this.hideNav.bind(this)}
          menuOn={this.state.menuOn}
          closeModal={this.closeModal.bind(this)}
          scrollToHome={() =>
            scrollToComponent(this.Home, { offset: 0, align: "top" })
          }
          scrollToBackground={() =>
            scrollToComponent(this.Background, { offset: -45, align: "top" })
          }
          scrollToPlatform={() =>
            scrollToComponent(this.Platform, { offset: -45, align: "top" })
          }
          scrollToBenefits={() =>
            scrollToComponent(this.Benefits, { offset: -45, align: "top" })
          }
          scrollToTrusted={() =>
            scrollToComponent(this.Trusted, { offset: -45, align: "top" })
          }
          scrollToEngage={() =>
            scrollToComponent(this.Engage, { offset: -45, align: "top" })
          }
        />
        <HomeSection
          ref={section => {
            this.Home = section;
          }}
        />
        <BackgroundSection
          ref={section => {
            this.Background = section;
          }}
        />
        <PlatformSection
          ref={section => {
            this.Platform = section;
          }}
        />
        <BenefitsSection
          ref={section => {
            this.Benefits = section;
          }}
        />
                <TrustedSection
          ref={section => {
            this.Trusted = section;
          }}
        />
        <EngageSection
          ref={section => {
            this.Engage = section;
          }}
        />
      </div>
    );
    var doRenderApp = this.state.maintenance ? maintenanceScreen : app;
    return doRenderApp;
  }
}

export default App;
