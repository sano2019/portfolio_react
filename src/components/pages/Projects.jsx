import React, { Fragment } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectList from '../projects/ProjectList';

const Projects = (props) => {
  return (
    <Fragment>
      <div className='project-list'>
        <header>
          <h1>Projects I have worked on</h1>
        </header>
        <div className='projects'>
          {ProjectList.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              url={project.url}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
