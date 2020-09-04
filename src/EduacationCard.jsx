import React from "react";

const EduacationCard = ({ eduacation }) => {
  return (
    <>
      <div class="ui card" id="ed-card">
        <div class="image">
          <img src={eduacation.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{eduacation.company}</h3>
          <div class="url">{eduacation.url}</div>
          <div class="description">{eduacation.description}</div>
          <div class="time">{eduacation.time}</div>
          <div class="title">{eduacation.title}</div>
        </div>
      </div>
    </>
  );
};

export default EduacationCard;



