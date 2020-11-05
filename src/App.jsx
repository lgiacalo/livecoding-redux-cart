import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import * as api from './api';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './store/actions/types';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { dispatch } = this.props;
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    api
      .fetchProducts()
      .then((products) => {
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, products });
      })
      .catch((error) => dispatch({ type: FETCH_PRODUCTS_FAILURE, error }));
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
        <div className="container">
          <ProductList products={products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ network, products }) => ({
  network,
  products,
});

export default connect(mapStateToProps)(App);
