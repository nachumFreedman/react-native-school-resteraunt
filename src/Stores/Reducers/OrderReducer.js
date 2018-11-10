import types from "../Actions/types";
const INITIAL_STATE = {
  orderList: [],
  orderDetail: null,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  //console.log("action.type-"+JSON.stringify(action));

  switch (action.type) {
    case types.USERS_ORDER_FETCH_SUCCESS:
      return { ...state, orderList: action.payload, loading: false };

    case types.USERS_ORDER_DETAIL_FETCH_SUCCESS:
      return { ...state, orderDetail: action.payload,loading: false };

    case types.ORDER_REQUEST:
			return { ...state, loading: true };

    default:
      return state;
  }
};
