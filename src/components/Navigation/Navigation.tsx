import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';
const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
