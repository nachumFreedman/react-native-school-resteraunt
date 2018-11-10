import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity , Alert} from 'react-native';
import { InputGroup, CardSection, ButtonWithBackground, Spinner } from '../../components';
import { Color } from '../../common/color/Color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { emailVerify,initialRequest } from '../../Stores/Actions';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import i18n from "../../../i18n/i18n";

class OTPGenerate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			otp: '',
		};
	}

	// OTP submit
	onSubmit(e) {
		if (this.state.otp == '') {
			Alert.alert('Please!', ' Enter OTP !', [{ text: 'OK', onPress: () => console.log('ok') }], {
				cancelable: false,
			});
		} else {
			//	console.log('otp==>' + e);
			this.props.initialRequest();
			this.props.emailVerify(this.props.navigation.state.params.email,this.state.otp);
			}
	}

	render() {
		const {
			subContainer,
			logoImgWrapper,
			logo,
			subText,
			inputIcon,
			inputText,
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

					<CardSection>
						<InputGroup
							icon="lock"
							iconColor={Color.White}
							placeholder="OTP"
							style={inputIcon}
							input={inputText}
							keyType={'phone' ? 'input-phone' : 'input-default'}
							keyboardTypeIs={'phone' ? 'phone-pad' : 'default'}
							onChangeText={val => this.setState({ otp: val })}
						/>
					</CardSection>
					<CardSection>
						<View style={styles.loginBtn}>
						<View style={styles.loginBtnChild}>
                            <ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.onSubmit(e)}
                                    disabled={ !this.state.otp } >
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
	return { auth: state.auth, loading: state.auth.loading };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			emailVerify,initialRequest
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OTPGenerate);
