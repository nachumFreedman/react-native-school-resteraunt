import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { InputGroup, CardSection, ButtonWithBackground, Spinner } from '../../components';
import { Color } from '../../common/color/Color';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetPassword ,initialRequest} from '../../Stores/Actions';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import i18n from "../../../i18n/i18n";

class ConfirmPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
		};
	}
	
	// Confirm password
	onSubmitHandler(e) {
		if (this.state.newPass == '') {
			Alert.alert('Please!', ' Enter New Password !', [{ text: 'OK', onPress: () => console.log('ok') }], {
				cancelable: false,
			});
		} else {
			this.props.initialRequest();
			this.props.resetPassword(this.state.password);
			
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
					{/* <View style={InfoTextWrapper}>
						<Text style={InfoText}>
							{i18n.t('Submit your registered email address we will send the link to change the password.')}
						</Text>
					</View> */}
					<CardSection>
						<InputGroup
							icon="lock"
							iconColor={Color.White}
							placeholder="Confirm Password"
							style={inputIcon}
							input={inputText}
							onChangeText={val => this.setState({ password: val })}
						/>
					</CardSection>
					<CardSection>
						<View style={styles.loginBtn}>
						<View style={styles.loginBtnChild}>
                            <ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.onSubmitHandler(e)}
                                    disabled={ !this.state.password } >
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
			resetPassword,initialRequest
		},
		dispatch
	);
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConfirmPassword);
