import React from 'react';
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
      return <DiHtml5 className='icon' alt='HTML5' title='HTML5' />;
    case 'css':
      return <DiCss3 className='icon' />;
    case 'ruby':
      return <DiRuby className='icon' />;
    case 'rails':
      return <DiRor className='icon' />;
    case 'react':
      return <DiReact className='icon' />;
    case 'postgres':
      return <DiPostgresql className='icon' />;
    case 'mongo':
      return <DiMongodb className='icon' />;
    case 'github':
      return <DiGithubBadge className='icon' />;
    case 'node':
      return <DiNodejsSmall className='icon' />;
    case 'heroku':
      return <DiHeroku className='icon' />;
    case 'javascript':
      return <DiJavascript className='icon' />;
    default:
      return null;
  }
};

/* <head>
<style>
div {
  background-color: yellow;
  padding: 20px;
  display: none;
}
  
span:hover + div {
  display: block;
}
</style>
</head>
<body>

<span>Hover over me!</span>
<div>I will show on hover</div>

</body>
</html> */

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
