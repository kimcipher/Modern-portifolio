
import React from "react";
import ProjectCard from "./ProjectCard"; 

const projects = [
  {
    title: "Project 1",
    description: "A description of Project 1.",
    demoLink: "https://example.com/project1",
    repoLink: "https://github.com/user/project1",
  },
  {
    title: "Project 2",
    description: "A description of Project 2.",
    demoLink: "https://example.com/project2",
    repoLink: "https://github.com/user/project2",
  },
];

const Projects = () => {
  return (
    <section className="projects-section"> 
      <div className="container mx-auto">
        <h2 className="projects-title">Projects</h2>
        <div className="project-card-container"> 
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
