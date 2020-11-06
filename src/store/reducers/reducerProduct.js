import { FETCH_PRODUCTS_SUCCESS } from '../actions/types';

const initialState = [];

export default function reducerProduct(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      return action.products;
    }

    default:
      return state;
  }
}
