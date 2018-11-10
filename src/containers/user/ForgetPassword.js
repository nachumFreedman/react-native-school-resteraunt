import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import { CardSection, Spinner, ButtonWithBackground } from '../../components';
import { Color } from '../../common/color/Color';
import { connect } from 'react-redux';
import { passwordRecover ,resetUserState, initialRequest} from '../../Stores/Actions';
import { validate } from '../../common/validate/validate';
import { Field,reset, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import i18n from '../../../i18n/i18n';

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

class ForgetPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
		};
		this.resetUserData();
	}
	
   resetUserData(){
	   this.props.reset();
   }
	// showAlert(message) {
	// 	Alert.alert(
	// 		'Error ',
	// 		message,
	// 		[
	// 			{
	// 				text: 'OK',
	// 				onPress: () => {
	// 					this.props.resetUserState();
	// 				},
	// 			},
	// 		],
	// 		{
	// 			cancelable: false,
	// 		}
	// 	);
	// }

	

	//email verification for forgetting password
	onEmailSubmitHandler(e) {
		if (this.state.email == '') {
			Alert.alert('Please!', ' Enter Email !', [{ text: 'OK', onPress: () => console.log('ok') }], {
				cancelable: false,
			});
		} else {
			  this.props.initialRequest();
			  this.props.passwordRecover(this.state.email);
		   };
		}
	

	static navigationOptions = {
		header: null,
	};

	render() {
		const {
			subContainer,
			logoImgWrapper,
			logo,
			subText,
			loginBtn,
			loginBtnWrapper,
			InfoTextWrapper,
			InfoText,
		} = styles;
		return (
			<ImageBackground
				source={require('../../Images/bg/login_bg.jpg')}
				style={styles.bckImg}
			>
				<ScrollView style={subContainer}>
					<View style={logoImgWrapper}>
						<Image source={require('../../Images/logo.png')} style={logo} resizeMode={'contain'} />
					</View>
					<View style={InfoTextWrapper}>
						<Text style={InfoText}>
							{i18n.t('Submit your registered email address we will send the link to change the password.')}
						</Text>
					</View>
					<View>
						<Field
							keyboardType="email-address"
							iconName="person"
							placeholder="Email"
							name="email"
							value={this.state.email}
							placeholderTextColor={Color.White}
							component={renderInput}
							onChange={val => this.setState({ email: val })}
						/>
					</View>
					<CardSection>
						<View style={styles.loginBtn}>
						<View style={styles.loginBtnChild}>
                            <ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.onEmailSubmitHandler(e)}
                                    disabled={ !this.state.email } >
                                         {i18n.t('Submit')}
                                     </ButtonWithBackground>
							</View>
							{this.props.loading ? <Spinner style={styles.loginBtnSpinner} Color = {Color.Gray}/> : null}
						</View>
					</CardSection>
					<Text style={subText}>Or</Text>
					<TouchableOpacity onPress={() => Actions.login()}>
						<Text style={subText}>{i18n.t('Go To Logging')}</Text>
					</TouchableOpacity>
				</ScrollView>
			</ImageBackground>
		);
	}
}

const mapStateToProps = state => {
	//	console.log('user-state-' + JSON.stringify(state.auth.user));
	return { auth: state.auth, loading: state.auth.loading};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			passwordRecover,
			resetUserState,
			initialRequest
		},
		dispatch
	);
};


ForgetPassword = connect(
	mapStateToProps,
	mapDispatchToProps
)(ForgetPassword);
export default reduxForm({ validate, form: 'forgetPassword' })(ForgetPassword);
