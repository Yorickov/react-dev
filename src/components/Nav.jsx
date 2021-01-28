import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="py-3">
    <ul className="nav nav-pills">
      <li className="nav-item"><NavLink to="/" exact={true} className="nav-link">Home</NavLink></li>
      <li className="nav-item"><NavLink to="/stateless" className="nav-link">Stateless components</NavLink></li>
      <li className="nav-item"><NavLink to="/small" className="nav-link">Small components</NavLink></li>
      <li className="nav-item"><NavLink to="/big" className="nav-link">Big components</NavLink></li>
      <li className="nav-item"><NavLink to="/carousel" className="nav-link">Carousel</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
