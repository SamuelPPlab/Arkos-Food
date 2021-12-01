import { fetchItemByID } from "../../APIs/fakeProducts";

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';

export const addItemToCart = (id) => ({ type: ADD_ITEM, id });

const addItemsToProductList = (products) => ({ type: ADD_PRODUCTS, products });

export const fetchAllCartItems = (items) => (async (dispatch) => (
  await Promise.all(items.map((id) => fetchItemByID(id))).then((r) => dispatch(addItemsToProductList(r)))
));
