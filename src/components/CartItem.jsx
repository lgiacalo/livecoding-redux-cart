import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Cart.css';

/* eslint-disable react/prefer-stateless-function */

function CartItem({ prod }) {
  return (
    <figure key={prod.id} className="CartItem">
      <img src={prod.image} alt={prod.name} />
      <div>
        <h3>{prod.name}</h3>
        <p>{prod.price}&euro;</p>
        <p>Quantity: {prod.qty}</p>
      </div>
      <div>
        <button type="button" onClick={() => {}}>
          -
        </button>
        <button type="button" onClick={() => {}}>
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
};

export default connect()(CartItem);
