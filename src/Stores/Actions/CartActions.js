import axios from 'axios';
import { Constants } from '../../common/constant/Constants';
import types from './types';
import { AsyncStorage } from 'react-native';

export const addToCart = product => {
	// console.log("add-action----");
	return { type: types.ADD_CART_ITEM, product: product };
};

export const removeCartItem = product => {
	//  console.log("remove action-----");
	return { type: types.REMOVE_CART_ITEM, product: product };
};

export const clearCartItem = product => {
	//  console.log("remove action-----");
	return { type: types.CLEAR_CART_ITEM, product: product };
};

export const deleteCartItem = product => {
	//  console.log("delete action-----");
	return { type: types.DELETE_CART_ITEM, product: product };
};

export const fetchCartItems = () => {
	return { type: types.FETCH_CART_ITEMS };
};

export const fetchCartCoupon = () => {
	//  console.log("cart coupon");
	//var headers= { 'Authorization': getAuthToken() }
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			// console.log("access_token-" + JSON.stringify(authToken));
			var headers = { Authorization: authToken };
			// console.log("headers -->" + JSON.stringify(headers));
			axios.get(Constants.base_url + `api/coupons`, { headers }).then(response => {
				console.log("coupon from server -->" + JSON.stringify(response));
				dispatch({
					type: types.FETCH_CART_COUPON,
					payload: response.data,
				});
			});
		});
	};
};
