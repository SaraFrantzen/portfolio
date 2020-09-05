import axios from "axios";
import EduacationCard from "./EduacationCard";
import React, { Component } from "react";

class Eduacations extends Component {
  state = {
    eduacations: [],
  };

  componentDidMount() {
    axios.get("./src/data/eduacations.json").then((response) => {
      this.setState({
        eduacations: response.data,
      });
    });
  }

  render() {
    const eduacations = this.state.eduacations;
    let eduacationsList;

    if (eduacations.length > 0) {
      eduacationsList = eduacations.map((eduacation) => {
        return (
          <div id={"eduacation-" + eduacation.id} key={eduacation.id}>
            <EduacationCard eduacation={eduacation} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <h1 className="eduacations-header" id="cv-header">
         Eduacation
        </h1>
        <div className="ui stackable four column grid">{eduacationsList}</div>
      </div>
    );
  }
}
export default Eduacations;
