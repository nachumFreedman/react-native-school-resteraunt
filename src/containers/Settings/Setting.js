import React from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { ButtonWithBackground, CardSection } from '../../components';
import styles from './styles';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserById, updateUser, initialRequest } from '../../Stores/Actions';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../../common/validate/validate';
import i18n from '../../../i18n/i18n';
import { Picker } from 'react-native-picker-dropdown';

const renderInput = ({
	keyboardType,
	defaultValue,
	key,
	label,
	meta: { touched, error },
	input: { onChange, ...restInput },
}) => {
	return (
		<View
			style={styles.fieldWrapper}
		>
			<View style={styles.labelContainer}>
				<Text style={styles.labelText}>{label}</Text>
			</View>
			<View style={styles.inputWrapper}>
				<TextInput
					key={key}
					keyboardType={keyboardType}
					onChangeText={onChange}
					defaultValue={defaultValue}
					style={styles.inputStyle}
					underlineColorAndroid="transparent"
					{...restInput}
				/>
			</View>

			{touched && (error && <Text style={styles.error}>{error}</Text>)}
		</View>
	);
};



class Setting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
			ImageSource: null,
			language: 'en',
			name: '',
			email: '',
			phone: '',
			user: {},
		};
		this.props.fetchUserById();
		this.handleInitialize();
	}

	//handle initialize
	handleInitialize() {
		const { name, email, phone } = this.props;
		const initData = {
			name: name,
			email: email,
			phone: phone,
		};
		this.props.initialize(initData);
	}

	selectPhotoTapped() {
		const options = {
			quality: 1.0,
			maxWidth: 500,
			maxHeight: 500,
			storageOptions: {
				skipBackup: true,
			},
		};

		ImagePicker.showImagePicker(options, response => {
			console.log('Response = ', response);

			if (response.didCancel) {
				//	console.log('User cancelled photo picker');
			} else if (response.error) {
				//	console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				//	console.log('User tapped custom button: ', response.customButton);
			} else {
				let source = { uri: response.uri };

				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					ImageSource: source,
				});
			}
		});
	}

	// profile updation
	 onUpdatePressHandle(e, userId) {
		// console.log('name , email , phone----' + e);
		// console.log('name====' + JSON.stringify(this.state.name));
		 this.props.initialRequest();
		 this.props.updateUser(
			this.state.name,
			this.state.email,
			parseInt(this.state.phone),
			userId,
			this.state.ImageSource
		);
		
	}

	selectLang(itemValue,itemIndex){
		console.log(itemValue);
		this.setState({
			language : itemValue
		});
		i18n.locale = itemValue;
	}

	render() {
		const {
			imageContainer,
			uploadText,
			selectImage,
			editIcon,
			imgBg,
			container,
			subContainer,
			langPicker,
		} = styles;
		//	console.log('id' + this.props.userId);
		return (
			<View>
				<ImageBackground source={require('../../Images/bg/settings.jpg')} style={imgBg}>
					<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={imageContainer}>
						<View>
							{this.state.ImageSource === null ? (
								<View style={selectImage}>
									<CrossPlatformIcon name="create" color={Color.White} size={20} style={editIcon} />
									<Text style={uploadText}>Edit Profile</Text>
								</View>
							) : (
								<Image
									source={this.state.ImageSource}
									style={selectImage}
									defaultSource={{ uri: this.props.imageUrl }}
								/>
							)}
						</View>
					</TouchableOpacity>
					<View style={container}>
						<View style={subContainer}>
							<Text style={styles.languageText}>{i18n.t('Language')}</Text>
							<Picker
								selectedValue={this.state.language}
								style={langPicker}
								onValueChange={(itemValue, itemIndex) => this.selectLang(itemValue, itemIndex)}
								prompt="Choose Language"
								// style={Styles.picker}
								// textStyle={Styles.pickerText}
								cancel
							>
								<Picker.Item label="English" value="en" />
								<Picker.Item label="French" value="fr" />
							</Picker>
						</View>

						<Field
							name="name"
							label={i18n.t('User Name')}
							component={renderInput}
							onChange={val => this.setState({ name: val })}
							defaultValue={this.props.name}
						/>

						<Field
							component={renderInput}
							label={i18n.t("Email")}
							onChange={val => this.setState({ email: val })}
							defaultValue={this.props.email}
							name="email"
						/>

						<Field
							key={'phone' ? 'input-phone' : 'input-default'}
							keyboardType={'phone' ? 'phone-pad' : 'default'}
							onChange={val => this.setState({ phone: val })}
							label={i18n.t('Mobile Number')}
							defaultValue={this.state.phone}
							component={renderInput}
							name="mobileNumber"
						/>
					</View>
					<CardSection>
						<View style={styles.finalBtn}>
						<View style={styles.finalBtnChild}>
                            <ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.onUpdatePressHandle(e, this.props.userId)}
                                    disabled={ !this.state.phone } >
                                         {i18n.t('Save')}
                                     </ButtonWithBackground>
							</View>
							{this.props.loading ? <Spinner style={styles.finalBtnSpinner} Color = {Color.Gray}/> : null}
						</View>
					</CardSection>
					{/* <View style={finalBtnWrapper}>
						<Button style={finalBtn} onPress={e => this.onUpdatePressHandle(e, this.props.userId)}>
							Save
						</Button>
					</View> */}
				</ImageBackground>
			</View>
		);
	}
}

const mapStateToProps = state => {
	//console.log('my data==>' + JSON.stringify(state.auth.user));
	if (state.auth.user) {
		const { user } = state.auth;
		return {
			name: user.name,
			email: user.email,
			phone: user.phone,
			userId: user._id,
			imageUrl: user.imageUrl,
		};
	}
	return { name: '', email: '', phone: '', userId: '', imageUrl: '' };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ fetchUserById, updateUser , initialRequest}, dispatch);
};

Setting = connect(
	mapStateToProps,
	mapDispatchToProps
)(Setting);
export default reduxForm({ validate, form: 'setting' })(Setting);
