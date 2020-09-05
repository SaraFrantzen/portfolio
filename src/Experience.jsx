import React from "react";
import CV from "./Cv";

/* temporarly made to be able to display both CV.json and eduacationlist.json, there is 
EXPERIENCE in navbar (made for test around)thats commented out - delete when done! */

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
