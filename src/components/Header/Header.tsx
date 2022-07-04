import React from 'react';

import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <Search />
    </div>
  );
};

export default Header;
