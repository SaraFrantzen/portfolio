import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div class="ui card">
        <div class="image">
          <img src={project.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{project.name}</h3>
          <div class="description">{project.description}</div>

          <a href={project.git} target="_blank">
            <button type="button" id="github">
              GitHub
            </button>
          </a>
          <a href={project.web} target="_blank">
            <button type="button" id="webpage">
              WebPage
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
