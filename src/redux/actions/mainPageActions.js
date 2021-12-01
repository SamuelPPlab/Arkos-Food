import { fetchStock } from "../../APIs/fakeProducts";

export const LOADING_MAIN = 'LOADING_MAIN';
export const SUCCESS_MAIN = 'SUCCESS_MAIN';
export const SUCCESS_FULL_STOCK = 'SUCCESS_FULL_STOCK';
export const PRODUCT_SEARCH = 'PRODUCT_SEARCH';
export const ERROR_MAIN = 'ERROR_MAIN';

const loading = () =>({ type: LOADING_MAIN });
const success = (stock) => ({ type: SUCCESS_MAIN, stock });
const successFullStock = (fullStock) => ({ type: SUCCESS_FULL_STOCK, fullStock });
const errorMain = (error) => ({ type: ERROR_MAIN, error });

export const productSearch = (query) => ({ type: PRODUCT_SEARCH, query });

export const fetchMainData = (limit) => ((dispatch) => {
  dispatch(loading());
  return fetchStock(limit).then(
    (r) => dispatch(success(r)),
    (e) => dispatch(errorMain(e)),
  );
});

export const fetchAllProducts = () => ((dispatch) => {
  return fetchStock().then(
    (r) => dispatch(successFullStock(r)),
    (e) => dispatch(errorMain(e)),
  );
});
