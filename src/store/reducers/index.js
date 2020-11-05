import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../actions/types';

const initialState = {
  network: {
    isLoading: false,
    error: null,
  },
  products: [],
  cart: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      const { network } = state;
      return {
        ...state,
        network: { ...network, isLoading: true },
      };
    }

    case FETCH_PRODUCTS_SUCCESS: {
      const { network } = state;
      const { products } = action;
      return {
        ...state,
        products,
        network: { ...network, isLoading: false, error: null },
      };
    }

    case FETCH_PRODUCTS_FAILURE: {
      const { network } = state;
      const { error } = action;
      return {
        ...state,
        network: { ...network, isLoading: false, error: error.message },
      };
    }
    default:
      return state;
  }
}
