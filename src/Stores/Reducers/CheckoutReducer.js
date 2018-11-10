import types from "../Actions/types";

const INITIAL_STATE = { orders: {}, loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.POST_ORDER_SUCCESS:
      return { ...state, orders: action.payload };

    default:
      return state;
  }
};
