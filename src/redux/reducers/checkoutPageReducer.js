import { ADD_ITEM } from "../actions/checkoutActions";

const INITIAL_STATE = {
  items: [],
};

const checkoutPageReducer = (state = INITIAL_STATE, action) => {
  const { id } = action;
  const { items } = state;

  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...items, id] };
    default:
      return state;
  };
};

export default checkoutPageReducer;
