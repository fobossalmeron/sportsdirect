import React, { Component } from "react";
import ReactPlayer from "react-player";

class Objects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  componentDidMount(){
    this.refs.video1.setAttribute('muted', true);
    this.refs.video1.play();
    this.refs.video2.setAttribute('muted', true);
    this.refs.video2.play();
    this.refs.video3.setAttribute('muted', true);
    this.refs.video3.play();
    this.refs.video4.setAttribute('muted', true);
    this.refs.video4.play();
  }

  keepOpen(index) {
    console.log(index);
    if (this.state.selected === index) {
      console.log("same index");
      this.setState({
        selected: ""
      });
    } else {
      console.log("new index");
      this.setState(
        {
          selected: index
        },
        () => console.log(this.state.selected)
      );
    }
  }

  render() {
    var firstSelected = this.state.selected === 1 ? "selected" : "";
    var secondSelected = this.state.selected === 2 ? "selected" : "";
    var thirdSelected = this.state.selected === 3 ? "selected" : "";
    var fourthSelected = this.state.selected === 4 ? "selected" : "";
    return (
      <div className="objectContainer">
        <div
          className={"object " + firstSelected}
          onClick={() => this.keepOpen(1)}
        >
          <h3>brands</h3>
          <div className="objectVideo">
            <video
              src="assets/video/soccer.mp4"
              ref="video1"
              preload="auto"
              autoPlay
              muted={true}
              loop
              playsInline
            />
          </div>
          <ul>
            <li>
              Brand & Athlete<br />(Influencer/Talent) fit
            </li>
            <li>Athlete Social Media index</li>
            <li>In-depth Athlete follower demographic data</li>
            <li>‘Protecting’ brands investment in Athlete</li>
            <li>Protecting brand name</li>
            <li>Negotiation tool for Athlete sponsorships</li>
            <li>
              Managing Athletes digital content<br /> – incl. scheduling
            </li>
            <li>Social Media training of Athlete</li>
            <li>Exclusive Consumer Data</li>
            <li>Social Media crisis management</li>
            <li>24/7 positive / negative monitoring</li>
            <li>Illuminate or diminish risk</li>
          </ul>
        </div>
        <div
          className={"object " + secondSelected}
          onClick={() => this.keepOpen(2)}
        >
          <h3>athletes</h3>
          <div className="objectVideo">
          <video
              src="assets/video/sneaker.mp4"
              ref="video2"
              preload="auto"
              autoPlay
              muted={true}
              loop
              playsInline
            />
          </div>
          <ul>
            <li>Increased brand building</li>
            <li>Personal social media training</li>
            <li>More time / focus on training, game etc.</li>
          </ul>
        </div>
        <div
          className={"object " + thirdSelected}
          onClick={() => this.keepOpen(3)}
        >
          <h3>clubs</h3>
          <div className="objectVideo">
          <video
              src="assets/video/tshirt.mp4"
              ref="video3"
              preload="auto"
              autoPlay
              muted={true}
              loop
              playsInline
            />
          </div>
          <ul>
            <li>
              Brand & Athlete<br /> (Influencer/Talent) fit
            </li>
            <li>Athlete Social Media index</li>
            <li>In-depth Athlete follower demographic data</li>
            <li>ROI of Athlete engagement; current and projected</li>
            <li>In-depth Athlete follower demographic data</li>
            <li>‘Protecting’ agents/clubs investment in Athlete</li>
            <li>Protecting club name</li>
            <li>Negotiation tool for Athlete sponsorships</li>
            <li>Social Media crisis management</li>
            <li>24/7 positive / negative monitoring</li>
            <li>Illuminate or diminish risk</li>
          </ul>
        </div>
        <div
          className={"object " + fourthSelected}
          onClick={() => this.keepOpen(4)}
        >
          <h3>agents</h3>
          <div className="objectVideo">
          <video
              src="assets/video/briefcase.mp4"
              ref="video4"
              preload="auto"
              autoPlay
              muted={true}
              loop
              playsInline
            />
          </div>
          <ul>
            <li>
              Brand & Athlete <br /> (Influencer/Talent) fit
            </li>
            <li>Athlete Social Media index</li>
            <li>In-depth Athlete follower demographic data</li>
            <li>ROI of Athlete engagement; current and projected</li>
            <li>In-depth Athlete follower demographic data</li>
            <li>‘Protecting’ agents/clubs investment in Athlete</li>
            <li>Protecting club name</li>
            <li>Negotiation tool for Athlete sponsorships</li>
            <li>Social Media crisis management</li>
            <li>24/7 positive / negative monitoring</li>
            <li>Illuminate or diminish risk</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Objects;
