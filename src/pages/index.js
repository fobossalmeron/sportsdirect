import React, { Component } from "react";
import { withPrefix } from "gatsby-link";
import ReactSVG from "react-svg";
import ReactPlayer from "react-player";
import Platform from "../components/Platform/index";
import ContactForm from "../components/Form/index";
import Objects from "../components/Objects/index";
import VideoPlayer from "../components/VideoPlayer/index";

import ScrollAnim from "rc-scroll-anim";
const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;
//ScrollAnim.scrollScreen.init({ loop: true }, { docHeight: "100%" });

class IndexPage extends Component {
  constructor() {
    super(...arguments);
    ["barAnimate", "onFocus"].forEach(
      method => (this[method] = this[method].bind(this))
    );
    this.state = {
      navOpen: false
    };
  }
  componentDidMount() {
    ScrollAnim.scrollScreen.init({ loop: true });
  }

  onFocus(e) {
    this.dom = e.target;
    this.barAnimate();
  }

  toggleNav(){
    this.setState({
      navOpen: !this.state.navOpen
    })
  }
  closeNav(){
    this.setState({
      navOpen: false
    })
  }

  barAnimate() {
    if (!this.dom) {
      return;
    }
    //const bar = this.refs.bar;
    //bar.style.left = `${this.dom.getBoundingClientRect().left}px`;
  }
  render() {
    var navToggled = this.state.navOpen? 'toggled' : '';
    return (
      <div className="bodyLimit" id="bodyLimit">
        <header>
          <a className="hideText" href="http://designsuccess.com">
            <ReactSVG
              wrapperClassName="designSuccessLogo"
              path={withPrefix("/svg/layout/designSuccess.svg")}
            />
            <ReactSVG
              wrapperClassName="designSuccessLogoMobile"
              path={withPrefix("/svg/layout/designSuccessMobile.svg")}
            />
            design:success
          </a>
          <Link
            to="home"
            className="hideText a"
            showHeightActive="300"
            toHash={true}
            onFocus={this.onFocus}
          >
            <ReactSVG
              wrapperClassName="sportsNavLogo"
              id="sportsNavLogo"
              path={withPrefix("/svg/layout/sportsDirect.svg")}
            />
            sports:direct
          </Link>
          <div id="hamburger" className={navToggled} onClick={() => this.toggleNav()}>
          <ReactSVG
              wrapperClassName="hamburgerIcon"
              path={withPrefix("/svg/layout/hamburger.svg")}
            />
          </div>
          <nav className={navToggled} onClick={() => this.closeNav()}>
          <Link
            to="background"
            className="a"
            showHeightActive="300"
            toHash={true}
            onFocus={this.onFocus}
          >
            background
          </Link>
          <Link to="platform" className="a" toHash={true}>
            platform
          </Link>
          <Link to="benefits" className="a" toHash={true}>
            benefits
          </Link>
          {/*<Link to="trustedby" className="a">trusted by</Link>*/}
          <Link to="engage" className="a" toHash={true}>
            engage
          </Link>
          <div ref="bar" className="nav-bar" />
          </nav>
        </header>
          <ScrollOverPack
            id="home"
            className="section"
            playScale={1}
            targetId="bodyLimit"
            always={false}
            appear={false}
            replay={false}
            key="homePack">
            <h1 key="home1">sports:direct</h1>
            <h3 key="home2">
              social media solution to grow, monitor, manage and protect your
              talent, brand & ROI
            </h3>
            <ReactSVG
              key="home3"
              wrapperClassName="mainLogo"
              path={withPrefix("/svg/layout/sportsDirect.svg")}
            />
            <h2 key="home4">invest, increase & protect your brand & investment</h2>
            <div key="home5" className="homeText">
              <p key="home5.1">
                the world’s <b>first sports talent social media data & management platform</b> that:
              </p>
              <ul key="home5.2">
                <li key="home5.2.1">grow</li>
                <li key="home5.2.2">manage</li>
                <li key="home5.2.3">coach</li>
                <li key="home5.2.4">monitor 24/7/365</li>
                <li key="home5.2.5"> mine big data</li>
                <li key="home5.2.6">in-depth report</li>
                <li key="home5.2.7">…and crisis manage if needed</li>
              </ul>
            </div>
            </ScrollOverPack>
            <ScrollOverPack
            id="video"
            className="section"
            playScale={1}
            targetId="bodyLimit"
            always={false}
            appear={false}
            replay={false}
            key="videoKey">
              <div key="video1" className="videoWrapper">
                <div key="video2" className="videoOverlay"></div>
                <ReactPlayer key="video3" url="https://vimeo.com/264421949" playsinline={true}/>
              </div>
            </ScrollOverPack>
            <ScrollOverPack
            id="worldsfirst"
            playScale={1}
            className="section"
            always={false}
            appear={false}
            replay={false}
            key="worldsFirstPack">
            <h2 key="worldsfirst1">
              world’s first<br />& only solution
            </h2>
            <p key="worldsfirst2">
              360 degree social media data & management platform to coach, grow,
              manage and monitor sports talent<br /> - while getting deeper
              data.<br />
              <span key="worldsfirst2.1">Result: Reduce risk and increase ROI</span>
            </p>
            <div key="worldsfirst3" className="firstColumned">
              <div key="worldsfirst3.1" className="option">
                <ReactSVG
                  key="worldsfirst3.1.1"
                  wrapperClassName="socialIcon"
                  path={withPrefix("/svg/layout/reduceRisk.svg")}
                />
                <p key="worldsfirst3.1.2">reduce risk</p>
              </div>
              <div key="worldsfirst3.2" className="option">
                <ReactSVG
                  key="worldsfirst3.2.1"  
                  wrapperClassName="socialIcon"
                  path={withPrefix("/svg/layout/increaseRoi.svg")}
                />
                <p key="worldsfirst3.2.2">increase ROI</p>
              </div>
              <div key="worldsfirst3.3" className="option">
                <ReactSVG
                  key="worldsfirst3.3.1"
                  wrapperClassName="socialIcon"
                  path={withPrefix("/svg/layout/deepDataPower.svg")}
                />
                <p key="worldsfirst3.3.2">deep data power</p>
              </div>
            </div>
            </ScrollOverPack>
     <ScrollOverPack
        id="background"
        playScale={1}
        className="section"
        always={false}
        appear={false}
        replay={false}
        key="backgroundPack">
          <h2 key="background1">
            the <br />background
          </h2>
          <div key="background2" className="backgroundText">
            <p key="background3">Social Media is important for brands!</p>
            <p key="background4">
              <b>BUT</b> Brands, athletes, agents, clubs, and<br />
              federations face new and increased<br />
              challenges or dangers because of social<br />
              media speed and transparency.<br />
              What is the true ROI?<br />
              Who is really following on Social Media?<br />
              And how to protect investments?
            </p>
          </div>
          <h3 key="background5">relax - the world’s first & only solution is here…</h3>
        </ScrollOverPack>

     <ScrollOverPack
        id="platform"
        playScale={1}
        className="section"
        always={false}
        appear={false}
        replay={false}
        key="platformPack">
          <h2 key="platform1">
            #1 propietary<br />platform & solution
          </h2>
          <p key="platform2">9 cutting-edge tools</p>
          <Platform key="platform3"/>
        </ScrollOverPack>
        <ScrollOverPack
        id="deepdata"
        playScale={1}
        className="section"
        always={false}
        appear={false}
        replay={false}
        key="deepdataPack">
          <h2 key="deepdata1">deep data demand. done.</h2>
          <div key="deepdata2" className="firstColumned">
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
          <div key="deepdata3" className="secondColumned">
            <span>
              <small>1: </small>engagement
            </span>
            <span>
              <small>6: </small>event visit
            </span>
            <span>
              <small>2: </small>deep engagement
            </span>
            <span>
              <small>5: </small>physical store visit
            </span>
            <span>
              <small>3: </small>purchase intent
            </span>
            <span>
              <small>4: </small>purchase channel preference
            </span>
            <ReactSVG
              wrapperClassName="diagramAnimated"
              path={withPrefix("/svg/layout/diagramAnimated.svg")}
            />
          </div>
          <div key="deepdata4" className="thirdColumned">
            <h2>tracks:</h2>
            <span>
              1 billion data points<br />
              100+ million locations
            </span>
            <div className="socialInteraction">
              <ReactSVG
                wrapperClassName="socialIcon deepOnly"
                path={withPrefix("/svg/social/facebook.svg")}
              />
              <ReactSVG
                wrapperClassName="socialIcon"
                path={withPrefix("/svg/social/youtube.svg")}
              />
              <ReactSVG
                wrapperClassName="socialIcon deepOnly"
                path={withPrefix("/svg/social/instagram.svg")}
              />
              <ReactSVG
                wrapperClassName="socialIcon"
                path={withPrefix("/svg/social/linkedin.svg")}
              />
              <ReactSVG
                wrapperClassName="socialIcon"
                path={withPrefix("/svg/social/twitter.svg")}
              />
              <p>*: Deep engagement data only</p>
            </div>
          </div>
        </ScrollOverPack>
        <ScrollOverPack
        id="tracking_platform"
        playScale={1}
        className="section"
        always={false}
        appear={false}
        replay={false}
        key="trackingPlatformPack">
          <h2 key="tracking1">3D Data: Deep Tracking Platform</h2>
          <ReactSVG
            key="tracking2"
            wrapperClassName="graph"
            path={withPrefix("/svg/layout/graph2.svg")}
          />
        </ScrollOverPack>
        <ScrollOverPack
        id="benefits"
        playScale={1}
        className="section"
        always={false}
        appear={false}
        replay={false}
        key="benefitsPack">
          <h2 key="benefits1">benefits</h2>
          <Objects key="benefits2"/>
        </ScrollOverPack>
                {/*
        <section id="trustedby">
          {/*<div className="firstColumned">
      <div>
        <p><span>“</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat.<span>“</span></p>
        <label>-Jack Albert. CEO “globalinc”</label>
      </div>
      <div>
        <p><span>“</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat.<span>“</span></p>
        <label>-Jack Albert. CEO “globalinc”</label>
      </div>
        </div>
          <div className="trustedGrid">
            <ReactSVG path={withPrefix("/svg/clients/clientCocaCola.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientPepsico.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientChanel.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientBoss.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientPrada.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientKraft.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientSanofi.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientPfizer.svg")} />
            <VideoPlayer />
            <ReactSVG path={withPrefix("/svg/clients/clientNovartis.svg")} />
            <div>
              <ReactSVG
                wrapperClassName="hasDetailBox"
                path={withPrefix("/svg/clients/clientNike.svg")}
              />
              <p className="detailBox">
                NIKE. Insight and innovation exploration of running and female
                apparel. Identified winning concepts for future trends and
                business segments
              </p>
            </div>
            <ReactSVG path={withPrefix("/svg/clients/clientMoneyGram.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientCapitalOne.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientBaseF.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientAmigoinc.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientBMW.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientCampbells.svg")} />
          </div>
          </section>*/}
        <ScrollOverPack
        id="engage"
        playScale={1}
        className="section"
        always={false}
        appear={false}
        replay={false}
        key="engagePack">
          <ReactSVG
            key="engage1"
            wrapperClassName="engageLogo"
            path={withPrefix("/svg/layout/sportsDirect.svg")}
          />
          <h2 key="engage2">challenges welcome</h2>
          <div key="engage3" className="locationContact">
            <ul className="chooseList">
              <li>las vegas</li>
              <li>mexico city</li>
              <li>copenhaguen</li>
              <li>singapore</li>
            </ul>
            <p>universal number: +1-702 802 0200</p>
            <p>
              <a href="mailto:success@designsuccess.com">
                success@designsuccess.com
              </a>
            </p>
          </div>
          <ContactForm key="engage4"/>
          <ReactSVG
            key="engage5"
            wrapperClassName="locationMap"
            path={withPrefix("/svg/layout/locationMap.svg")}
          />
        </ScrollOverPack>
        <footer>
          <div className="socialList">
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/facebook.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/vimeo.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/youtube.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/instagram.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/linkedin.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/twitter.svg")}
            />
          </div>
          <p>
            © design success international ds worldwide consulting llc. all
            rights reserved. <a>privacy of use</a> | <a>terms & conditions</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default IndexPage;
