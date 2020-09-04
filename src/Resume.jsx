import React from "react";

const Resume = ({ cv }) => {
  return (
    <>
      <div class="ui card" id="cv-card">
        
        <div class="content">
       
          <h3 class="ui header">{cv.company}</h3>
          <a href={cv.url} target="_blank">Website</a>
          <div class="url">{cv.url}</div>
          <div class="title">{cv.title}</div>

          <div class="description">{cv.description}</div>
          <div class="time">{cv.time}</div>
        </div>
      </div>
    </>
  );
};
export default Resume;
