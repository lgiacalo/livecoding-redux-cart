export const cartSelector = ({ cart }) => cart;
export const networkSelector = ({ network }) => network;
export const productsSelector = ({ products }) => products;

export const numberOfItemsCart = ({ cart }) =>
  cart.reduce((carry, { qty }) => carry + qty, 0);

export const totalPriceCart = ({ cart }) =>
  cart.reduce((carry, { qty, price }) => carry + qty * price, 0);
