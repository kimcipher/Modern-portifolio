
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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
