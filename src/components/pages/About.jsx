import React, { Fragment } from 'react';
import logo from '../../logo.svg';

const About = () => {
  return (
    <Fragment>
      <header className='App-header'>
        <p>
          <code>This is the About page</code>
        </p>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main>Testing</main>
    </Fragment>
  );
};

export default About;
