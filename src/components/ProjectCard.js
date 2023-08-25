import React from "react";


const ProjectCard = ({ project }) => {
  return (
    <div className="project-card"> 
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p> 
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link" 
      >
        {project.title}
      </a>{" "}
      |{" "}
      <a
        href={project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link" 
      >
        Repository
      </a>
    </div>
  );
};

export default ProjectCard;
