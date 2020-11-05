import React from 'react';
import { connect } from 'react-redux';

const reduceProducts = (cart) =>
  cart.reduce((carry, { qty }) => carry + qty, 0);

const Navbar = ({ cart }) => (
  <nav className="Navbar">
    <ul className="Navbar-left">
      <li>
        <a href="#">Home</a>
      </li>
    </ul>
    <ul className="Navbar-right">
      <li>
        <span className="Navbar-cart">{reduceProducts(cart)}</span>
      </li>
    </ul>
  </nav>
);

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(Navbar);
