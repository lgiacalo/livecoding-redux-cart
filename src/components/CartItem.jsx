import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../store/actions';
import './Cart.css';

/* eslint-disable react/prefer-stateless-function */

function CartItem({ prod, handleAddToCart, handleRemoveFromCart }) {
  return (
    <figure key={prod.id} className="CartItem">
      <img src={prod.image} alt={prod.name} />
      <div>
        <h3>{prod.name}</h3>
        <p>{prod.price}&euro;</p>
        <p>Quantity: {prod.qty}</p>
      </div>
      <div>
        <button type="button" onClick={() => handleRemoveFromCart(prod)}>
          -
        </button>
        <button type="button" onClick={() => handleAddToCart(prod)}>
          +
        </button>
        <p>Total : {prod.price * prod.qty}&euro;</p>
      </div>
    </figure>
  );
}

CartItem.propTypes = {
  prod: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  handleAddToCart: addToCart,
  handleRemoveFromCart: removeToCart,
};

export default connect(null, mapDispatchToProps)(CartItem);
