import React from 'react';
import { View, Text, Platform,Image, ImageBackground, TextInput, ScrollView } from 'react-native';
import Styles from './Styles';
import { Color } from '../../common/color/Color';
import {  ButtonWithBackground, CardSection } from '../../components';
import { contactWith, fetchUserById, contactRequest} from '../../Stores/Actions';
import { connect } from 'react-redux';
import { validate } from '../../common/validate/validate';
import { Field, reduxForm } from 'redux-form';
import i18n from "../../../i18n/i18n";

const renderInput = ({
	placeholder,
	value,
	numberOfLines,
	multiline,
	defaultValue,
	style,
	meta: { touched, error },
	input: { onChange, ...restInput },
}) => {
	return (
		<View style={Styles.formWrapper}>
			<View>
				<TextInput
					placeholder={placeholder}
					underlineColorAndroid="transparent"
					style={style}
					onChangeText={onChange}
					value={value}
					defaultValue={defaultValue}
					numberOfLines={numberOfLines}
					multiline={multiline}
					{...restInput}
				/>
			</View>
			{touched && (error && <Text style={Styles.error}>{error}</Text>)}
		</View>
	);
};
const btnColor = Platform.select({
	ios: Color.White,
	android: Color.Primary ,
  });

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			sbj: '',
			msg: '',
		};
		this.props.fetchUserById();
		this.handleInitialize();
		this.resetUserData();
	}

	resetUserData(){
		this.props.reset();
	}

	// contact with owner
	contactWithOwner(e) {
		this.props.contactRequest();
		this.props.contactWith(this.state);
	}

	//handle initialize
	handleInitialize() {
		const { name, email } = this.props;
		const initData = {
			name: name,
			email: email,
		};
		this.props.initialize(initData);
	}

	render() {
		const {
			imgBg,
			container,
			labelText,
			heading,
		} = Styles;

		return (
			<ScrollView>
				<ImageBackground source={require('../../Images/bg/settings.jpg')} style={imgBg}>
					<Text style={heading}> {i18n.t('Contact Us')} </Text>

					<View style={container}>
						<Text style={labelText}>{i18n.t('User Name')}:</Text>

						<Field
							placeholder="Name"
							name="name"
							component={renderInput}
							defaultValue={this.props.name}
							style={Styles.inputWrapper}
							onChange={val => this.setState({ name: val })}
						/>

						<Text style={labelText}>{i18n.t('Email')}:</Text>
						<Field
							placeholder="Email"
							name="email"
							defaultValue={this.props.email}
							component={renderInput}
							style={Styles.inputWrapper}
							onChange={val => this.setState({ email: val })}
						/>

						<Text style={labelText}>{i18n.t('Subject')}:</Text>
						<Field
							placeholder="Subject"
							name="subject"
							component={renderInput}
							style={Styles.inputWrapper}
							onChange={val => this.setState({ sbj: val })}
						/>

						<Text style={labelText}>{i18n.t('Message')}:</Text>
						<Field
							placeholder="Message"
							name="msg"
							numberOfLines={4}
							multiline={true}
							component={renderInput}
							style={Styles.inputWrapper}
							onChange={val => this.setState({ msg: val })}
						/>
					</View>
					<CardSection style ={Styles.finalBtnWrapper}>
					  <View style={Styles.finalBtn}>
					  <View style={Styles.finalBtnChild}>
					<ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.contactWithOwner(e)}
                                    disabled={ !this.state.sbj ||  !this.state.msg } >
                                          {i18n.t('Send')}
                    </ButtonWithBackground>
					 </View>
						{/* {this.props.loading ? <Spinner style={Styles.contactBtnSpinner} Color = {Color.Gray}/> : null} */}
					</View>
					</CardSection>
				</ImageBackground>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	//	console.log('contact in class-' + JSON.stringify(state.contactInfo));
	return {
		loading: state.contactInfo.loading,
		contact: state.contactInfo,
		name: state.auth.user.name,
		email: state.auth.user.email,
	};
};

Contact = connect(
	mapStateToProps,
	{ contactWith, fetchUserById, contactRequest }
)(Contact);
export default reduxForm({ validate, form: 'contactForm' })(Contact);