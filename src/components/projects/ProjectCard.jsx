import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Zoom } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
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
import { MdWbCloudy } from 'react-icons/md';
import { BsXDiamond } from 'react-icons/bs';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'rgba(97, 218, 251, 0.05)',
    color: '#fff',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}))(Tooltip);

//missing icons: Cloudinary, Netlify, express

const getIcon = (tech) => {
  switch (tech) {
    case 'html':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='HTML5'
          >
            <div>
              <DiHtml5 />
            </div>
          </LightTooltip>
        </>
      );
    case 'netlify':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='Netlify'
          >
            <div>
              <BsXDiamond />
            </div>
          </LightTooltip>
        </>
      );
    case 'cloudinary':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='Cloudinary'
          >
            <div>
              <MdWbCloudy />
            </div>
          </LightTooltip>
        </>
      );
    case 'css':
      return (
        <>
          <LightTooltip placement='top' TransitionComponent={Zoom} title='CSS3'>
            <div>
              <DiCss3 />
            </div>
          </LightTooltip>
        </>
      );
    case 'ruby':
      return (
        <>
          <LightTooltip placement='top' TransitionComponent={Zoom} title='Ruby'>
            <div>
              <DiRuby />
            </div>
          </LightTooltip>
        </>
      );
    case 'rails':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='Rails'
          >
            <div>
              <DiRor />
            </div>
          </LightTooltip>
        </>
      );
    case 'react':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='React'
          >
            <div>
              <DiReact />
            </div>
          </LightTooltip>
        </>
      );
    case 'postgres':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='PostgreSQL'
          >
            <div>
              <DiPostgresql />
            </div>
          </LightTooltip>
        </>
      );
    case 'mongo':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='MongoDB'
          >
            <div>
              <DiMongodb />
            </div>
          </LightTooltip>
        </>
      );
    case 'github':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='Github'
          >
            <div>
              <DiGithubBadge />
            </div>
          </LightTooltip>
        </>
      );
    case 'node':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='Node.JS & Express.JS'
          >
            <div>
              <DiNodejsSmall />
            </div>
          </LightTooltip>
        </>
      );
    case 'heroku':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='Heroku'
          >
            <div>
              <DiHeroku />
            </div>
          </LightTooltip>
        </>
      );
    case 'javascript':
      return (
        <>
          <LightTooltip
            placement='top'
            TransitionComponent={Zoom}
            title='Javascript'
          >
            <div>
              <DiJavascript />
            </div>
          </LightTooltip>
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
      <div className='technologies'>
        {props.technologies.sort().map((t) => getIcon(t))}
      </div>
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
