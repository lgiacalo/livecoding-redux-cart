import React from 'react';
import { connect } from 'react-redux';
import { ADD_TO_CART } from '../store/actions/types';

const ProductList = ({ products, dispatch }) => {
  const handleAddToCart = (product) =>
    dispatch({
      type: ADD_TO_CART,
      product,
    });

  return (
    <nav className="ProductList">
      {products.map((prod) => (
        <div className="ProductCard" key={prod.id}>
          <h3>{prod.name}</h3>
          <img src={prod.image} alt={prod.name} />
          <p>{prod.price}&euro;</p>
          <button type="button" onClick={() => handleAddToCart(prod)}>
            Add to cart
          </button>
        </div>
      ))}
    </nav>
  );
};

export default connect()(ProductList);
