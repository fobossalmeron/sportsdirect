import React, { Component } from "react";
import ReactSVG from 'react-svg';
import { withPrefix } from 'gatsby-link';

class SolutionModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var solution = this.props.solution;
    var solutionsList = this.props.solutions.map((solution, index) => ( 
      <li key={solution.id + "listed"} onClick={() => this.props.changeSolution(solution)}>
        <span>{solution.id}</span> 
        <p>{solution.title}</p> 
      </li>
    ));
    return (
      <div className="solutionModal">
        <div className="solutionInfo">
        <a className="close" onClick={() => this.props.closeModal()}></a>
          <ReactSVG wrapperClassName="iconStatic" path={withPrefix('/svg/solutions/' + solution.icon + '')}/>
          <p><span>{solution.id}</span><b>{solution.title}</b></p>
          <p>{solution.desc}</p>
        </div>
        <div className="solutionsInfo">
        <ul className="solutionsList">
          {solutionsList}
        </ul>
        </div>
      </div>
    );
  }
}

export default SolutionModal
