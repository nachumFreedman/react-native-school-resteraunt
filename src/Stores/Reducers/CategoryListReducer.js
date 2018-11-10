import types from "../Actions/types";

const INITIAL_STATE = { categories: [], category: [], loading: true };

export default (state = INITIAL_STATE, action) => {
  //console.log("action.type-"+JSON.stringify(action))

  switch (action.type) {
    case types.CATEGORY_FETCH_SUCCESS:
      return { ...state, categories: action.payload, loading: false };

    case types.FETCH_LATEST_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
