import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { cartSelector } from '../store/selectors';

const reduceProducts = (cart) =>
  cart.reduce((carry, { qty }) => carry + qty, 0);

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = ({ cart }) => (
  <nav className="Navbar">
    <ul className="Navbar-left">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Cart</a>
      </li>
    </ul>
    <ul className="Navbar-right">
      <li>
        <span className="Navbar-cart">{reduceProducts(cart)}</span>
      </li>
    </ul>
  </nav>
);

const mapStateToProps = (state) => ({
  cart: cartSelector(state),
});

Navbar.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      qty: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Navbar);
