import { combineReducers } from 'redux';
import reducerApi from './reducerApi';
import reducerProduct from './reducerProduct';
import reducerCart from './reducerCart';

export default combineReducers({
  network: reducerApi,
  products: reducerProduct,
  cart: reducerCart,
});
