import axios from "axios";
import { Constants } from "../../common/constant/Constants";
import types from "./types";
import { AsyncStorage } from "react-native";
import {Actions} from 'react-native-router-flux';

export const ratingStatus = (menuItem,order,rating,comment) => {
  // console.log("welcome");
  var body = JSON.stringify({
    menuItem: menuItem,
    order: order,
    rating:rating,
    comment:comment
  });

  //  console.log("body -" + body);

  return dispatch => {
    var access_token = AsyncStorage.getItem("token").then(authToken => {
      // console.log("access_token-" + JSON.stringify(authToken));
      var headers = {
        "Content-Type": "application/json",
        Authorization: authToken
      };
      // console.log("headers -->" + JSON.stringify(headers));
      // console.log("rating....");
      axios
        .post(Constants.base_url + "api/ratings", body, { headers })
        .then(response => {
          // console.log(
          //   "rating update successfully---->" + JSON.stringify(response.data)
          // );
          dispatch({ type: types.RATING_SUCCESS, payload: response.data });
          Actions.drawerClose();
          Actions.mainScreen();
        })
        .catch(e => console.log(e.response));
    });
  };
};

// export const fetchRating = orderId => {
//   return dispatch => {
//     axios.get(Constants.base_url + `api/ratings/${orderId}`).then(response => {
//       dispatch({
//         type: types.RATING_FETCH_SUCCESS,
//         payload: response.data
//       });
//     });
//   };
// };
