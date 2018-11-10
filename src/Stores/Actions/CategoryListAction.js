import axios from "axios";
import { Constants } from "../../common/constant/Constants";
import types from "./types";

export const fetchCategoryList = () => {
  
  return dispatch => {
    axios.get(Constants.base_url + "api/categories").then(response => {
      dispatch({ type: types.CATEGORY_FETCH_SUCCESS, payload: response.data });
    });
  };
};

export const fetchCategory = () => {
  return dispatch => {
    axios.get(Constants.base_url + "api/upcomings").then(response => {
      dispatch({ type: types.FETCH_LATEST_CATEGORY, payload: response.data });
    });
  };
};
