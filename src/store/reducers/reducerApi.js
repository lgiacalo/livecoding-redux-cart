import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
};

export default function reducerApi(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
