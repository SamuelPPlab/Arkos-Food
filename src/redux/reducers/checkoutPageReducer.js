import { ADD_ITEM, ADD_PRODUCTS, CLEAR_SHOPPING_CART, REMOVE_ITEM } from "../actions/checkoutActions";

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
    case REMOVE_ITEM:
      const currentItemList = items;
      currentItemList.splice(currentItemList.indexOf(id), 1);
      return { ...state, products: state.products.filter(({ key }) => key !== action.key), items: currentItemList };
    case CLEAR_SHOPPING_CART:
      return { ...INITIAL_STATE };
    default:
      return state;
  };
};

export default checkoutPageReducer;
