import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductList from './ProductList';

import { networkSelector, productsSelector } from '../store/selectors';

class Home extends Component {
  render() {
    const {
      products,
      network: { isLoading, error },
    } = this.props;
    return (
      <div className="App">
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

Home.propTypes = {
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
};

const mapStateToProps = (state) => ({
  network: networkSelector(state),
  products: productsSelector(state),
});

export default connect(mapStateToProps)(Home);
