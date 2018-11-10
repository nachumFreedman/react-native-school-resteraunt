import React from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput } from 'react-native';
import { CardSection, ButtonWithBackground, Spinner } from '../../components';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import Styles from './Styles';
import { connect } from 'react-redux';
// import Toast from 'react-native-simple-toast';
import { bindActionCreators } from 'redux';
import { Field, reset, reduxForm } from 'redux-form';
import i18n from "../../../i18n/i18n";
import { addAddress , initialAddressRequest} from '../../Stores/Actions';
import { validate } from '../../common/validate/validate';
import styles from 'react-native-swipeable-parallax-carousel/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const renderInput = ({
	keyboardType,
	placeholder,
	placeholderTextColor,
	secureTextEntry,
	value,
	meta: { touched, error, warning },
	input: { onChange, ...restInput },
}) => {
	return (
		<View style={styles.formWrapper}>
			<View style={Styles.inputWrapper}>
				<TextInput
					keyboardType={keyboardType}
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor}
					underlineColorAndroid="transparent"
					style={Styles.inputText}
					onChangeText={onChange}
					secureTextEntry={secureTextEntry}
					value={value}
					{...restInput}
				/>
			</View>
			{touched && (error && <Text style={Styles.error}>{error}</Text>)}
		</View>
	);
};

class AddressForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			city: '',
			pincode: '',
			state: '',
			mobileNo: '',
			landmark: '',
			addAdress: false,
		};
		this.resetUserData();
	}
	
   resetUserData(){
	   this.props.reset();
   }
	//add address
	async addAddress(e) {
		if (
			!this.state.userName ||
			!this.state.city ||
			!this.state.pincode ||
			!this.state.state ||
			!this.state.mobileNo ||
			!this.state.landmark
		) {
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
			//	console.log('Add');

			const { userName, city, pincode, state, mobileNo, landmark } = this.state;
			this.props.initialAddressRequest();
			this.props.addAddress(userName, city, pincode, state, mobileNo, landmark);
			
		}
	}

	render() {
		const { imgBg, container, header, heading, inputWrapper, addBtn, btnTitle } = Styles;
		return (
			<ScrollView>
				<ImageBackground source={require('../../Images/bg/login_bg.jpg')} style={imgBg}>
					<View style={container}>
						<View style={header}>
							<CrossPlatformIcon name="home" color={Color.White} size={25} />
							<Text style={heading}> {i18n.t('Enter Address')}</Text>
						</View>
						<KeyboardAwareScrollView>
						<View>
							<Field
								placeholder="Name"
								name="name"
								value={this.state.userName}
								placeholderTextColor={Color.White}
								component={renderInput}
								onChange={val => this.setState({ userName: val })}
							/>
							<Field
								placeholder="City"
								name="city"
								value={this.state.city}
								placeholderTextColor={Color.White}
								component={renderInput}
								onChange={val => this.setState({ city: val })}
							/>
							<Field
								keyboardType="numeric"
								placeholder="Pincode"
								name="pinCode"
								value={this.state.pincode}
								placeholderTextColor={Color.White}
								component={renderInput}
								onChange={val => this.setState({ pincode: val })}
							/>
							<Field
								placeholder="State"
								name="state"
								value={this.state.state}
								placeholderTextColor={Color.White}
								component={renderInput}
								onChange={val => this.setState({ state: val })}
							/>
							<Field
								placeholder="Landmark"
								name="landmark"
								value={this.state.landmark}
								placeholderTextColor={Color.White}
								component={renderInput}
								onChange={val => this.setState({ landmark: val })}
							/>
							<Field
								keyboardType="numeric"
								placeholder="Mobile Number"
								name="mobileNumber"
								value={this.state.mobileNo}
								placeholderTextColor={Color.White}
								component={renderInput}
								onChange={val => this.setState({ mobileNo: val })}
							/>
						</View>
						</KeyboardAwareScrollView>
						<CardSection>
						<View style={Styles.finalBtn}>
						<View style={Styles.finalBtnChild}>
                            <ButtonWithBackground
                                   color = '#000'
                                   onPress={e => this.addAddress(e)}
									disabled={!this.state.userName ||
										!this.state.city ||
										!this.state.pincode ||
										!this.state.state ||
										!this.state.mobileNo ||
										!this.state.landmark
									} >
                                          {i18n.t('Add Address')}
                                     </ButtonWithBackground>
							</View>
							{this.props.loading ? <Spinner style={Styles.finalBtnSpinner} Color = {Color.White}/> : null}
						</View>
					</CardSection>
						{/* <TouchableOpacity style={addBtn} onPress={e => this.addAddress(e)}>
							<CrossPlatformIcon name="add" color={Color.White} size={25} />
							<Text style={btnTitle}> Add Address</Text>
						</TouchableOpacity> */}
					</View>
				</ImageBackground>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	// console.log(JSON.stringify(state.add.addressAdd));
	return { address: state.add.addressAdd, isAdded: state.add.isAdded, loading: state.add.loading };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			addAddress,initialAddressRequest
		},
		dispatch
	);
};

AddressForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddressForm);
export default reduxForm({ validate, form: 'addressForm' })(AddressForm);
