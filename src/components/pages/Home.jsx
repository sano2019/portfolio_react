import React from 'react';
import logo from '../../logo.svg';

const Home = () => {
  return (
    <>
      <header className='App-header'>
        <p style={{ justifyContent: 'center' }}>
          <code>Welcome</code>
          <div className='homebox'></div>
        </p>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main>
        <p>
          I'm Sander, an aspiring full-stack developer, and you just found my
          portfolio page
        </p>
        <p>
          Please feel free to have a look around and get in touch if you see
          something you like.
        </p>
      </main>
    </>
  );
};

export default Home;
