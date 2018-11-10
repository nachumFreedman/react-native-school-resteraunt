import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchOrderDetail } from '../../Stores/Actions';
import Moment from 'moment';
import styles from './styles';
import i18n from "../../../i18n/i18n";

class OrderStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slide: 0,
			userName: '',
		};
		var { orderId } = this.props.navigation.state.params;
		this.props.fetchOrderDetail(orderId);
	}

	// for updating order status
	getVal(val) {
		console.log(val);
		this.setState({
			slide: val
		});
		  if(this.props.orderDetail.status == 'pending'){
			this.setState({
			  slide: 30.0
			});
			console.log(this.state.slide);
		  }
		  else{
			setState({
			  slide: 100.0
			});
		  }
	}

	render() {
		const {
			container,
			subContainer,
			saveOrderWrapper,
			saveOrderImg,
			saveOrderText,
			statusWrapper,
			placeOrderStatus,
			orderTimingStatus,
			orderInfo,
			orderFrom,
			orderInfoHead,
			orderInfoSubHead,
			orderTiming,
			orderNo,
			status,
		} = styles;
		return (
			<View>
				<View style={container}>
					<View style={subContainer}>
						<View style={orderInfo}>
							<View style={orderFrom}>
								<Text style={orderInfoHead}>{i18n.t('Order From')}</Text>
								<Text style={orderInfoSubHead}>{this.props.user.name}</Text>
							</View>
							<View style={orderTiming}>
								<Text style={orderInfoHead}>{i18n.t('Placed At')}</Text>
								<Text style={orderInfoSubHead}>{Moment(this.props.orderDetail.createdAt).format('DD-MMM-YYYY, hh:mm a')}</Text>
							</View>
						</View>
						<Text style={orderNo}>{i18n.t('OrderId')}: {this.props.orderDetail.orderID}</Text>
						{/* <SeekBar
							 value={this.state.slide}
							 onSlidingComplete={val => this.getVal(val)}
						/> */}
						<View style={statusWrapper}>
							<View style={placeOrderStatus}>
								<Text style={status}>{i18n.t('Status')}</Text>
		
							</View>
							<View style={orderTimingStatus}>
								<Text style={status}>{this.props.orderDetail.status}</Text>
								
							</View>
						</View>
						<View style={saveOrderWrapper}>
							<Image source={require('../../Images/icon/status-icon.png')} style={saveOrderImg} />
							<Text style={saveOrderText}>{i18n.t('We have saved this order as your usuals')}</Text>
						</View>
						{/* <View style={horizontalLine} /> */}
						{/* <View style={statusDocument}>
							<CrossPlatformIcon name="time" color={Color.Light} size={20} />
							<Text>Notify me When its ready</Text>
							<CrossPlatformIcon name="arrow-forward" color={Color.Light} size={20} />
						</View>
						<View style={horizontalLine} />
						<View style={statusDocument}>
							<CrossPlatformIcon name="document" color={Color.Light} size={20} />
							<Text>View my receipt</Text>
							<CrossPlatformIcon name="arrow-forward" color={Color.Light} size={20} />
						</View> */}
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
		console.log('order detail in class-' + JSON.stringify(state.orders.orderDetail));
	return { orderDetail: state.orders.orderDetail, user: state.auth.user };
};

export default connect(mapStateToProps, { fetchOrderDetail })(OrderStatus);
