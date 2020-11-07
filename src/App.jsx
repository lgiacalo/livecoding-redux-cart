import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Home, Cart } from './components';
import { fetchProductsAction } from './store/actions';

import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

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
  fetchProducts: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: fetchProductsAction(dispatch),
});

export default connect(null, mapDispatchToProps)(App);

// const mapDispatchToProps = {
//   handleAddToCart: addToCart,
// };

// const mapDispatchToProps = (dispatch) => ({
//   handleAddToCart: product => addToCart(product)
// })
