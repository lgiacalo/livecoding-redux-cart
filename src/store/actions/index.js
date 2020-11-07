/* eslint-disable import/prefer-default-export */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './types';
import * as api from '../../api';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const removeToCart = (product) => ({
  type: REMOVE_FROM_CART,
  product,
});

export const fetchProductsAction = (dispatch) => async () => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  setTimeout(() => {
    api
      .fetchProducts()
      .then((products) => {
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, products });
      })
      .catch((error) => dispatch({ type: FETCH_PRODUCTS_FAILURE, error }));
  }, 550);
};
