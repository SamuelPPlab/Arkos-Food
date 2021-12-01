import { fetchStock } from "../../APIs/fakeProducts";

export const LOADING_MAIN = 'LOADING_MAIN';
export const SUCCESS_MAIN = 'SUCCESS_MAIN';
export const ERROR_MAIN = 'ERROR_MAIN';

const loading = () =>({ type: LOADING_MAIN });
const success = (stock) => ({ type: SUCCESS_MAIN, stock });
const errorMain = (error) => ({ type: ERROR_MAIN, error });

export const fetchMainData = () => ((dispatch) => {
  dispatch(loading());
  return fetchStock().then(
    (r) => dispatch(success(r)),
    (e) => dispatch(errorMain(e)),
  );
});
