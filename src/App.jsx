import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Home, Cart } from './components';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './store/actions/types';
import * as api from './api';

import './App.css';

/* eslint-disable react/prefer-stateless-function */
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
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
