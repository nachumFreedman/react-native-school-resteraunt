import axios from 'axios';
import { Constants } from '../../common/constant/Constants';
import types from './types';
import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';

export const bookTable = (time, date, person) => {
	let data = JSON.stringify({
		time: time,
		date: date,
		person: person,
	});
	// console.log("body=="+ data);
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			// console.log("access_token-" + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			axios
				.post(Constants.base_url + 'api/booktables', data, { headers })
				.then(response => {
					//   console.log("sucessfully book table:" + response)
					dispatch({ type: types.ADD_TABLE_BY_USER, payload: response.data });
					Actions.drawerClose();
					Actions.homeScreen();
			        Toast.show('Successfully Booked Table');
				})
				.catch(e => console.log(e.response));
		});
	};
};

export const fetchBookTableHistory = (id) => {
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			var headers = { Authorization: authToken };
			axios.get(Constants.base_url + `api/booktables/user/${id}`, { headers }).then(response => {
				// console.log("details from server -->" + JSON.stringify(response));
				dispatch({
					type: types.USERS_BOOK_TABLE_DATA_FETCH_BY_ID_SUCCESS,
					payload: response.data,
				});
			});
		});
	};
};
