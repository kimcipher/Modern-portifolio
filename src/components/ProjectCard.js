import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.imageSrc} alt={project.title} />
      </div>
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {project.title} Demo
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
    </div>
  );
};

export default ProjectCard;
