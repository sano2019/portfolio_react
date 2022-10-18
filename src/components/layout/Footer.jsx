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
        <a href='https://dev.to/sano2019'>
          <FaDev className='socials' />
        </a>
        <a href='https://www.linkedin.com/in/sano2019/'>
          <FaLinkedin className='socials' />
        </a>
        <a href='https://twitter.com/sanderiscoding'>
          <FaTwitterSquare className='socials' />
        </a>
        <a href='https://github.com/sano2019'>
          <FaGithubSquare className='socials' />
        </a>
      </div>
      <FaRegCopyright /> Sander Nobel 2021
    </footer>
  );
};

export default Footer;
