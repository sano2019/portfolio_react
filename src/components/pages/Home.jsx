import React from 'react';
import logo from '../../logo.svg';

const Home = () => {
  return (
    <header className='App-header'>
      <p style={{ justifyContent: 'center' }}>
        <code>Welcome</code>
        <div className='homebox'></div>
      </p>
      <img src={logo} className='App-logo' alt='logo' />
    </header>
  );
};

export default Home;
