// import { combineReducers } from 'redux';
import reducerApi from './reducerApi';
import reducerProduct from './reducerProduct';
import reducerCart from './reducerCart';

// export default combineReducers({
//   network: reducerApi,
//   products: reducerProduct,
//   cart: reducerCart,
// });

export const rootReducer = (state = {}, action) => {
  return {
    network: reducerApi(state.network, action),
    products: reducerProduct(state.products, action),
    cart: reducerCart(state.cart, action, state.products),
  };
};

export default rootReducer;
