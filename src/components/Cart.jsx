import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartSelector, totalPriceCart } from '../store/selectors';
import CartItem from './CartItem';

/* eslint-disable react/prefer-stateless-function */

class Cart extends Component {
  render() {
    const { cart, totalPrice } = this.props;
    return (
      <div className="container">
        <h1>CART</h1>
        <div className="Cart">
          {totalPrice ? (
            cart.map((prod) => <CartItem key={prod.id} prod={prod} />)
          ) : (
            <p>Vide</p>
          )}
          {!!totalPrice && (
            <p style={{ textAlign: 'right', fontSize: '25px' }}>
              Total price: {totalPrice}&euro;
            </p>
          )}
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      qty: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  cart: cartSelector(state),
  totalPrice: totalPriceCart(state),
});

export default connect(mapStateToProps)(Cart);
