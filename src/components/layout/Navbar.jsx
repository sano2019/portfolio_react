import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navlinks'>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/Projects' activeClassName='active'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/Contact' activeClassName='active'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/About' activeClassName='active'>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
