import React from 'react';
import {
  FaDev,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaRegCopyright,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='socials'>
        <a href='https://dev.to/sano2019'  aria-label="dev.to">
          <FaDev className='socials' />
        </a>
        <a href='https://www.linkedin.com/in/sano2019/' aria-label="linkedin.com">
          <FaLinkedin className='socials' />
        </a>
        <a href='https://twitter.com/sanderiscoding' aria-label="twitter.com">
          <FaTwitterSquare className='socials' />
        </a>
        <a href='https://github.com/sano2019' aria-label="github.com">
          <FaGithubSquare className='socials' />
        </a>
      </div>
      <FaRegCopyright /> Sander Nobel 2021
    </footer>
  );
};

export default Footer;
