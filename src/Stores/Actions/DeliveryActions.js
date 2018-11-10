import axios from 'axios';
import { Constants } from '../../common/constant/Constants';
import types from './types';
import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';
import { Actions } from 'react-native-router-flux';


export const addAddress = (userName, city, pincode, state, mobileNo, landmark) => {
	//	console.log('welcome');
	let data = JSON.stringify({
		userName: userName,
		city: city,
		pincode: pincode,
		state: state,
		mobileNo: mobileNo,
		landmark: landmark,
	});
	//	console.log('body' + data);
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			// console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			// console.log('headers -->' + JSON.stringify(headers));
			// console.log('prepare for doing something....');
			axios
				.post(Constants.base_url + 'api/addresses/', data, { headers })
				.then(response => {
					console.log('sucessfully add address:' + response);
					dispatch({ type: types.ADD_ADDRESS_BY_USER, payload: response.data });
					Actions.addressList();
		         	Toast.show('Successfully Add Address');
				})
				.catch(e => console.log(e.response));
		});
	};
};

export const initialAddressRequest = () => {
	return {
		type: types.INITIAL_ADDRESS_REQUEST,
	};
};


export const fetchAddressById = () => {
	//	console.log('user address');
	//var headers= { 'Authorization': getAuthToken() }
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			console.log('headers -->' + JSON.stringify(headers));
			axios.get(Constants.base_url + `api/addresses/user`, { headers }).then(response => {
				console.log('details from server -->' + JSON.stringify(response));
				dispatch({
					type: types.USERS_ADDRESS_DATA_FETCH_BY_ID_SUCCESS,
					payload: response.data,
				});
			});
		});
	};
};
// payment method

export const paymentStripe = (
	orderData,
	number,
	expMonth,
	expYear,
	cvc,
	userId,
	isSaved,
	amount,
	point,
	paymentStatus
) => {
	//console.log("orderData in Actions-" + JSON.stringify(orderData));
	let data = JSON.stringify(orderData);
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			axios
				.post(Constants.base_url + 'api/orders', data, { headers })
				.then(response => {
					var mainKey = response.data._id;
					var orderId = response.data.orderId;
					console.log('id:' + response.data.orderId);
					stripeUserInfo(
						number,
						expMonth,
						expYear,
						cvc,
						userId,
						isSaved,
						amount,
						mainKey,
						point,
						paymentStatus,
						orderId
					);
					console.log('order placed sucessfully:' + JSON.stringify(response));

					console.log('id==>' + mainKey);
					dispatch({ type: types.POST_ORDER_SUCCESS, payload: response.data });
				})
				.catch(e => console.log(e.response));
		});
	};
};

const stripeUserInfo = (
	number,
	expMonth,
	expYear,
	cvc,
	userId,
	isSaved,
	amount,
	mainKey,
	point,
	paymentStatus,
	orderId
) => {
	let data = {
		cardNumber: number,
		month: expMonth,
		year: expYear,
		cvc: cvc,
		userId: userId,
		isSaved: isSaved,
	};
	console.log('userdata---' + JSON.stringify(data));
	//  return dispatch => {
	var access_token = AsyncStorage.getItem('token').then(authToken => {
		var headers = {
			'Content-Type': 'application/json',
			Authorization: authToken,
		};
		console.log('headers--->' + headers);
		const request = axios
			.post(Constants.base_url + 'api/users/stripe/card/info', data, {
				headers,
			})
			.then(response => {
				stripePayment(userId, amount, mainKey, point, paymentStatus, orderId);
				console.log('stripe info-' + JSON.stringify(response));
				dispatch({ type: types.STRIPE_USER_INFO, payload: response.data });
			})
			.catch(error => {
				console.log('error-' + JSON.stringify(error));
			});
	});
};
//};

const stripePayment = (userId, amount, mainKey, point, paymentStatus, orderId) => {
	console.log('payment===');
	let data = {
		userId: userId,
		amount: amount,
	};
	console.log('userdata---' + JSON.stringify(data));
	// return dispatch => {
	console.log('dispatch');
	var access_token = AsyncStorage.getItem('token').then(authToken => {
		var headers = {
			'Content-Type': 'application/json',
			Authorization: authToken,
		};
		console.log('headers--->' + headers);
		const request = axios
			.post(Constants.base_url + 'api/users/stripe/payment', data, {
				headers,
			})
			.then(response => {
				var transactionId = response.data.transactionId;
				updateOrder(userId, mainKey, transactionId, point, paymentStatus, orderId);
				console.log('stripe payment-' + JSON.stringify(response));
				// console.log(
				//   "trans==>" +
				//     response.data.transactionId +
				//     "  " +
				//     mainKey +
				//     "  " +
				//     paymentStatus
				// );
				dispatch({ type: types.STRIPE_PAYMENT, payload: response.data });
			})
			.catch(error => {
				console.log('error-' + JSON.stringify(error));
			});
	});
	// };
};

const updateOrder = (userId, mainKey, transactionId, point, paymentStatus, orderId) => {
	console.log('update');
	let data = {
		payment: {
			transactionId: transactionId,
			paymentStatus: true,
		},
	};
	console.log('userdata---' + JSON.stringify(data));
	// return dispatch => {

	var headers = {
		'Content-Type': 'application/json',
	};
	const request = axios.put(Constants.base_url + `api/orders/${mainKey}`, data, headers).then(response => {
		loyalityPoint(userId, mainKey, point, orderId);
		console.log('updated-' + JSON.stringify(response));
		dispatch({ type: types.ORDER_DATA_UPDATE, payload: response.data });
	});
};
// };

const loyalityPoint = (userId, orderId, point) => {
	var body = JSON.stringify({
		userId: userId,
		orderId: orderId,
		point: point,
	});
	console.log('email & pass-' + point);
	var access_token = AsyncStorage.getItem('token').then(authToken => {
		var headers = {
			'Content-Type': 'application/json',
			Authorization: authToken,
		};
		// return dispatch => {
		const request = axios
			.post(Constants.base_url + 'api/users/total/loyalty/', body, { headers })
			.then(response => {
				console.log('loyality points successfully---->' + JSON.stringify(response));
				dispatch({ type: types.LOYALITY_POINTS, payload: response.data });
			});
	});
};
// };

export const fetchCardInfo = userId => {
	return dispatch => {
		axios.get(Constants.base_url + `api/users/card/info/data/${userId}`).then(response => {
			console.log('card info-->' + JSON.stringify(response));
			dispatch({ type: types.USERS_CARD_INFO, payload: response.data });
		});
	};
};

export const deleteCard = (userId, index) => {
	console.log('welcome');
	let data = JSON.stringify({
		userId: userId,
		index: index,
	});

	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			console.log('headers -->' + JSON.stringify(headers));
			console.log('prepare for doing something....');
			axios
				.post(Constants.base_url + 'api/users/savedcard/delete/', data, {
					headers,
				})
				.then(response => {
					console.log('sucessfully delete card:' + response);
					dispatch({ type: types.DELETE_CARD_BY_USER, payload: response.data });
				})
				.catch(e => console.log(e.response));
		});
	};
};

export const selectSaveCard = (index, userId, amount) => {
	console.log('welcome');
	let data = JSON.stringify({
		index: index,
		userId: userId,
		amount: amount,
	});

	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			console.log('headers -->' + JSON.stringify(headers));
			console.log('prepare for doing something....');
			axios
				.post(Constants.base_url + 'api/users/savedcard/stripe/payment', data, {
					headers,
				})
				.then(response => {
					console.log('sucessfully payment through save card:' + response);
					dispatch({
						type: types.PAYMENT_THROUGH_SAVED_CARD,
						payload: response.data,
					});
				})
				.catch(e => console.log(e.response));
		});
	};
};

export const deleteAddress = _id => {
	console.log('welcome');

	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			console.log('headers -->' + JSON.stringify(headers));
			console.log('prepare for doing something....11111');
			axios
				.delete(Constants.base_url + `api/addresses/${_id}`, {
					headers,
				})
				.then(response => {
					console.log('sucessfully delete card:' + response);
					dispatch({
						type: types.DELETE_ADDRESS_BY_USER,
						payload: response.data,
					});
				})
				.catch(e => console.log(e.response));
		});
	};
};

export const orderPlaceRequest = () => {
	return {
		type: types.ORDER_REQUEST,
	};
};