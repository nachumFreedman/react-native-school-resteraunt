import axios from 'axios';
import { Constants } from '../../common/constant/Constants';
import types from './types';
import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';
import {Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';


export const loginUser = (email, password) => {
	var body = JSON.stringify({
		email: email,
		password: password,
	});
	//console.log("email & pass-" + body);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	//console.log("header-->" + JSON.stringify(config));
	return dispatch => {
		axios
			.post(Constants.base_url + 'auth/local', body, config)
			.then(response => {
				const token = 'bearer ' + response.data.token;
				// console.log(' user actions token', token);
				AsyncStorage.setItem('token', token.toString()).then(res => {
					// console.log('set ........');
				});
				dispatch({ type: types.LOGIN_USER_SUCCESS, payload: response.data });
				Actions.drawerClose();
				Actions.mainScreen();
				Toast.show('Successfully LoggedIn');
			})
			.catch(error => {
				const error_message = error.response.data.message;
				//console.log("error_message ", error_message);
				dispatch({
					type: types.LOGIN_USER_FAIL,
					payload: error_message,
				});
				Alert.alert(
					'Error ',
					'Invalid email or password',
					[
						{
							text: 'OK',
							onPress: () => {
								resetUserState();
							
							},
						},
					],
					{
						cancelable: false,
					}
				);
			});
	};
};

export const loginRequest = () => {
	return {
		type: types.LOGIN_REQUEST,
	};
};

export const initialRequest = () => {
	return {
		type: types.INITIAL_REQUEST,
	};
};

export const resetUserState = () => {
	return {
		type: types.RESET_USER_STATE,
	};
};

export const loginPending = () => {
	console.log('user login pending--->');
	return {
		type: types.USER_LOGIN_PENDING,
	};
};

export const logOut = () => {
	console.log('user logout--->');
	return {
		type: types.LOG_OUT,
	};
};

export const registerUser = (email, password, name, mobileNumber) => {
	console.log('----');
	let data = {
		email: email,
		password: password,
		name: name,
		phone: mobileNumber,
	};
	console.log('body -' + JSON.stringify(data));
	return dispatch => {
		axios
			.post(Constants.base_url + 'api/users/', JSON.stringify(data), {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			
			.then(response => {
				console.log('user registered sucessfully:' + response);
				dispatch({ type: types.REGISTER_USER_SUCCESS, payload: response.data });
				Actions.login();
		     	Toast.show('Successfully Registered');
			})
			  .catch(error => {
				console.log('Error -' + error);
                Alert.alert(
					'Error ',
					'This Email already registered',
					[
						{
							text: 'OK',
							onPress: () => {
								resetUserState();
			
							},
						},
					],
					{
						cancelable: false,
					}
				);
			});
	};
};

export const fetchUserById = () => {
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			axios
				.get(Constants.base_url + `api/users/me`, { headers })
				.then(response => {
					console.log('user details -->' + JSON.stringify(response.data));
					dispatch({
						type: types.USERS_DATA_FETCH_BY_ID_SUCCESS,
						payload: response.data,
					});
				})
				.catch(error => {
					console.log('Error -' + JSON.stringify(error));
				});
		});
	};
};

export const updateUser = (name, email, phone, userId, image) => {
	let data = JSON.stringify({
		name: name,
		email: email,
		phone: phone,
		imageUrl: image,
	});
	// console.log('userdata---' + data);
	// console.log('id---' + userId);
	return dispatch => {
		var access_token = AsyncStorage.getItem('token').then(authToken => {
			// console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
			// console.log('header----', JSON.stringify(headers));
			axios
				.put(Constants.base_url + `api/users/${userId}`, data, { headers })
				.then(response => {
					// console.log('updated-' + JSON.stringify(response.request._response));
					dispatch({ type: types.USER_DATA_UPDATE, payload: response.data });
					Actions.drawerClose();
					Actions.homeScreen();
					Toast.show('Update user information successfully.');
				})
				.catch(error => {
					// console.log('error-' + JSON.stringify(error));
				});
		});
	};
};

export const check = () => {
	console.log('wotdt dtyd');
};
export const fbLogin = userData => {
	var body = userData;
	console.log('body----' + body);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	return dispatch => {
		const request = axios
			.post(Constants.base_url + 'api/users/auth/facebook', body, config)
			.then(response => {
				console.log('user facebook login sucessfully:' + JSON.stringify(response));
				dispatch({
					type: types.FACEBOOK_LOGIN_SUCCESS,
					payload: response.data,
				});
			})
			.catch(error => {
				console.log('Error -' + JSON.stringify(error));
			});
	};
};

export const gmailLogin = userData => {
	// console.log('welcome to gmail login');
	var body = JSON.stringify(userData);
	//console.log("email & pass-" + body);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	return dispatch => {
		axios
			.post(Constants.base_url + 'api/users/auth/google/', body, config)
			.then(response => {
				// console.log('user gmail login sucessfully:' + JSON.stringify(response));
				dispatch({
					type: types.GMAIL_LOGIN_SUCCESS,
					payload: response.data,
				});
			})
			.catch(error => {
				// console.log('Error -' + JSON.stringify(error));
			});
	};
};

export const twitterLogin = userData => {
	// console.log('welcome to twitter login');
	var body = JSON.stringify(userData);
	//console.log("email & pass-" + body);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	return dispatch => {
		axios
			.post(Constants.base_url + 'api/users/auth/twitter', body, config)
			.then(response => {
				// console.log('user twitter login sucessfully:' + JSON.stringify(response));
				dispatch({
					type: types.TWITTER_LOGIN_SUCCESS,
					payload: response.data,
				});
			})
			.catch(error => {
				// console.log('Error -' + JSON.stringify(error));
			});
	};
};  

export const passwordRecover = userData => {
	let data = {
		email: userData
	};
    // console.log('data', data);
	var headers = {
		'Content-Type': 'application/json',
	};
	
	return dispatch => {
		axios
			.post(Constants.base_url + 'api/users/password/otp/', data, headers)
			.then(response => {
	            // console.log('sucessfully send token:' + JSON.stringify(response));
				dispatch({ type: types.PASSWORD_RECOVERY, payload: response.data });
				Alert.alert(
					'Check your email',
					response.data.message,
					[
						{
							text: 'OK',
							onPress: () => {
								Actions.otp({email: userData});
							},
						},
					],
					{
						cancelable: false,
					}
				);
				
			})
			.catch(e => 
				{
					const error_message = e.response.data.message;
					dispatch({
						type: types.ERROR_MSG,
						payload: error_message,
					});
					Alert.alert(
						'Error ',
						error_message,
						[
							{
								text: 'OK',
								onPress: () => {
									resetUserState();
								},
							},
						],
						{
							cancelable: false,
						}
					);
				}
			);
	};
};

export const emailVerify = (email,otp) => {
	let data = JSON.stringify({	
		email: email,
		otp: otp
	});
    // console.log('data',data);
	return dispatch => {
			var headers = {
				'Content-Type': 'application/json',
			};
	     	axios.post(Constants.base_url + 'api/users/password/verification/', data, {
				headers,
			})
			.then(response => {
				const token = 'bearer ' + response.data.token;
				// console.log(' user actions token', token);
				AsyncStorage.setItem('otpToken', token.toString()).then(res => {
					// console.log('set ........');
				});
				// console.log('OTP verified:' + JSON.stringify(response));
				dispatch({ type: types.OTP_GENERATE, payload: response.data });
				Alert.alert(
					'Wow!! ',
					 response.data.message,
					[
						{
							text: 'OK',
							onPress: () => {
								Actions.confirmPassword();
							},
						},
					],
					{
						cancelable: false,
					}
				);
				
				
			})
			.catch( e  => 
				Alert.alert(
				'Oops!! ',
				response.data.message,
				[
					{
						text: 'OK',
						onPress: () => {
						  console.log('ok');
						},
					},
				],
				{
					cancelable: false,
				}
			)
		);

};

}

export const resetPassword = (newPass) => {
	let data ={
		newPass: newPass
	};
	// console.log(data);
	return dispatch => {
		var access_token = AsyncStorage.getItem('otpToken').then(authToken => {
			// console.log('access_token-' + JSON.stringify(authToken));
			var headers = {
				'Content-Type': 'application/json',
				Authorization: authToken,
			};
		axios
			.post(Constants.base_url + 'api/users/password/reset/', data, {
				headers,
			})
			.then(response => {
				// console.log('sucessfully reset password:' + JSON.stringify(response));
				dispatch({ type: types.RESET_PASSWORD, payload: response.data });
				Actions.login();
				Alert.alert(
					'Wow!! ',
					'Your password is reset.',
					[
						{
							text: 'OK',
							onPress: () => {
								Actions.login();
							},
						},
					],
					{
						cancelable: false,
					}
				);
			})
			.catch(e => console.log(e.response));
		});
	};
};
