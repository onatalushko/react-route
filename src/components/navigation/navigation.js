import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

const Navigation = ({ modifier }) => {
  const classes = modifier ? `navigation navigation--${ modifier }` : 'navigation';

  return (
    <nav className={ classes }>
      <ul className="navigation__items">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>

        <li className="navigation__item">
          <Link to="/posts">Posts</Link>
        </li>

        <li className="navigation__item">
          <Link to="/archive">Archive</Link>
        </li>

        <li className="navigation__item">
          <Link to="/about">About</Link>
        </li>

        <li className="navigation__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;