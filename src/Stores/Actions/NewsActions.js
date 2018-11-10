import axios from "axios";
import { Constants } from "../../common/constant/Constants";
import types from "./types";

export const fetchNews = () => {
  return dispatch => {
    axios.get(Constants.base_url + "api/news").then(response => {
      
      dispatch({ type: types.NEWS_FETCH_SUCCESS, payload: response.data });
    });
  };
};

export const fetchNewsById = id => {
  //console.log("id in action -->"+id);
  return dispatch => {
    axios.get(Constants.base_url + "api/news/" + id).then(news => {
      //console.log("details from server -->"+JSON.stringify(news));
      dispatch({ type: types.NEWS_FETCH_By_Id_SUCCESS, payload: news.data });
    });
  };
};
