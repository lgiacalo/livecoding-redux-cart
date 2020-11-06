import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 500,
});

// eslint-disable-next-line import/prefer-default-export
export const fetchProducts = () =>
  instance.get('/products.json').then((res) => res.data);
