import React from "react";
import CV from "./Cv";

const Experience = () => {
    
    return (
    <div className="ui main container">
      <h1 id="projects-header" className="ui header">
        Final CV
      </h1>

      <div className="ui stackable four column grid" id="cv-grid">
          {CV.resume}
        </div>
    </div>
  );
};

export default Experience;
