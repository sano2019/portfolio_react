import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiRor,
  DiRuby,
  DiPostgresql,
  DiMongodb,
  DiGithubBadge,
  DiNodejsSmall,
  DiHeroku,
  DiJavascript,
} from 'react-icons/di';

const getIcon = (tech) => {
  switch (tech) {
    case 'html':
      return (
        <>
          <DiHtml5 className='icon' />
          <span className='tooltip-text'>HTML5</span>
        </>
      );
    case 'css':
      return (
        <>
          <DiCss3 className='icon' />
        </>
      );
    case 'ruby':
      return (
        <>
          <DiRuby className='icon' />
          <span className='tooltip-text'>Ruby</span>
        </>
      );
    case 'rails':
      return (
        <>
          <DiRor className='icon' />
          <span className='tooltip-text'>Rails</span>
        </>
      );
    case 'react':
      return (
        <>
          <DiReact className='icon' />
          <span className='tooltip-text'>React</span>
        </>
      );
    case 'postgres':
      return (
        <>
          <DiPostgresql className='icon' />
          <span className='tooltip-text'>PostgreSQL</span>
        </>
      );
    case 'mongo':
      return (
        <>
          <DiMongodb className='icon' />
          <span className='tooltip-text'>MongoDB</span>
        </>
      );
    case 'github':
      return (
        <>
          <DiGithubBadge className='icon' />
          <span className='tooltip-text'>Github</span>
        </>
      );
    case 'node':
      return (
        <>
          <DiNodejsSmall className='icon' />
          <span className='tooltip-text'>Node.JS</span>
        </>
      );
    case 'heroku':
      return (
        <>
          <DiHeroku className='icon' />
          <span className='tooltip-text'>Heroku</span>
        </>
      );
    case 'javascript':
      return (
        <>
          <DiJavascript className='icon' />
          <span className='tooltip-text'>Javascript</span>
        </>
      );
    default:
      return null;
  }
};

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Technologies used:</p>
      <div className='tech-popup'></div>
      <p className='technologies'>
        {props.technologies.sort().map((t) => getIcon(t))}
      </p>
      <div className='card-button-container'>
        <a
          href={props.url}
          target='_blank'
          rel='noopener noreferrer'
          className='card-button'
        >
          Website
        </a>

        <a
          href={props.github}
          target='_blank'
          rel='noopener noreferrer'
          className='card-button'
        >
          Github
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  github: PropTypes.string,
};

export default ProjectCard;
