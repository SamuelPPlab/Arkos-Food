import { ADD_ITEM, ADD_PRODUCTS } from "../actions/checkoutActions";

const INITIAL_STATE = {
  items: [],
  products: [],
};

const checkoutPageReducer = (state = INITIAL_STATE, action) => {
  const { id, products } = action;
  const { items } = state;

  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: items ? [...items, id] : [id] };
    case ADD_PRODUCTS:
      return { ...state, products };
    default:
      return state;
  };
};

export default checkoutPageReducer;
