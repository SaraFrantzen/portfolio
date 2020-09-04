import axios from "axios";
import Resume from "./Resume";
import React, { Component } from "react";
import Eduacation from "./Eduacation";



class CV extends Component {
  state = {
    CV: [],
  };

  componentDidMount() {
    axios.get("./src/data/cv.json").then((response) => {
      this.setState({
        CV: response.data,
      });
    });
  }

  render() {
    const CV = this.state.CV;
    let resume;
  

    if (CV.length > 0) {
      resume = CV.map((cv) => {
        return (
          <div id={"cv-" + cv.id} key={cv.id}>
            <Resume cv={cv} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <img
          id="cv-img"
          src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        />
        <div class="column">
          <h1 className="ui header" id="cv-header">
            Curriculum vitae
          </h1>
        </div>
        <div class="ui stackable two column grid">
          <div class="column"></div>
        </div>

        <div className="ui stackable four column grid" id="cv-grid">{resume}</div>
        <div className="ui stackable four column grid">{Eduacation.eduacationList}</div>
       
           </div>
          /*   display cv - fil*/
    );
  }
}

export default CV;


