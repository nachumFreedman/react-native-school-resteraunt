import React from 'react';
import { View, ImageBackground, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import {  LoadingIndicator } from '../../components';
import styles from './styles';
import i18n from "../../../i18n/i18n";
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBookTableHistory, fetchUserById } from '../../Stores/Actions';
import Moment from 'moment';
import { Color } from '../../common/color/Color';
import {CrossPlatformIcon} from "../../common/CrossPlatformIcon/CrossPlatformIcon";

class BookingHistory extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
		this.props.fetchBookTableHistory(this.props.user._id);
		this.props.fetchUserById();
	}

	async componentWillReceiveProps(nextProps) {
		// console.log("props" + JSON.stringify(nextProps));
		if (!nextProps.loading) {
			await this.setState({
				loading: nextProps.loading,
			});
			// console.log("next Props==" + this.state.loading);
		}
	}

	render() {
		if (this.state.loading) {
			return <LoadingIndicator />;
		}
		const {
			bgImg,
			horizontalLine,
			container,
			tableInfo,
			statusWrapper,
			tableContent,
			statusText,
			statusSubText,
		} = styles;
		if(this.props.history.length === 0){
			return(
				<ImageBackground
					source={require('../../Images/bg/login_bg.jpg')}
					style={styles.bgImg}
				>
					<TouchableOpacity onPress={() => {
						Actions.drawerClose();
						Actions.mainScreen();
					}}>
						<CrossPlatformIcon
							name="book"
							color={Color.White}
							size={150}
							style={styles.emptyIcon}
						/>
						<Text style={styles.emptyText}>{i18n.t('Booking History is Empty')}</Text>
					</TouchableOpacity>
				</ImageBackground>
			)
		}
		else{
			return (
				<View>
					<ImageBackground source={require('../../Images/bg/booking-history.jpg')} style={bgImg}>
						<ScrollView>
							{/* <View style={mainContainer}>
								<Text style={heading}>{i18n.t('Booking a Table is now easy and will take just a few minutes')}</Text>
							</View>
							<View style={horizontalLine} /> */}
							<FlatList
								data={this.props.history}
								renderItem={({ item }) => (
									<View>
										<View style={container}>
											<View style={tableInfo}>
												<Text style={tableContent}>
													{i18n.t('Date')}: {Moment(item.date).format('DD-MMM-YYYY')}
												</Text>
												<Text style={tableContent}>
													{i18n.t('Time')}: {Moment(item.time).format('h:mm a')}
												</Text>
												<Text style={tableContent}>{i18n.t('No of Persons')}: {item.person}</Text>
											</View>
	
											<View style={statusWrapper}>
												<Text style={statusText}>{i18n.t('Status')}</Text>
												<Text style={statusSubText}>{item.status}</Text>
											</View>
										</View>
										<View style={horizontalLine} />
									</View>
								)}
								keyExtractor={(item, index) => item._id}
							/>
						</ScrollView>
					</ImageBackground>
				</View>
			);
		}
	}
}

const mapStateToProps = state => {
	// console.log('Table History-->' + JSON.stringify(state.table.history));
	//	console.log('user-->' + JSON.stringify(state.auth.user));
	return {
		history: state.table.history,
		user: state.auth.user,
		loading: state.table.loading,
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchBookTableHistory: fetchBookTableHistory,
			fetchUserById: fetchUserById,
		},
		dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookingHistory);
