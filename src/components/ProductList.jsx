import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions';

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <nav className="ProductList">
      {products.map((prod) => (
        <div className="ProductCard" key={prod.id}>
          <h3>{prod.name}</h3>
          <img src={prod.image} alt={prod.name} />
          <p>{prod.price}&euro;</p>
          <button
            disabled={!prod.stock}
            type="button"
            onClick={() => handleAddToCart(prod)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </nav>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  handleAddToCart: addToCart,
};

// const mapDispatchToProps = (dispatch) => ({
//   handleAddToCart: product => addToCart(product)
// })

export default connect(null, mapDispatchToProps)(ProductList);
