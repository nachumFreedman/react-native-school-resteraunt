import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { Button, LoadingIndicator } from '../../components';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import Styles from './Styles';
import { connect } from 'react-redux';
import { fetchOrderDetail } from '../../Stores/Actions';
import { Actions } from 'react-native-router-flux';
import i18n from "../../../i18n/i18n";

class ViewOrder extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
		var { orderId } = this.props.navigation.state.params;
		this.props.fetchOrderDetail(orderId);
	}

	async componentWillReceiveProps(nextProps) {
		console.log('props' + JSON.stringify(nextProps));
		if (!nextProps.loading) {
			await this.setState({
				loading: nextProps.loading,
			});
			// console.log("next Props==" + this.state.loading);
		}
	}

	render() {
		const {
			Container,
			ImgWrapper,
			Img,
			TitleWrap,
			Title,
			InfoWrap,
			InfoLabel,
			Info,
			btnWrap,
			btn,
			btnText,
		} = Styles;

		// if (this.state.loading) {
		// 	return <Spinner />;
		// }
		console.log('detail url', this.props.orderDetail);
		if (!this.props.orderDetail || !this.props.orderDetail.cart) {
			return <LoadingIndicator />;
		} else {
			return (
				<View>
					<ScrollView style={Container}>
						<FlatList
							data={this.props.orderDetail.cart}
							renderItem={({ item }) => (
								<View>
									<View style={ImgWrapper}>
										<Image source={{ uri: item.imageUrl }} />
										<View style={TitleWrap}>
											<Text style={Title}>{item.name}</Text>
										</View>
									</View>

									<View style={InfoWrap}>
										<Text style={InfoLabel}>{i18n.t('Order ID')}</Text>
										<Text style={Info}>{this.props.orderDetail.orderID}</Text>
									</View>
									<View style={InfoWrap}>
										<Text style={InfoLabel}>{i18n.t('Quantity')}</Text>
										<Text style={Info}>{item.quantity}</Text>
									</View>
									<View style={InfoWrap}>
										<Text style={InfoLabel}>{i18n.t('Price')}</Text>
										<Text style={Info}>${item.itemTotalPrice}</Text>
									</View>

									<View style={btnWrap}>
										<Button
											style={btn}
											onPress={() =>
												Actions.rating({
													productId: item.productId,
													orderId: this.props.orderDetail._id,
												})
											}
										>
											<CrossPlatformIcon name="star" color={Color.White} size={20} />
											<Text style={btnText}>
												{'\u00A0'}
												{'\u00A0'}{i18n.t('RATE PRODUCT')}
											</Text>
										</Button>
										<Button
											style={btn}
											onPress={() =>
												Actions.detail({
													productId: item.productId,
												})
											}
										>
											<CrossPlatformIcon name="basket" color={Color.White} size={20} />
											<Text style={btnText}>
												{'\u00A0'}
												{'\u00A0'}{i18n.t('BUY AGAIN')}
											</Text>
										</Button>
									</View>
								</View>
							)}
						/>
					</ScrollView>
				</View>
			);
		}
	}
}

const mapStateToProps = state => {
	//	console.log('order detail in class-' + JSON.stringify(state.orders.orderDetail));
	return {
		orderDetail: state.orders.orderDetail,
	};
};

export default connect(
	mapStateToProps,
	{ fetchOrderDetail }
)(ViewOrder);
