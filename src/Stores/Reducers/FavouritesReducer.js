import types from "../Actions/types";

const INITIAL_STATE = {
  item: "",
  items: [],
  isChecked: false
};

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case types.ADD_ITEM_FAVOURITE:
      return {
        ...state,
        item: action.payload,
        isChecked: true
      };

    case types.FETCH_FAVOURITE_ITEM:
      return { ...state, items: action.payload };

    case types.CHECK_FAVOURITE_ITEM_SUCCESS:
      return { ...state, isChecked: action.payload.resflag };

    case types.DELETE_FAVOURITE_ITEM_SUCCESS:
      return { ...state, item: action.payload, isChecked: false };

    default:
      return state;
  }
};
