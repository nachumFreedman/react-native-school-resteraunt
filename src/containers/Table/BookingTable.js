import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import Moment from 'moment';
import { ButtonWithBackground, CardSection } from '../../components';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import { connect } from 'react-redux';
import { bookTable } from '../../Stores/Actions';
import renderIf from '../../components/renderIf';
import i18n from '../../../i18n/i18n';
import { Picker } from 'react-native-picker-dropdown';

class BookingTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			time: '',
			person: '1',
			isDatePickerVisible: false,
			isTimePickerVisible: false,
		};
		this.onBookTableHandle = this.onBookTableHandle.bind(this);
	}

	_showDatePicker = () => this.setState({ isDatePickerVisible: true });

	_hideDatePicker = () => this.setState({ isDatePickerVisible: false });

	_showTimePicker = () => this.setState({ isTimePickerVisible: true });

	_hideTimePicker = () => this.setState({ isTimePickerVisible: false });

	_handleDatePicked = date => {
		//	console.log('A date has been picked: ', date);
		this.setState({ date: date });
		//	console.log('date---' + this.state.date);

		this._hideDatePicker();
	};

	_handleTimePicked = time => {
		//	console.log('A Time has been picked: ', time);
		this.setState({ time: time });
		//	console.log('time---' + this.state.time);
		this._hideTimePicker();
	};

	// book table
	onBookTableHandle(e) {
		if (!this.state.date || !this.state.time || !this.state.person) {
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
			//	console.log('book table' + e);

			this.props.bookTable(this.state.time, this.state.date, this.state.person);
			
		}
	}

	render() {
		const {
			bgImg,
			container,
			heading,
			subContainer,
			datePickerWrapper,
			subHead,
			timePickerWrapper,
			pickerWrapper,
			pickerHeading,
			dateTimePickerWrapper,
			picker,
			pickerText,
		} = styles;

		return (
			<View>
				<ImageBackground source={require('../../Images/bg/table_bg.jpg')} style={bgImg}>
						<View style={container}>
							<Text style={heading}>{i18n.t('Booking a Table is now easy and will take just a few minutes')}</Text>

							<View style={subContainer}>
								<View style={datePickerWrapper}>
									<Text style={subHead}>{i18n.t('Select Date')}</Text>
									<View style={dateTimePickerWrapper}>
										{renderIf(this.state.date == '')(<Text style={pickerText}>{i18n.t('Select Date')}</Text>)}
										{renderIf(this.state.date != '')(
											<Text style={pickerText}>
												{Moment(this.state.date).format('DD-MMM-YYYY')}
											</Text>
										)}
										<TouchableOpacity onPress={this._showDatePicker}>
											<CrossPlatformIcon
												name="calendar"
												color={Color.White}
												size={30}
												style={styles.pickerIcon}
											/>
										</TouchableOpacity>
										<DateTimePicker
											isVisible={this.state.isDatePickerVisible}
											onConfirm={this._handleDatePicked}
											onCancel={this._hideDatePicker}
											// date={this.state.date}
										/>
									</View>
								</View>
								<View style={timePickerWrapper}>
									<Text style={subHead}>{i18n.t('Select Time')}:</Text>

									<View style={dateTimePickerWrapper}>
										{renderIf(this.state.time == '')(<Text style={pickerText}>{i18n.t('Select Time')}</Text>)}
										{renderIf(this.state.time != '')(
											<Text style={pickerText}>{Moment(this.state.time).format('h:mm a')}</Text>
										)}
										<TouchableOpacity onPress={this._showTimePicker}>
											<CrossPlatformIcon
												name="clock"
												color={Color.White}
												size={30}
												style={styles.pickerIcon}
											/>
										</TouchableOpacity>
										<DateTimePicker
											isVisible={this.state.isTimePickerVisible}
											onConfirm={this._handleTimePicked}
											onCancel={this._hideTimePicker}
											mode="time"
										/>
									</View>
								</View>
							</View>
							<View>
								<Text style={pickerHeading}>{i18n.t('Number of Person')}:</Text>
								<View style={pickerWrapper}>
									<Picker
										selectedValue={this.state.person}
										style={picker}
										onValueChange={(itemValue, itemIndex) => this.setState({ person: itemValue })}
										prompt="Select No of person"
										style={styles.picker}
										textStyle={styles.pickerText}
										cancel
									>
										<Picker.Item label="---Select No of Person---" />
										<Picker.Item label="1 Person" value="1" />
										<Picker.Item label="2 Person" value="2" />
										<Picker.Item label="3 Person" value="3" />
										<Picker.Item label="4 Person" value="4" />
									</Picker>
								</View>
							</View>
							<CardSection>
						<View style={styles.finalBtn}>
						<View style={styles.finalBtnChild}>
                            <ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.onBookTableHandle(e)}
                                    disabled={ !this.state.date || !this.state.time || !this.state.person } >
                                          {i18n.t('Save')}
                                     </ButtonWithBackground>
							</View>
							{this.props.loading ? <Spinner style={styles.finalBtnSpinner} Color = {Color.Gray}/> : null}
						</View>
					</CardSection>
							{/* <View style={finalBtnWrapper}>
								<TouchableOpacity style={finalBtn} onPress={e => this.onBookTableHandle(e)}>
									<View style={btnTextWrapper}>
										<CrossPlatformIcon name="done-all" color={Color.Primary} size={15} />
									</View>
									<Text style={btnText}> Save</Text>
								</TouchableOpacity>
							</View> */}
						</View>
				</ImageBackground>
			</View>
		);
	}
}

const mapStateToProps = state => {
	//	console.log('book table--->' + JSON.stringify(state.table.history));
	// console.log("menuitems-->" + JSON.stringify(state.auth.user));
	return { history: state.table.history };
};

export default connect(
	mapStateToProps,
	{ bookTable }
)(BookingTable);
