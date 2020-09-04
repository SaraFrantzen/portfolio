import React from "react";


const resume = ({ cv }) => {
  return (
   <>
      <div class="ui card">
        <div class="image">
          <img src={cv.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{cv.company}</h3>
          <div class="url">{cv.url}</div>
          <div class="description">{cv.description}</div>
          <div class="time">{cv.time}</div>
          <div class="title">{cv.title}</div>
               </div>
      
        
        

      </div>
    </>
  );
};
export default resume;









