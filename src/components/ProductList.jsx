import React from 'react';

const ProductList = ({ products }) => (
  <nav className="ProductList">
    {products.map((prod) => (
      <div className="ProductCard">
        <h3>{prod.name}</h3>
        <img src={prod.image} />
        <p>{prod.price}&euro;</p>
        <button type="button">Add to cart</button>
      </div>
    ))}
  </nav>
);

export default ProductList;
