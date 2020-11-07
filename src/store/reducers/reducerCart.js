import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = [];

export default function reducerCart(state = initialState, action, products) {
  switch (action.type) {
    case ADD_TO_CART: {
      const prodStock = products.find((item) => item.id === action.product.id);
      if (prodStock.stock < 1) return state;
      // ajouter au cart { id: 1, qty: 1, price }
      const { product } = action;
      const foundInCart = state.find((item) => item.id === product.id);
      const newCart = foundInCart
        ? state.map((item) =>
            item.id === foundInCart.id
              ? { ...foundInCart, qty: foundInCart.qty + 1 }
              : item,
          )
        : [
            ...state,
            {
              id: product.id,
              qty: 1,
              price: product.price,
              name: product.name,
              image: product.image,
            },
          ];
      return newCart;
    }
    case REMOVE_FROM_CART: {
      return state.reduce((acc, prod) => {
        if (prod.id === action.product.id)
          return prod.qty > 1 ? [...acc, { ...prod, qty: prod.qty - 1 }] : acc;
        return [...acc, prod];
      }, []);
    }
    default:
      return state;
  }
}
