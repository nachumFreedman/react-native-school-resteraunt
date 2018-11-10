import types from "../Actions/types";

const INITIAL_STATE = { contact: "" , loading: false};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CONTACT_SUCCESS:
      return { ...state, contact: action.payload, loading: false };
     
    case types.CONTACT_REQUEST:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }

};
