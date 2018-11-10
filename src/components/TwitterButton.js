import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, NativeModules, TouchableOpacity } from 'react-native';

const { RNTwitterSignIn } = NativeModules;

const Constants = {
	//Dev Parse keys
	TWITTER_COMSUMER_KEY: 'a5x12jOaLowxZcLsKQurfYvaP',
	TWITTER_CONSUMER_SECRET: 'NC33lq7MWgrAga456vk9u6ezg7bVsjeHc6DgT5x8CKOvCGSw1o',
};

export default class TwitterButton extends Component {
	state = {
		isLoggedIn: false,
	};

	_twitterSignIn = () => {
		RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET);
		RNTwitterSignIn.logIn()
			.then(loginData => {
				console.log(loginData);
				const { authToken, authTokenSecret } = loginData;
				if (authToken && authTokenSecret) {
					this.setState({
						isLoggedIn: true,
					});
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	handleLogout = () => {
		console.log('logout');
		RNTwitterSignIn.logOut();
		this.setState({
			isLoggedIn: false,
		});
	};

	render() {
		const { isLoggedIn } = this.state;
		return (
			<View style={{ flex: 1 }}>
				{isLoggedIn ? (
					<TouchableOpacity onPress={this.handleLogout}>
						<Text>Log out</Text>
					</TouchableOpacity>
				) : (
					<Text onPress={this._twitterSignIn}>Login with Twitter</Text>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 200,
		height: 50,
	},
});
