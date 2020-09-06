import React from "react";

const EducationCard = ({ education }) => {
  return (
    <>
      <div class="ui main container">
        <div class="column">
          <div class="ui tiny image" id="education-img">
            <img src={education.image}></img>
          </div>
        </div>
        <div class="column">
          <h2>{education.name} </h2>
        </div>

        <div class="column" id="education-title">
          {education.title}, {education.time}
        </div>
        <div class="column" id="education-description">
          {education.description}
        </div>
      </div>
    </>
  );
};

export default EducationCard;
