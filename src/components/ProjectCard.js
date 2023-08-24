
import React from "react";


const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
       Modern Portifolio
      </a>{" "}
      |{" "}
      <a
        href={project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Repository
      </a>
    </div>
  );
};

export default ProjectCard;
