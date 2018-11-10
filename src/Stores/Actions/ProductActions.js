import axios from "axios";
import {AsyncStorage} from "react-native";
import { Constants } from "../../common/constant/Constants";
import types from "./types";

export const fetchProductList = categoryId => {
  return dispatch => {
    axios
      .get(Constants.base_url + `api/menuItems/by/category/${categoryId}`)
      .then(productList => {
        dispatch({
          type: types.FETCH_PRODUCT_LIST_SUCCESS,
          payload: productList.data
        });
      });
  };
};

export const fetchProductById = productId => {
  //console.log("id in action -->"+menuItemId);
  return dispatch => {
    axios
      .get(Constants.base_url + `api/menuItems/${productId}`)
      .then(product => {
        //console.log("details from server -->"+JSON.stringify(menuItem.data));
        dispatch({
          type: types.FETCH_PRODUCT_BY_ID_SUCCESS,
          payload: product.data
        });
      });
  };
};

export const fetchOfferMenuItem = () => {
  console.log("offer");
  return dispatch => {
    axios.get(Constants.base_url + "api/menuItems/").then(response => {
      // console.log("offer here");
      dispatch({
        type: types.OFFER_MENUITEMS_FETCH_SUCCESS,
        payload: response.data
      });
    });
  };
};
