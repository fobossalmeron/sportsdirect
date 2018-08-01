import React, { Component } from "react";
import SportsDirectIcon from "./../../../assets/img/layout/sportsDirect.svg";
import InvestIncrease from "./../../../assets/img/layout/investIncrease.svg";
import HomeExpand from "./../../../assets/img/layout/homeExpand.svg";

class HomeSection extends Component {
  render() {
    return (
      <section id="home">
        <div className="overVideo">
          <h1>sports:direct</h1>
          <SportsDirectIcon className="SPlogo" />
          <h3 className="desktop"><HomeExpand/></h3>
          <h3 className="mobile">social media solution to grow, monitor, manage and protect your talent, brand & ROI</h3>
          <h2>
            <InvestIncrease />
          </h2>
          <div className="homeText">
            <p>
              the world’s<b>
                {" "}
                first sports talent social media data & management platform{" "}
              </b>
              that:
            </p>
            <ul>
              <li>grow</li>
              <li>manage</li>
              <li>coach</li>
              <li>monitor 24/7/365</li>
              <li>mine big data</li>
              <li>in-depth report</li>
              <li>…and crisis manage if needed</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection;
