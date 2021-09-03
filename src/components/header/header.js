import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../navigation';

import './header.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={ logo } alt="Blog Logo" height="50" width="50" />
        </Link>
      </div>

      <div className="header__navigation">
        <Navigation modifier="header" />
      </div>
    </header>
  );
};

export default Header;