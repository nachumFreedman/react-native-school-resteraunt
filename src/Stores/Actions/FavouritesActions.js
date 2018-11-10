import axios from 'axios';
import { Constants } from '../../common/constant/Constants';
import types from './types';
import { AsyncStorage } from 'react-native';

export const addFavouriteItem = (userReaction, menuItem) => {
	// console.log('welcome');
	var body = {
		userReaction: userReaction,
		menuItem: menuItem,
	};

	// console.log('add data body -' + JSON.stringify(body));

	return dispatch => {
		// console.log('fav items---');
		let access_token = AsyncStorage.getItem('token').then(authToken => {
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			// console.log('headers -->' + JSON.stringify(headers));
			axios
				.post(Constants.base_url + 'api/favourites', body, { headers })
				.then(response => {
					console.log('favourite item sucessfully---->' + response.data);
					dispatch({ type: types.ADD_ITEM_FAVOURITE, payload: response.data });
				})
				.catch(e => console.log(e.error));
		});
	};
};

export const fetchFavouriteItems = () => {
	console.log('Favourite Item');
	//var headers= { 'Authorization': getAuthToken() }
	return dispatch => {
		// var access_token = AsyncStorage.getItem("access_token").then(authToken => {
		//   console.log("access_token-" + JSON.stringify(authToken));
		let access_token = AsyncStorage.getItem('token').then(authToken => {
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			axios.get(Constants.base_url + 'api/favourites/user/fav', { headers }).then(response => {
				console.log('Favourite Item from server -->' + JSON.stringify(response));
				dispatch({
					type: types.FETCH_FAVOURITE_ITEM,
					payload: response.data,
				});
			});
		});
	};
};

export const removeFavouriteItem = (userReaction, menuItem) => {
	console.log('check Items');
	var body = JSON.stringify({
		userReaction: userReaction,
		menuItem: menuItem,
	});

	console.log('remove data body -' + body);

	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			console.log('headers -->' + JSON.stringify(headers));
			console.log('delete to fav....');
			axios
				.post(Constants.base_url + 'api/favourites/delete/', body, { headers })
				.then(response => {
					console.log('delete favourite item sucessfully---->' + JSON.stringify(response.data));
					dispatch({
						type: types.DELETE_FAVOURITE_ITEM_SUCCESS,
						payload: response.data,
					});
				})
				.catch(e => console.log(e.response));
		});
	};
};

export const checkFavouriteItem = menuItem => {
	console.log('check Items');
	var body = JSON.stringify({
		menuItem: menuItem,
	});

	console.log('body -' + body);

	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			console.log('headers -->' + JSON.stringify(headers));
			console.log('check fav....');
			axios
				.post(Constants.base_url + 'api/favourites/check', body, { headers })
				.then(response => {
					console.log('check favourite item sucessfully---->' + JSON.stringify(response.data));
					dispatch({
						type: types.CHECK_FAVOURITE_ITEM_SUCCESS,
						payload: response.data,
					});
				})
				.catch(e => console.log(e.response));
		});
	};
};
