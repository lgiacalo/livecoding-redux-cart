import React from 'react';

const Navbar = ({ cart }) => (
  <nav className="Navbar">
    <ul className="Navbar-left">
      <li>
        <a href="#">Home</a>
      </li>
    </ul>
    <ul className="Navbar-right">
      <li>
        <span className="Navbar-cart">{0}</span>
      </li>
    </ul>
  </nav>
);

export default Navbar;
