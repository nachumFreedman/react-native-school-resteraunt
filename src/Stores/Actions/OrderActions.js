import axios from "axios";
import { Constants } from "../../common/constant/Constants";
import types from "./types";
import { AsyncStorage } from "react-native";

export const fetchOrders = () => {
  // console.log("user orders");
  return dispatch => {
    let access_token = AsyncStorage.getItem("token").then(authToken => {
      // console.log("access_token-" + JSON.stringify(authToken));
      var headers = { 
        'Content-Type': 'application/json',
        Authorization: authToken
      };
      // console.log("headers -->" + JSON.stringify(headers));
      axios.get(Constants.base_url + "api/orders/user/allorders", { headers })
        .then(response => {
          console.log("orders from server -->" + JSON.stringify(response));
          dispatch({
            type: types.USERS_ORDER_FETCH_SUCCESS,
            payload: response.data
          });
        }).catch(e=> console.log(e));
    });
  };
};

export const fetchOrderDetail = orderId => {
  // console.log("user order detail");
  //var headers= { 'Authorization': getAuthToken() }
  return dispatch => {
    var access_token = AsyncStorage.getItem("token").then(authToken => {
      // console.log("access_token-" + JSON.stringify(authToken));
      var headers = { Authorization: authToken };
      // console.log("headers -->" + JSON.stringify(headers));
      axios
        .get(Constants.base_url + `api/orders/${orderId}`, { headers })
        .then(response => {
          // console.log(
          //   "order Detail from server -->" + JSON.stringify(response)
          // );
          dispatch({
            type: types.USERS_ORDER_DETAIL_FETCH_SUCCESS,
            payload: response.data
          });
        });
    });
  };
};
