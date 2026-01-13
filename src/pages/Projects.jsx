import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Personal Website', description: 'A minimal personal website built with React.', link: '#' },
    // Add more mock projects here
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
