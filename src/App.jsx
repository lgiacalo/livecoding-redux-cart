import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import * as api from './api';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './store/actions/types';
import './App.css';
import { networkSelector, productsSelector } from './store/selectors';

class App extends Component {
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { dispatch } = this.props;
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    setTimeout(() => {
      api
        .fetchProducts()
        .then((products) => {
          dispatch({ type: FETCH_PRODUCTS_SUCCESS, products });
        })
        .catch((error) => dispatch({ type: FETCH_PRODUCTS_FAILURE, error }));
    }, 1500);
  };

  render() {
    const {
      products,
      network: { isLoading, error },
    } = this.props;
    return (
      <div className="App">
        <Navbar />
        {error && (
          <div>
            <h3>{error}</h3>
            <button type="button" onClick={this.fetchProducts}>
              Try again
            </button>
          </div>
        )}
        {isLoading && <p>En cours de chargement</p>}
        <div className="container">
          <ProductList products={products} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  network: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  network: networkSelector(state),
  products: productsSelector(state),
});

export default connect(mapStateToProps)(App);
