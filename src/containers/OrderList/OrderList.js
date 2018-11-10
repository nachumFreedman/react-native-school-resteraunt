import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import {  LoadingIndicator } from '../../components';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import Styles from './Styles';
import { connect } from 'react-redux';
import { fetchOrders } from '../../Stores/Actions';
import Moment from 'moment';
import { Actions } from 'react-native-router-flux';
import i18n from "../../../i18n/i18n";

class OrderList extends React.Component {
	constructor(props) {
		super(props);
		(this.state = { loading: true }), this.props.fetchOrders();
	}


	async componentWillReceiveProps(nextProps) {
		//console.log('props' + JSON.stringify(nextProps));
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
			ItemContainer,
			ImgWrapper,
			Img,
			ItemContent,
			ItemImgContent,
			Title,
			btnDelete,
			btnWrap,
			btn,
			btnText,
			Price,
			Date,
		} = Styles;
		//console.log('order list', this.props.orderList);
		if (this.state.loading) {
			return <LoadingIndicator />;
		}
		if (this.props.orderList.length < 1) {
			return (
				<TouchableOpacity onPress={() => {
					Actions.drawerClose();
					Actions.mainScreen();
				}}>
					<CrossPlatformIcon
						name="basket"
						color={Color.Primary}
						size={150}
						
						style={Styles.emptyIcon}
					/>
					<Text style={Styles.emptyText}>{i18n.t('Order is Empty')}</Text>
				</TouchableOpacity>
			);
		} else {
			return (
				<View>
					<ScrollView style={Container}>
						{/* order product item*/}
						<FlatList
							data={this.props.orderList}
							renderItem={({ item }) => (
								<View style={ItemContainer}>
									<View style={ItemImgContent}>
										<View style={ImgWrapper}>
											<Image source={{ uri: item.cart[0].imageUrl }} style={Img} />
										</View>
									</View>
									<View style={ItemContent}>
										<Text style={Title}>{item.cart[0].name}</Text>
										<Text style={Price}>${item.cart[0].itemTotalPrice}</Text>
										<Text style={Date}>
											{Moment(item.shippingAddress.createdAt).format('DD-MMM-YYYY')}
										</Text>
									</View>
									<View style={btnWrap}>
										<TouchableOpacity
											style={btn}
											onPress={() => Actions.ViewOrder({ orderId: item._id })}
										>
											<Text style={btnText}>
												{'\u00A0'}
												{'\u00A0'}{i18n.t('View')}{' '}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity
											style={btn}
											onPress={() => Actions.orderStatus({ orderId: item._id })}
										>
											<Text style={btnText}>{i18n.t('Status')}</Text>
										</TouchableOpacity>
									</View>
								</View>
							)}
							keyExtractor={(item, index) => item._id}
						/>
						{/* order product item */}
					</ScrollView>
				</View>
			);
		}
	}
}

const mapStateToProps = state => {
	//	console.log('order in class-' + JSON.stringify(state.orders.orderList));

	return { orderList: state.orders.orderList };
};

export default connect(
	mapStateToProps,
	{ fetchOrders }
)(OrderList);
