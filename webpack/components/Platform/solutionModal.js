import React, { Component } from "react";

class SolutionModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var solution = this.props.solution;
    var selectedSolution = this.props.solution;
    var solutionsList = this.props.solutions.map((solution, index) => (
      <li
        key={solution.id + "listed"}
        className={solution == selectedSolution ? "selected" : ""}
        onClick={() => this.props.changeSolution(solution)}
      >
        <span>{solution.id}</span>
        <p>{solution.title}</p>
      </li>
    ));
    return (
      <div className="solutionModal">
        <div className="solutionInfo">
          <a className="close" onClick={() => this.props.closeModal()} />
          <a className="next" onClick={() => this.props.nextModal(solution)} />
          <a
            className="next prev"
            onClick={() => this.props.prevModal(solution)}
          />
          {solution.icon}
          <p>
            <span>{solution.id}</span>
            <b>{solution.title}</b>
          </p>
          <p>{solution.desc}</p>
        </div>
        <div className="solutionsInfo">
          <ul className="solutionsList">{solutionsList}</ul>
        </div>
      </div>
    );
  }
}

export default SolutionModal;
