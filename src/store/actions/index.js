/* eslint-disable import/prefer-default-export */
import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const removeToCart = (product) => ({
  type: REMOVE_FROM_CART,
  product,
});
