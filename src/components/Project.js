import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'React Modern Portifolio',
    description: 'ReactJS, React Designer & Developer Portfolio',
    demoLink: 'https://example.com/project1',
    repoLink: 'https://github.com/user/project1',
    imageSrc:
      'https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Angular Urban Portifolio',
    description: 'AngularJS, Angular Marketer & Creator Portifolio',
    demoLink: 'https://example.com/project2',
    repoLink: 'https://github.com/user/project2',
    imageSrc:
      'https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'VueJS Personal Portifolio',
    description: 'VueJS, Vue UI & UX Designer & Vue Developer',
    demoLink: 'https://example.com/project2',
    repoLink: 'https://github.com/kimcipher/VueJs-Personal_portifolio.git',
    imageSrc:
      'https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'NextJS Modernized Portifolio',
    description: 'NextJS, Next 3D Web Designer & Developer',
    demoLink: 'https://example.com/project2',
    repoLink: 'https://github.com/user/project2',
    imageSrc:
      'https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container mx-auto">
        <h2 className="projects-title">Projects</h2>
        <p className="text-center">
          No cost templates available for utilization. Should you require
          website design assistance, please <b>get in touch</b> with me!
        </p>
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
