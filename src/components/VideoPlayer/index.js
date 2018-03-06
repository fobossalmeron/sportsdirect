import React, { Component } from "react";
import ReactSVG from 'react-svg';
import { withPrefix } from 'gatsby-link';
import ReactPlayer from 'react-player';

class SolutionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true
    };
  }

toggleVideo(){
    this.setState(
      {playing: true}, 
      () => console.log("video changed" + playVideo)
  );
};

  render() {
    return (
      <div className="trustedVideo">
        <div onClick={this.toggleVideo} id="trianglePlay"></div>
        <ReactPlayer url={withPrefix('/video/intro.mp4')} playsinline controls={false} playing={this.state.playing} loop/>
        <p>what our clients say about us</p>
      </div>
    );
  }
}

export default SolutionModal
