import React from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
	Alert,
	NativeModules,
	TextInput,
	Platform,
} from 'react-native';
import { CardSection, Spinner, ButtonWithBackground } from '../../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import {
	loginUser,
	loginPending,
	fbLogin,
	gmailLogin,
	check,
	twitterLogin,
	passwordRecover,
	loginRequest,
	resetUserState,
} from '../../Stores/Actions';


import { Field, reset, reduxForm } from 'redux-form';
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Color } from '../../common/color/Color';
import { validate } from '../../common/validate/validate';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import i18n from "../../../i18n/i18n";
const { RNTwitterSignIn } = NativeModules;



const renderInput = ({
	label,
	keyboardType,
	placeholder,
	placeholderTextColor,
	name,
	iconName,
	underlineColorAndroid,
	secureTextEntry,
	value,
	meta: { touched, error, warning },
	input: { onChange, ...restInput },
}) => {
	return (
		<View style={styles.formWrapper}>
			<View style={styles.inputWrapper}>
				<CrossPlatformIcon name={iconName} color={Color.White} size={25} style={styles.iconInput} />
				<TextInput
					keyboardType={keyboardType}
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor}
					underlineColorAndroid="transparent"
					style={styles.inputText}
					onChangeText={onChange}
					secureTextEntry={secureTextEntry}
					value={value}
					{...restInput}
				/>
			</View>
			{touched && (error && <Text style={styles.error}>{error}</Text>)}
		</View>
	);
};
const btnColor = Platform.select({
	ios: Color.White,
	android: Color.Primary ,
  });

class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			login: false,
			twitterLogin: false,
			isLogin: false,
		};
		// this.onLoginPressHandle = this.onLoginPressHandle.bind(this);
		// this.setupGoogleSignin();
		this.resetUserData();
	}
	
   resetUserData(){
	   this.props.reset();
   }

	// showAlert(error_message) {
	// 	Alert.alert(
	// 		'Error ',
	// 		'Invalid email or password',
	// 		[
	// 			{
	// 				text: 'OK',
	// 				onPress: () => {
	// 					this.props.resetUserState();
	// 					this.props.reset();
	// 				},
	// 			},
	// 		],
	// 		{
	// 			cancelable: false,
	// 		}
	// 	);
	// }

	onLoginPressHandle(e) {
		this.props.loginRequest();	
		this.props.loginUser(this.state.email, this.state.password);
	}

	render() {
		const {
			subContainer,
			logoImgWrapper,
			logo,
			subText,
			socialBtnWrapper,
			socialBtn,
			socialBtnImg,
		} = styles;
		return (
			<ImageBackground
				source={require('../../Images/bg/login_bg.jpg')} style={styles.bckImg}
			>
				<ScrollView style={subContainer} keyboardDismissMode="on-drag" keyboardShouldPersistTaps={true}>
					<View style={logoImgWrapper}>
						<Image source={require('../../Images/logo.png')} style={logo} resizeMode={'contain'} />
					</View>
					<View>
						<Field
							keyboardType="email-address"
							iconName="mail"
							placeholder="Email"
							name="email"
							value={this.state.email}
							placeholderTextColor={Color.White}
							component={renderInput}
							onChange={val => this.setState({ email: val })}
						/>
						<Field
							secureTextEntry
							iconName="lock"
							placeholder="Password"
							name="password"
							value={this.state.password}
							placeholderTextColor={Color.White}
							component={renderInput}
							onChange={val => this.setState({ password: val })}
						/>
					</View>

					<CardSection>
						<View style={styles.loginBtn}>
						<View style={styles.loginBtnChild}>
                            <ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.onLoginPressHandle(e)}
                                    disabled={ !this.state.password ||  !this.state.email } >
                                          {i18n.t('Sign In')}
                                     </ButtonWithBackground>
							</View>
							{this.props.loading ? <Spinner style={styles.loginBtnSpinner} Color = {Color.Gray}/> : null}
						</View>
					</CardSection>
					<TouchableOpacity onPress={() => Actions.forgotPassword()}>
                    						<Text style={subText}>{i18n.t('FORGOT PASSWORD ?')}</Text>
                    					</TouchableOpacity>
{/* 					
					<Text style={subText}>{i18n.t('Or Sign With')}</Text>
					<CardSection style={socialBtnWrapper}>
						<TouchableOpacity style={socialBtn} onPress={() => this.fbAuth()}>
							<Image
								source={require('../../Images/icon/facebook.png')}
								style={socialBtnImg}
								resizeMode={'contain'}
							/>
						</TouchableOpacity> */}
						
						{/* <TouchableOpacity style={socialBtn} onPress={() => this._twitterSignIn()}>
							<Image
								source={require('../../Images/icon/twitter.png')}
								style={socialBtnImg}
								resizeMode={'contain'}
							/>
						</TouchableOpacity> */}

					{/* </CardSection> */}


					<TouchableOpacity onPress={() => Actions.register()}>
						<Text style={subText}> {i18n.t('Do not have an account ???')} </Text>
					</TouchableOpacity>
				</ScrollView>
			</ImageBackground>
		);
	}
}

const mapStateToProps = state => {
	
	const { user, pending, isLoggedIn, loading, showTost } = state.auth;
	return {
		user,
		pending,
		isLoggedIn,
		
		loading,
		showTost,
		initialValues: { email: 'san@gmail.com', password: '123456' }
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			loginUser,
			loginPending,
			fbLogin,
			gmailLogin,
			twitterLogin,
			check,
			resetUserState,
			loginRequest,
			passwordRecover
		},
		dispatch
	);
};

LoginScreen = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen);
export default reduxForm({ validate, form: 'loginForm' })(LoginScreen);
