import axios from 'axios';
import { Constants } from '../../common/constant/Constants';
import types from './types';
import { AsyncStorage } from 'react-native';

export const placeOrder = orderData => {
	//console.log("orderData in Actions-" + JSON.stringify(orderData));
	let data = JSON.stringify(orderData);
	return dispatch => {
		
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			//console.log("access_token-" + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			axios
				.post(Constants.base_url + 'api/orders', data, { headers })
				.then(response => {
					//  console.log("order placed sucessfully:" + JSON.stringify(response));

					dispatch({ type: types.POST_ORDER_SUCCESS, payload: response.data });
					
				})
				.catch(e => console.log(e.response));
		});
	};
};

const loyalityPoint = (userId, orderId, point) => {
	var body = JSON.stringify({ userId: userId, orderId: orderId, point: point });
	//console.log("email & pass-" + body);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	// return dispatch => {
	const request = axios
		.post(Constants.base_url + 'auth/local', body, config)
		.then(response => {
			//   console.log(
			//     "loyality points successfully---->" + JSON.stringify(response)
			//   );
			dispatch({ type: types.LOYALITY_POINTS, payload: response.data });
		})
		.catch(error => {
			//  console.log("Error-" + JSON.stringify(error.response));
		});
};
// };
