import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
	AsyncStorage,
	FlatList,
	ScrollView,
	Alert,
	Dimensions,
} from 'react-native';
import { CountingBtn, Button, CardSection } from '../../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, removeCartItem, deleteCartItem, addOrder, fetchCartCoupon } from '../../Stores/Actions';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import Styles from './Styles';
import { Actions } from 'react-native-router-flux';
import i18n from "../../../i18n/i18n";

import { Picker } from 'react-native-picker-dropdown';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		
		this.inputRefs = {};

		this.state = {
			count: 1,
			selectedItem: undefined,
			loading: true,
			cartItems: { cart: [] },
			subTotal: this.props.cartItems.subTotal,
			grandTotal: this.props.cartItems.grandTotal,
			deductedAmountByCoupon: 0,
			coupon: '1',
			items: [
                {
                    label: '',
                    value: '',
                },
            ]
		};
		AsyncStorage.getItem('cart').then(cartItem => {
			//console.log('cart-storage-' + JSON.stringify(cartItem));
			this.setState({ cartItems: JSON.parse(cartItem) });
			//console.log('state.cartItems' + this.state.cartItems);
		});
		this.props.fetchCartCoupon();

		super(props);


		{this.props.coupon.map( item=>{
			this.state.items.label = item.name;
			this.state.items.value = item.offerPercentage;
		}) }

		console.log("coupon in constructor",this.state.items);

	}

	componentDidUpdate() {
		//console.log('Did recieve props-' + JSON.stringify(this.props.cartItems));
	}

	// calculate product price
	calculatePrice(cart) {
		var subTotal = 0;
		cart.map(item => {
			subTotal = subTotal + item.itemTotalPrice;
			this.setState({
				subTotal: subTotal,
			});
			// console.log("sub" + subTotal);
		});
	}

	//increase product quantity
	async add(e, item) {
		this.setState({ count: this.state.count + 1 });
		//  console.log("add-----");

		await this.props.addCartItem(item);
		this.setState({
			subTotal: this.props.cartItems.subTotal,
			grandTotal: this.props.cartItems.grandTotal,
		});
	}

	//decrease product quantity
	async remove(e, item) {
		//console.log('remove cartItems!!-');
		this.state.count >= 1
			? this.setState({ count: this.state.count - 1 })
			: this.setState({ count: this.state.count });

		await this.props.removeCartItem(item);
		this.setState({
			subTotal: this.props.cartItems.subTotal,
			grandTotal: this.props.cartItems.grandTotal,
		});
	}

	async updateData(cart) {
		var subTotal = 0;
		var grandtotal = 0;
		if (cart.length === 0) {
			await this.setState({
				subTotal: 0,
				grandTotal: 0,
			});
			this.props.cartItems.subTotal = this.state.subTotal;
			this.props.cartItems.grandTotal = this.state.grandTotal;
			// console.log(
			//   "subto--->" + this.state.subTotal + "--" + this.state.grandTotal
			// );
			//	console.log('cartItem----' + JSON.stringify(this.props.cartItems));
		} else {
			cart.map(item => {
				subTotal = subTotal + item.itemTotalPrice;
				grandTotal = subTotal + this.props.cartItems.taxAmount;
				this.setState({
					subTotal: subTotal,
					grandTotal: grandTotal,
				});
				//   console.log("sub" + subTotal);
			});
			await this.setState({
				subTotal: subTotal,
				grandTotal: grandTotal,
			});
			this.props.cartItems.subTotal = this.state.subTotal;
			this.props.cartItems.grandTotal = this.state.grandTotal;
			// console.log(
			//   "grandtotal====>" + this.state.grandTotal + "" + this.state.subTotal
			// );
		}
	}
	// delete card item
	async deleteToCart(e, item) {
		//  console.log("delete cartItems!!");
		await this.props.deleteCartItem(item);
		this.updateData(this.props.cart);
	}
	//picker method
	async onValueChange(value) {
		// console.log("value---" + value);
		if (this.props.isLoggedIn === false) {
			Alert.alert(
				'Please Login First',
				'',
				[
					{
						text: 'Cancel',
						onPress: Actions.cart(),
						style: 'cancel',
					},
					{ text: 'OK', onPress: Actions.login() },
				],
				{ cancelable: false }
			);
		} else {
			const deductedAmount = (this.state.subTotal * value) / 100;
			const total = this.state.subTotal - deductedAmount;
			console.log('price: ' + deductedAmount);
			await this.setState({
				coupon: value,
				deductedAmountByCoupon: deductedAmount,
				grandTotal: total,
			});
			this.props.cartItems.deductedAmountByCoupon = this.state.deductedAmountByCoupon;
			this.props.cartItems.grandTotal = this.state.grandTotal;
			console.log(
				'deducted && total===' +
					this.props.cartItems.deductedAmountByCoupon +
					'' +
					this.props.cartItems.grandTotal
			);
		}
	}

	// for moving to next page
	async moveTo(e) {
		if (this.props.isLoggedIn === false) {
			Alert.alert(
				'Please Login First',
				'',
				[
					{
						text: 'Cancel',
						onPress: Actions.cart(),
						style: 'cancel',
					},
					{ text: 'OK', onPress: () => Actions.login() },
				],
				{ cancelable: false }
			);
		} else {
			// console.log('ssssssssss----' + this.props.cartItems.subTotal + '--' + this.props.cartItems.grandTotal);
			Actions.addressList();
		}
	}

	moveToHome(){
		Actions.drawerClose();
		Actions.mainScreen();
	}
	render() {
		const {
			container,
			subContainer,
			cartInfo,
			productTitle,
			cartInfoContainer,
			imgContainer,
			productImg,
			cartPriceContainer,
			cartPriceSubContainer,
			horizontalLine,
			quantityText,
			countingWrapper,
			countingBtn,
			btnText,
			valueBtn,
			counterText,
			couponHead,
			cartViewBtn,
			cartViewText,
			total,
			coupon,
			proceedBtn,
			proceedBtnText,
			totalPrice,
			picker,
			pickerWrapper,
			mainContainer
		} = Styles;
		//	console.log('lenth==' + this.props.cart.length);
		if (this.props.cart.length === 0) {
			return (
				<ImageBackground
					source={require('../../Images/bg/login_bg.jpg')}
					style={Styles.bgImg}
				>
					<TouchableOpacity onPress={() =>this.moveToHome()}>
						<CrossPlatformIcon
							name="cart"
							color={Color.White}
							size={150}
							style={Styles.emptyIcon}
						/>
						<Text style={Styles.emptyText}>{i18n.t('Cart is Empty')}</Text>
					</TouchableOpacity>
				</ImageBackground>
			);
		} else {
			return (
				<View style={mainContainer}>
					<ScrollView style={container}>
						<FlatList
							data={this.props.cart}
							renderItem={({ item, index }) => (
								<View style={subContainer}>
									<View style={cartInfo}>
										<Text style={productTitle}>{item.name}</Text>
										<CrossPlatformIcon
											name="close"
											color={Color.DarkLight}
											size={25}
											onPress={e => this.deleteToCart(e, item)}
										/>
									</View>
									<Text>Starter</Text>
									<View style={cartInfoContainer}>
										<View style={imgContainer}>
											<Image source={{ uri: item.imageUrl }} style={productImg} />
										</View>
										<View style={cartPriceContainer}>
											<View style={cartPriceSubContainer}>
												<Text>{i18n.t('Price')}:</Text>
												<Text>${item.itemTotalPrice.toFixed(2)}</Text>
											</View>
											<View style={horizontalLine} />
											<View style={cartPriceSubContainer}>
												<Text style={quantityText}>{i18n.t('Quantity')}:</Text>
												<CountingBtn
													style={countingWrapper}
													countingBtnStyle={countingBtn}
													BtnText={btnText}
													value={valueBtn}
													valueText={counterText}
													onPress={e => this.add(e, item)}
													onClick={e => this.remove(e, item)}
													counter={item.quantity}
												/>
											</View>
											<View style={horizontalLine} />
											<View style={cartPriceSubContainer}>
												<Text style={total}>{i18n.t('SubTotal:')}</Text>
												<Text>${item.itemTotalPrice.toFixed(2)}</Text>
											</View>
										</View>
									</View>
									<CardSection>
										<Button
											style={cartViewBtn}
											BtnTextStyle={cartViewText}
											onPress={() => Actions.detail({ productId: item._id })}
										>
											{i18n.t('View')}
										</Button>
									</CardSection>
								</View>
							)}
							keyExtractor={(item, index) => item.productId}
						/>

						<View style={subContainer}>
							<View style={cartPriceSubContainer}>
								<Text>{i18n.t('Product SubTotal')}</Text>
								<Text>${this.state.subTotal.toFixed(2)}</Text>
							</View>
							<View style={cartPriceSubContainer}>
								<Text>{i18n.t('Deducted Price')}</Text>
								<Text>- ${this.state.deductedAmountByCoupon.toFixed(2)}</Text>
							</View>
							<View style={cartPriceSubContainer}>
								<Text>{i18n.t('Tax')}</Text>
								<Text>$0.5</Text>
							</View>
						</View>
						<View style={subContainer}>
							<View style={cartPriceSubContainer}>
								<Text style={couponHead}>{i18n.t('Coupon Code')}</Text>
								<View style={pickerWrapper}>
									<Picker
										selectedValue={this.state.coupon}
										style={picker}
										onValueChange={this.onValueChange.bind(this)}
										prompt="Select coupen"
										style={Styles.picker}
										textStyle={Styles.pickerText}
										cancel
									>
										{this.props.coupon.map(item => (
											<Picker.Item
												key={item._id}
												label={item.name + ' ' + item.offerPercentage + '%'}
												value={item.offerPercentage}
											/>
										))}
									</Picker>
								</View>
							</View>
						</View>
					<TouchableOpacity style={proceedBtn} onPress={e => this.moveTo(e)}>
							<View style={cartPriceSubContainer}>
								<Text style={proceedBtnText}>{i18n.t('Proceed')}</Text>
								<View style={totalPrice}>
									<Text style={proceedBtnText}> Total: ${this.state.grandTotal.toFixed(2)} </Text>
									<CrossPlatformIcon name="arrow-forward" color={Color.White} size={20} />
								</View>
							</View>
						</TouchableOpacity>
					</ScrollView>
					
				</View>
			);
		}
	}
}

function mapStateToProps(state) {
	//	console.log('cart-items main->' + JSON.stringify(state.cartItems));
	//	console.log('cart-items coupon->' + JSON.stringify(state.cartItems.coupon));
	return {
		cartItems: state.cartItems,
		cart: state.cartItems.cart,
		coupon: state.cartItems.coupon,
		isLoggedIn: state.auth.isLoggedIn,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			addCartItem: item => dispatch(addToCart(item)),
			removeCartItem: item => dispatch(removeCartItem(item)),
			deleteCartItem: item => dispatch(deleteCartItem(item)),
			fetchCartCoupon: fetchCartCoupon,
		},
		dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
