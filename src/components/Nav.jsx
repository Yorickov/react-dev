import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="py-3">
    <ul className="nav nav-pills">
      <li className="nav-item"><NavLink to="/" exact={true} className="nav-link">Home</NavLink></li>
      <li className="nav-item"><NavLink to="/simple" className="nav-link">Simple</NavLink></li>
      <li className="nav-item"><NavLink to="/small" className="nav-link">Small</NavLink></li>
      <li className="nav-item"><NavLink to="/big" className="nav-link">Big</NavLink></li>
      <li className="nav-item"><NavLink to="/carousel" className="nav-link">Carousel</NavLink></li>
      <li className="nav-item"><NavLink to="/mouse" className="nav-link">Mouse tracker</NavLink></li>
      <li className="nav-item"><NavLink to="/products" className="nav-link">Products list</NavLink></li>
      <li className="nav-item"><NavLink to="/todo" className="nav-link">Todo box</NavLink></li>
      <li className="nav-item"><NavLink to="/tictactoe" className="nav-link">Tic Tac Toe</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
