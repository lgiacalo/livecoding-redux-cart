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
    default:
      return state;
  }
}
