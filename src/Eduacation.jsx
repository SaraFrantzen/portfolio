import axios from "axios";
import EduacationCard from "./EduacationCard";
import React, { Component } from "react";

class Eduacations extends Component {
    state = {
      eduacations: [],
    };
    componentDidMount() {
      axios.get('./src/data/educationList.json').then(response => {
        this.setState({
          eduacations: response.data,
        })
      })
    }
    render() {
      const eduacations = this.state.eduacations;
      let eduacationList;
  
      if (eduacations.length > 0) {
        eduacationList = eduacations.map((eduacation) => {
          return (
            <div id={"eduacation-1" + eduacation.id} key={eduacation.id}>
              <EduacationCard eduacation={eduacation} />
            </div>
          );
        });
      }

  return (
    <div className="ui main container">
      <div className="ui stackable four column grid">{eduacationList}</div>
      </div>
  )
  }
}
  export default Eduacations;


