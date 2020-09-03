import React from "react";
import { UndrawFreelancer } from "react-undraw-illustrations";
const About = () => {
  return (
    <div className="ui main container">
     
        <div class="column">
          <h1  className="ui header" id="about-header">About Me</h1>
          <p>My name is Sara and I attend the Craft Academy BootCamp</p>
        </div>
         <div class="ui stackable two column grid">
        <div class="column">
           <UndrawFreelancer /> 
        </div>
      </div>
    </div>
  );
};

export default About;
