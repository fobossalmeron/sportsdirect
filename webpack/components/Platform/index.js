import React, { Component } from "react";
import SolutionModal from "./solutionModal";
import IconAnimated from "./../../../assets/img/layout/iconAnimated.svg";
import ManagementIcon from "./../../../assets/img/solutions/management.svg";
import CoachingIcon from "./../../../assets/img/solutions/coaching.svg";
import DemographicIcon from "./../../../assets/img/solutions/demographic.svg";
import GlobalIcon from "./../../../assets/img/solutions/global.svg";
import CampaignIcon from "./../../../assets/img/solutions/campaign.svg";
import RealTimeIcon from "./../../../assets/img/solutions/realtime.svg";
import PostingIcon from "./../../../assets/img/solutions/posting.svg";
import MonitorIcon from "./../../../assets/img/solutions/monitor.svg";
import DeepIcon from "./../../../assets/img/solutions/deep.svg";



const platformData = {
  "solutions": [
    {
      "id": 1,
      "title": "influencer management & consulting",
      "desc": "Expert team to consult and advise on influencer strategy & management. Develop, strategize, and create talent digital presence.",
      "icon": <ManagementIcon className="iconStatic"/>,
    },
    {
      "id": 2,
      "title": "influencer coaching",
      "desc": "Digital & live coaching, tailored to talent with agency compliance guidance. Amplify Influencer key role with brand awareness.",
      "icon": <CoachingIcon className="iconStatic"/>,
    },
    {
      "id": 3,
      "title": "deep demographic data",
      "desc": "Proprietary global deep data insights of specific social media followers for the talent / brand(s). Tailored follower info such as; gender, age, interest, income, location and brand affinities.",
      "icon": <DemographicIcon className="iconStatic"/>,
    },
    {
      "id": 4,
      "title": "global influencer monitoring",
      "desc": "Proprietary monitoring of talent / influencers social media channels. Instant access to conversations from every social platform. Instant access and categorization (positive and negative) from all social media platforms.",
      "icon": <GlobalIcon className="iconStatic"/>,
    },
    {
      "id": 5,
      "title": "campaign support",
      "desc": "Campaign Consulting and support; strategy and execution. Including guidance to utilizing sports:direct’s 3D Direct Deep Data Platform.",
      "icon": <CampaignIcon className="iconStatic"/>,
    },
    {
      "id": 6,
      "title": "real-time trend trajectory",
      "desc": "Real-Time analysis of trend, topics, and audience perception.",
      "icon": <RealTimeIcon className="iconStatic"/>,
    },
    {
      "id": 7,
      "title": "posting management",
      "desc": "Coordination and fulfillment of 3D Direct Deep Data Pages and scheduling.",
      "icon": <PostingIcon className="iconStatic"/>,
    },
    {
      "id": 8,
      "title": "24/7 monitoring & crisis management",
      "desc": "Industry-first Social Media monitoring, alert and crisis management. Custom Alerts. In-real time signals automatic alerts to a potential crisis or emerging trend in your dataset. Detects significant or sudden changes such as shifts in volume or sentiment.",
      "icon": <MonitorIcon className="iconStatic"/>,
    },
    {
      "id": 9,
      "title": "3D Data: Direct Deep Data Intelligence",
      "desc": "Patent-pending and proprietary data and engagement tracking platform. Direct Deep Data Page is measuring and deep tracking users engagement and sales channel preference and purchase intent; digital and physical locations.",
      "icon": <DeepIcon className="iconStatic"/>,
    }
  ]
}

class Platform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSolution: '',
      modalToggled: false,
    };
  }
  
  closeModal(){
    this.setState({
      modalToggled: false,
    });
  }

  nextModal(selected){
    var index = platformData.solutions.indexOf(selected);
    if ((index + 2) > platformData.solutions.length) {
      var nextSolutionName = platformData.solutions[0];
    } else {
      var nextSolutionName = platformData.solutions[index+1];
    }
    this.setState({
      selectedSolution: nextSolutionName
    });
  }

  prevModal(selected){
    var index = platformData.solutions.indexOf(selected);
    if ((index - 1) < 0) {
      var nextSolutionName = platformData.solutions[platformData.solutions.length -1];
    } else {
      var nextSolutionName = platformData.solutions[index-1];
    }
    this.setState({
      selectedSolution: nextSolutionName
    });
  }

  toggleModal(selected){
    this.setState({
      modalToggled: true,
      selectedSolution: selected,
    });
  }

  render() {
    var solutionsList = platformData.solutions.map((solution, index) => (
      <li key={solution.id} onClick={() => this.toggleModal(solution)}>
        <div className="solutionNumber">{solution.id}</div> 
        <IconAnimated className="iconAnimated"/>
        {solution.icon}
        <h3>{solution.title}</h3>
      </li>
    ));
    var solutionModal = ( 
      <SolutionModal solution={this.state.selectedSolution} 
                     solutions={platformData.solutions}
                     changeSolution={this.toggleModal.bind(this)}
                     prevModal={this.prevModal.bind(this)}
                     nextModal={this.nextModal.bind(this)}
                     closeModal={this.closeModal.bind(this)}/>);
                       
    var isModalToggled = this.state.modalToggled? solutionModal : null;
    var mobileAway = this.state.modalToggled? 'hideMe' : null;
    return (
      <div className="platformContainer">
        {isModalToggled}
        <ul className={mobileAway}>
          {solutionsList}
        </ul>
      </div>
    );
  }
}

export default Platform
