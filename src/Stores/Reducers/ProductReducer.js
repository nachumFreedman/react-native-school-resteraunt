import types from "../Actions/types";

const INITIAL_STATE = {
  productList: [],
  productDetail: [],
  offerItem: [],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  //console.log("action.type-"+JSON.stringify(action));

  switch (action.type) {
    case types.FETCH_PRODUCT_LIST_SUCCESS:
      return { ...state, productList: action.payload, loading: false };

    case types.FETCH_PRODUCT_BY_ID_SUCCESS:
      return { ...state, productDetail: action.payload,loading: false };

    case types.OFFER_MENUITEMS_FETCH_SUCCESS:
      return { ...state, offerItem: action.payload,loading: false };

    default:
      return state;
  }
};
