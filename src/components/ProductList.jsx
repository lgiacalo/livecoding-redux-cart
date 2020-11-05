import React from 'react';
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
          <button type="button" onClick={() => handleAddToCart(prod)}>
            Add to cart
          </button>
        </div>
      ))}
    </nav>
  );
};

const mapDispatchToProps = {
  handleAddToCart: addToCart,
};

// const mapDispatchToProps = (dispatch) => ({
//   handleAddToCart: product => addToCart(product)
// })

export default connect(null, mapDispatchToProps)(ProductList);
