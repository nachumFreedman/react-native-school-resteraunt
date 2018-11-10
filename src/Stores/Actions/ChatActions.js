import axios from 'axios';
import { Constants } from '../../common/constant/Constants';
import types from './types';
import { AsyncStorage } from 'react-native';

export const postChat = message => {
	let data = JSON.stringify(message);
	//	console.log('chat - body --->' + data);
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			//	console.log('post header', JSON.stringify(headers));
			axios
				.post(Constants.base_url + 'api/messages/', data, { headers })
				.then(response => {
					//	console.log('chat through----' + JSON.stringify(response.data));
					dispatch({ type: types.POST_CHAT_SUCCESS, payload: response.data });
				})
				// .catch(e => console.log(e));
		});
	};
};

export const textChanged = text => {
	return {
		type: types.TEXT_CHANGED,
		payload: text,
	};
};

export const getChatList = sellerId => {
	console.log('sellerId- in Actions->' + sellerId);

	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			//	console.log('access_token-' + JSON.stringify(authToken));
			var headers = { Authorization: authToken };
			//	console.log('headers -->' + JSON.stringify(headers));
			axios.get(Constants.base_url + `api/messages/user/${sellerId}`, { headers }).then(response => {
				//	console.log('chat-List -->' + JSON.stringify(response.data));
				dispatch({
					type: types.FETCH_CHAT_lIST_SUCCESS,
					payload: response.data,
				});
			});
		});
	};
};

export const getRestaurantInfo = () => {
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			var headers = { Authorization: authToken };

			axios.get(Constants.base_url + `api/users/store/info`, { headers }).then(response => {
				//	console.log('resturant info -->' + JSON.stringify(response));
				dispatch({
					type: types.FETCH_RESTAURANT_INFO_SUCCESS,
					payload: response.data,
				});
			});
		});
	};
};

export const saveHistory = message => {
	//	console.log('SAVE CHAT-action----');
	return { type: types.SAVE_CHAT_HISTORY, payload: message };
};

export const updateChat = message => {
	//	console.log('SAVE CHAT-action----');
	return { type: types.UPDATE_CHAT_LIST, payload: message };
};
