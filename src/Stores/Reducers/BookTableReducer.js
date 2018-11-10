import types from "../Actions/types";

const INITIAL_STATE = { history: [], loading: true };

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case types.ADD_TABLE_BY_USER:
      return { ...state, history: action.payload };

    case types.USERS_BOOK_TABLE_DATA_FETCH_BY_ID_SUCCESS:
      return { ...state, history: action.payload, loading: false };

    default:
      return state;
  }
};
