import { fetchItemByID } from "../../APIs/fakeProducts";

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_SHOPPING_CART = 'CLEAR_SHOPPING_CART';

export const addItemToCart = (id) => ({ type: ADD_ITEM, id });

export const removeItemFromCart = (key, id) => ({ type: REMOVE_ITEM, key, id });

export const clearShoppingCart = () => ({ type: CLEAR_SHOPPING_CART })

const addItemsToProductList = (products) => ({ type: ADD_PRODUCTS, products });

export const fetchAllCartItems = (items) => (async (dispatch) => (
  await Promise.all(items.map((id) => fetchItemByID(id))).then((r) => dispatch(addItemsToProductList(r)))
));
