import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_TO_CART,
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

    case ADD_TO_CART: {
      // ajouter au cart { id: 1, qty: 1, price }
      const { cart } = state;
      const { product } = action;
      const foundInCart = cart.find((item) => item.id === product.id);
      const newCart = foundInCart
        ? cart.map((item) =>
            item.id === foundInCart.id
              ? { ...foundInCart, qty: foundInCart.qty + 1 }
              : item,
          )
        : [...cart, { id: product.id, qty: 1, price: product.price }];
      return {
        ...state,
        cart: newCart,
      };
    }
    default:
      return state;
  }
}
