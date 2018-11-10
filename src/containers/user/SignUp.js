import React from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { CardSection, ButtonWithBackground , Spinner} from '../../components';
import { Color } from '../../common/color/Color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser, initialRequest } from '../../Stores/Actions';
import { Field, reduxForm } from 'redux-form';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import { validate } from '../../common/validate/validate';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import i18n from "../../../i18n/i18n";
import { Actions } from 'react-native-router-flux';

const renderInput = ({
	keyboardType,
	placeholder,
	placeholderTextColor,
	iconName,
	secureTextEntry,
	value,
	meta: { touched, error },
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

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: '',
			mobileNumber: '',
			isDisabled: true,
		};
		this.onButtonPress = this.onButtonPress.bind(this);
		this.resetUserData();
	}
	
   resetUserData(){
	   this.props.reset();
   }

	// sign up method
	async onButtonPress(e) {
		if (!this.state.email || !this.state.password || !this.state.name || !this.state.mobileNumber) {
			Alert.alert(
				'Please Filled All Fields',
				'All Field is required',
				[
					{
						text: 'Cancel',
						onPress: console.log('cancel'),
						style: 'cancel',
					},
					{ text: 'OK', onPress: () => console.log('ok') },
				],
				{ cancelable: false }
			);
		} else {
			this.props.initialRequest();
			this.props.registerUser(this.state.email,this.state.password, this.state.name,this.state.mobileNumber);
			}
	}

	render() {
		const {
			subContainer,
			logoImgWrapper,
			logo,
			subText,
		} = styles;

		const { name, email, password, mobileNumber } = this.props;
		var _style;
		if (!name || !email || !password || !mobileNumber) {
			// default button style
			_style = {
				backgroundColor: Color.Primary,
			};
		} else {
			// Clicked button style
			_style = {
				backgroundColor: Color.Danger,
			};
		}
		return (
			<ScrollView>
				<ImageBackground
					source={require('../../Images/bg/login_bg.jpg')}
					style={styles.bckImg}
				>
					<View style={subContainer}>
					<KeyboardAwareScrollView>
						<View style={logoImgWrapper}>
							<Image source={require('../../Images/logo.png')} style={logo} resizeMode={'contain'} />
						</View>
							<View>
								<Field
									iconName="person"
									placeholder="Name"
									placeholderTextColor={Color.White}
									name="name"
									value={this.state.name}
									component={renderInput}
									onChange={val => this.setState({ name: val })}
								/>
								<Field
									keyboardType="email-address"
									iconName="mail"
									placeholderTextColor={Color.White}
									placeholder="Email"
									name="email"
									value={this.state.email}
									component={renderInput}
									onChange={val => this.setState({ email: val })}
								/>
								<Field
									iconName="lock"
									placeholder="Password"
									placeholderTextColor={Color.White}
									name="password"
									value={this.state.password}
									component={renderInput}
									onChange={val => this.setState({ password: val })}
								/>
								<Field
									iconName="call"
									placeholder="Mobile Number"
									placeholderTextColor={Color.White}
									name="mobileNumber"
									value={this.state.mobileNumber}
									component={renderInput}
									keyboardType="numeric"
									onChange={val => this.setState({ mobileNumber: val })}
								/>
							</View>
						</KeyboardAwareScrollView>

						<CardSection>
						 <View style={styles.loginBtn}>
						<View style={styles.loginBtnChild}>
                            <ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.onButtonPress(e)}
                                    disabled={ !this.state.password ||  !this.state.email || !this.state.name || !this.state.mobileNumber} >
                                          {i18n.t('Sign Up')}
                            </ButtonWithBackground>
						 </View>
							{this.props.loading ? <Spinner style={styles.loginBtnSpinner} Color = {Color.Gray}/> : null}
						</View>
                       </CardSection>
                      
					   
                        
						<TouchableOpacity onPress={() => Actions.login()}>
							<Text style={subText}>{i18n.t('Have already an account ?')}</Text>	
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	// console.log(JSON.stringify(state.auth.user));
	return { auth: state.auth, loading: state.auth.loading };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			registerUser,initialRequest
		},
		dispatch
	);
};


SignUp = connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);
export default reduxForm({ validate, form: 'signUp' })(SignUp);
