import { ERROR_MAIN, LOADING_MAIN, SUCCESS_FULL_STOCK, SUCCESS_MAIN } from "../actions/mainPageActions";

const INITIAL_STATE = {
  loading: true,
  stock: [],
  fullStock: [],
  error: '',
};

const mainPageReducer = (state = INITIAL_STATE, action) => {
  const { stock, error, fullStock } = action;
  switch (action.type) {
    case LOADING_MAIN:
      return { ...state, loading: true };
    case SUCCESS_MAIN:
      return { ...state, loading: false, stock };
    case SUCCESS_FULL_STOCK:
      return { ...state, loading: false, fullStock }
    case ERROR_MAIN:
      return { ...state, loading: false, error };
    default:
      return state;
  }
};

export default mainPageReducer;
