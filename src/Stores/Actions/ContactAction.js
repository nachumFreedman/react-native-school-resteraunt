import axios from 'axios';
import { Constants } from '../../common/constant/Constants';
import types from './types';
import { AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';

export const contactWith = mailData => {

	// var body = JSON.stringify(mailData);

	// console.log('body -' + body);

	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			// console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			//   console.log("headers -->" + JSON.stringify(headers));
			//   console.log("contact....");
			axios
				.post(Constants.base_url + 'api/contacts/', body, { headers })
				.then(response => {
					// console.log(
					//   "contact update successfully---->" + JSON.stringify(response.data)
					// );
					dispatch({ type: types.CONTACT_SUCCESS, payload: response.data });
					Actions.drawerClose();
					Actions.homeScreen();
				})
				.catch(e => 
					console.log(e.response)
				);
		});
	};
};
export const contactRequest = () => {
	return {
		type: types.CONTACT_REQUEST,
	};
};