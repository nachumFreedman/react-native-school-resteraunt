import types from "../Actions/types";

const INITIAL_STATE = {
  rating: "",
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case types.RATING_SUCCESS:
      return {
        ...state,
        rating: action.payload,
        loading: false
      };

    // case types.RATING_FETCH_SUCCESS:
    //   return {
    //     ...state,
    //     rating: action.payload
    //   };

    default:
      return state;
  }
};
