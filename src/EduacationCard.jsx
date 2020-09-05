import React from "react";

const EduacationCard = ({ eduacation }) => {
  return (
    <>
      <div class="ui card">
      
        <div class="content">
          <h3 class="ui header">{eduacation.name}</h3>
          <div class="description">{eduacation.description}</div>
          <div class="time">{eduacation.time}</div>
          <div class="title">{eduacation.title}</div>
        </div>
      </div>
    </>
  );
};

export default EduacationCard;



