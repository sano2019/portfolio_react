import React, { Fragment } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectList from '../projects/ProjectList';

const Projects = (props) => {
  return (
    <Fragment>
      <div className='project-list'>
        <div className='project-intro'>
          <h2>Projects I have worked on</h2>
        </div>
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
