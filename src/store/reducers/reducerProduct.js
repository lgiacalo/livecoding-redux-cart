import {
  FETCH_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../actions/types';

const initialState = [];

export default function reducerProduct(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      return action.products;
    }
    case ADD_TO_CART: {
      return state.reduce((acc, prod) => {
        if (prod.id === action.product.id && prod.stock > 0)
          return [...acc, { ...prod, stock: prod.stock - 1 }];
        return [...acc, prod];
      }, []);
    }
    case REMOVE_FROM_CART:
      return state.reduce((acc, prod) => {
        if (prod.id === action.product.id)
          return [...acc, { ...prod, stock: prod.stock + 1 }];
        return [...acc, prod];
      }, []);
    default:
      return state;
  }
}
