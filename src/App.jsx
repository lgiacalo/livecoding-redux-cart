import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './App.css';

const products = [
  {
    id: 1,
    price: 700,
    name: 'Apple Macbook',
    image:
      'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg',
    stock: 2,
  },
  {
    id: 2,
    price: 900,
    name: 'Lenovo IdeaPad',
    image:
      'https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg',
    stock: 3,
  },
  {
    id: 3,
    price: 1000,
    name: 'Dell XPS',
    image:
      'https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg',
    stock: 1,
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
