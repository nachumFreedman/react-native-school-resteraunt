import React from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	Alert,
	TextInput,
} from 'react-native';
import { CardSection, Spinner,ButtonWithBackground } from '../../components';
import styles from './styles';
import { Color } from '../../common/color/Color';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import {
	placeOrder,
	paymentStripe,
	fetchCartCoupon,
	fetchCardInfo,
	deleteCard,
	selectSaveCard,
	orderPlaceRequest
} from '../../Stores/Actions';
import renderIf from '../../components/renderIf';
import CheckBox from 'react-native-checkbox';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
// import Toast from 'react-native-simple-toast';
import { Actions } from 'react-native-router-flux';
import { validate } from '../../common/validate/validate';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import i18n from '../../../i18n/i18n';

const paymentTypes = [
	{ selected: false, type: 'Stripe', value: 'stripe' },
	{ selected: false, type: 'COD', value: 'cod' },
];

const renderInput = ({
	label,
	keyboardType,
	placeholder,
	underlineColorAndroid,
	value,
	style,
	meta: { touched, error, warning },
	input: { onChange, ...restInput },
}) => {
	return (
		<View style={styles.formWrapper}>
			<View style={styles.inputWrapper}>
				<TextInput
					keyboardType={keyboardType}
					placeholder={placeholder}
					style={style}
					underlineColorAndroid="transparent"
					onChangeText={onChange}
					value={value}
					{...restInput}
				/>
			</View>
			{touched && (error && <Text style={styles.error}>{error}</Text>)}
		</View>
	);
};

const renderDateInput = ({
	label,
	keyboardType,
	placeholder,
	underlineColorAndroid,
	value,
	style,
	meta: { touched, error, warning },
	input: { onChange, ...restInput },
}) => {
	return (
		<View style={styles.formWrapper}>
			<View style={styles.dateInput}>
				<TextInput
					keyboardType={keyboardType}
					placeholder={placeholder}
					style={style}
					underlineColorAndroid="transparent"
					onChangeText={onChange}
					value={value}
					{...restInput}
				/>
			</View>
			{touched && (error && <Text style={styles.error}>{error}</Text>)}
		</View>
	);
};

class Payment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			orderData: {},
			year: '',
			number: '',
			month: '',
			cvcValue: '',
			isSaved: true,
			show_stripe_block: false,
			loading: true,
			card: {},
			cart: [],
			status: false,
			grandTotal: '',
			subTotal: '',
			taxAmount: '',
			couponDiscountPercentage: '',
			deductedAmountByCoupon: '',
			isSelected: false,
			saveCardCVC: '',
			paymentStatus: false,
			payAmount: 0,
			isPayment: false,
			clearCard: [],
		};
		var { userId } = this.props.navigation.state.params;

		//	console.log('fetch==>' + userId);
		this.props.fetchCardInfo(userId);
	}

	// update total
	async updateTotal() {
		const total = this.props.cartItems.grandTotal - this.props.auth.totalLoyaltyPoints;
		//	console.log('----->' + total);
		await this.setState({
			payAmount: total,
		});
		this.props.cartItems.grandTotal = this.state.payAmount;
		//	console.log('payMount--->' + this.state.payAmount);
	}

	//select which type payment you want
	async selectPaymentMethod(index, value, paymentType) {
		paymentType.type == 'Stripe'
			? this.setState({ show_stripe_block: true })
			: this.setState({ show_stripe_block: false });
		const { params } = this.props.navigation.state;
		console.log('type-' + JSON.stringify(paymentType.type));
		this.state.orderData = this.props.cartItems;

		console.log('order data before updating data', JSON.stringify(this.state.orderData));
		await this.setState({
			orderData: Object.assign({}, params.orderData, {
				paymentOption: paymentType.type,
				status: 'pending',
				cart: this.state.orderData.cart,
				grandTotal: this.state.orderData.grandTotal,
				subTotal: this.state.orderData.subTotal,
				taxAmount: this.state.orderData.taxAmount,
				couponDiscountPercentage: this.state.orderData.couponDiscountPercentage,
				deductedAmountByCoupon: this.state.orderData.deductedAmountByCoupon,
			}),
		});
		//	console.log('order data---', JSON.stringify(this.state.orderData));

		paymentType.selected = true;
		paymentTypes.map(type => {
			if (paymentType.value != type.value) {
				type.selected = false;
			}
		});
		//	console.log('types--->' + JSON.stringify(paymentTypes));
		//	console.log('order data==>' + JSON.stringify(this.state.orderData));
	}

	// payment proceed
	async placeOrderData(e) {
		// console.log('your order' + JSON.stringify(this.state.orderData));
		//	console.log('isSelect---' + this.props.userId + 'jjj');
		await this.setState({
			isPayment: true,
		});
		this.props.orderPlaceRequest();
		if (this.state.orderData.paymentOption === 'Stripe') {
			// console.log('enter inside the info==' + JSON.stringify(this.props.orders));
			// console.log(
			// 	'card info---9900998====',
			// 	this.state.number + ' ' + this.state.month + '' + this.state.year + ' ' + this.state.cvcValue
			// );
			if (this.props.cartItems.grandTotal < 50) {
				Alert.alert(
					'Please Select another Payment method!',
					'Stripe pay only above $50!',
					[{ text: 'OK', onPress: () => console.log('ok') }],
					{ cancelable: false }
				);
			} else if (!this.state.number || !this.state.month || !this.state.year || !this.state.cvcValue) {
				Alert.alert(
					'Please Filled All Field!',
					'All Field is Required!',
					[{ text: 'OK', onPress: () => console.log('ok') }],
					{ cancelable: false }
				);
			} else if (this.state.isSelected == true) {
				if (!this.state.saveCardCVC) {
					Alert.alert(
						'Please Fill CVC!',
						'CVC is Required!',
						[{ text: 'OK', onPress: () => console.log('ok') }],
						{ cancelable: false }
					);
				} else {
					this.selectSavedCard();
				}
			} else {
				this.props.paymentStripe(
					this.state.orderData,
					this.state.number,
					this.state.month,
					this.state.year,
					this.state.cvcValue,
					this.props.userId,
					this.state.isSaved,
					this.props.cartItems.grandTotal,
					this.props.point,
					this.state.paymentStatus
				);
				this.props.cartItems.cart = this.state.clearCard;
				if (this.state.isPayment == true) {
					// console.log('is pay00000----', this.state.isPay + '' + this.props.isPayment);
					this.isPay();
				}
				
			}
		} else {
			this.props.placeOrder(this.state.orderData);
			
			this.isPay();
		}
	}

	//select saved card
	// selectCard(selectedCard, index) {
	// 	console.log('selected card-->' + JSON.stringify(selectedCard));
	// 	this.setState({
	// 		card: { selectedCard, index },

	// 	});
	// 	console.log('select' + this.state.isSelected);
	// 	selectedCard.selected = true;
	// 	this.props.cardInfo.map((card, i) => {
	// 		if (index != i) {
	// 			card.selected = false;
	// 		}
	// 		console.log('card selected===' + index + '  ' + i);
	// 	});
	// }

	//payment through saved card
	selectSavedCard() {
		const userId = this.props.userId;
		const amount = this.props.cartItems.grandTotal;
		const index = this.state.card.index;
		//	console.log('index save==>' + index);
		this.props.selectSaveCard(index, userId, amount);
	}

	// render payment options
	renderPaymentOptions() {
		return (
			<View style={styles.paymentOptionWrapper}>
				<RadioGroup
					size={24}
					thickness={2}
					color={Color.Danger}
					highlightColor={Color.Light}
					onSelect={(index, value) => this.selectPaymentMethod(index, value, paymentTypes[index])}
				>
					{paymentTypes.map(paymentType => {
						return (
							<RadioButton value={paymentType.type} key={paymentType.type}>
								<Text>{paymentType.type}</Text>
							</RadioButton>
						);
					})}
				</RadioGroup>
			</View>
		);
	}

	toggleSwitch() {
		this.setState({
			isSaved: !this.state.isSaved,
		});
	}

	//select saved card
	selectCard(index, value, selectedCard) {
		//	console.log('selected card-->' + JSON.stringify(selectedCard));
		this.setState({
			card: { selectedCard, index },
		});
		//	console.log('selected==>' + this.state.isSelected);
		selectedCard.selected = true;
		this.state.isSelected = selectedCard.selected;

		this.props.cardInfo.map((card, i) => {
			if (index != i) {
				card.selected = false;
			}
			//	console.log('card selected===' + index + '  ' + i);
		});
	}

	//payment through saved card
	selectSavedCard() {
		const userId = this.props.userId;
		const amount = this.props.cartItems.grandTotal;
		const index = this.state.card.index;
		//	console.log('index save==>' + index);
		this.props.selectSaveCard(index, userId, amount);
	}

	// cart info fetch
	cardInfoFetch() {
		var { userId } = this.props.navigation.state.params;
		this.props.fetchCardInfo(userId);
	}

	//delete saved card
	async deleteCardInfo(info, index) {
		//	console.log('index==>' + index);
		this.props.deleteCard(this.props.userId, index);
		//	console.log('index1==> ' + index);
		await this.cardInfoFetch();
		// Toast.show('Saved Card has been deleted');
	}

	renderCardInfo() {
		if (this.props.cardInfo.length > 0) {
			<RadioGroup
				size={24}
				thickness={2}
				color={Color.Danger}
				highlightColor={Color.Light}
				onSelect={(index, value) => this.selectCard(index, value, this.props.cardInfo[index])}
			>
				{this.props.cardInfo.map(item => (
					<RadioButton value={item.lastFourDigit} key={item.lastFourDigit}>
						<View style={styles.cardInfo}>
							<Text>{item.lastFourDigit}</Text>
						</View>
						<View style={styles.cardComponent}>
							<CrossPlatformIcon
								name="trash"
								color={Color.Danger}
								size={20}
								onPress={() => this.deleteCardInfo(item, index)}
							/>
						</View>

						<Field
							style={styles.cvcInput}
							placeholder="CVC"
							keyboardType="numeric"
							name="cvv"
							onChangeText={val => this.setState({ saveCardCVC: val })}
							component={renderInput}
						/>
					</RadioButton>
				))}
			</RadioGroup>;
		}
	}

	isPay() {
		if (this.props.isPay === true) {
			this.props.cartItems.cart = this.state.clearCard;
			Actions.thanksUser();
		} else {
			return <Spinner />;
		}
	}

	render() {
		const {
			container,
			subContainer,
			amountSubContainerLabel,
			heading,
			stripe,
			stripeWrapper,
			checkBox,
			saveCard,
			cardImg,
			input,
		} = styles;

		// console.log('saved card', this.props.cardInfo);
		// console.log('message---', this.props.cardInfo.hasOwnProperty('message'));

		return (
			<ScrollView>
				<View style={container}>
					<View style={subContainer}>
						<Text  style={amountSubContainerLabel}>{i18n.t('Amount Payable')}</Text>

						<Text>${this.props.cartItems.grandTotal.toFixed(2)}</Text>
					</View>
					<Text style={heading}>{i18n.t('Select Payment Mode')}</Text>

					{this.renderPaymentOptions()}
					{renderIf(this.state.show_stripe_block)(
						<View>
							<Text style={styles.stripeTitle}>Stripe Payment</Text>
							<View style={stripe}>
								<View style={stripeWrapper}>
									<Text  style={styles.stripeWrapperText}>We Accept</Text>
									<Image source={require('../../Images/icon/visa.png')} style={cardImg} />
									<Image source={require('../../Images/icon/masterCard.png')} style={cardImg} />
								</View>
								<Text style={styles.stripeLabel}>Card Number</Text>
								<View>
									<Field
										style={input}
										keyboardType="numeric"
										placeholder="Card Number"
										name="cardNumber"
										value={this.state.number}
										onChange={val => this.setState({ number: val })}
										component={renderInput}
									/>
									<Text style={styles.stripeLabel}>Expiration Date</Text>
									<View style={styles.inputContainer}>
										<View style={styles.inputSubContainer}>
											<Field
												style={input}
												keyboardType="numeric"
												placeholder="Exp Month"
												name="expMonth"
												value={this.state.month}
												onChange={val => this.setState({ month: val })}
												component={renderInput}
											/>
										</View>
										<View style={styles.inputSubContainer}>
											<Field
												style={input}
												keyboardType="numeric"
												placeholder="Year"
												name="expYear"
												value={this.state.year}
												onChange={val => this.setState({ year: val })}
												component={renderInput}
											/>
										</View>
									</View>
									<Text style={styles.stripeLabel}>CVC Code</Text>
									<Field
										style={input}
										keyboardType="numeric"
										placeholder="CVC"
										name="cvc"
										value={this.state.cvcValue}
										onChange={val => this.setState({ cvcValue: val })}
										component={renderInput}
									/>
								</View>
							</View>
							<View style={saveCard}>
								<CheckBox
									label={false}
									checkboxStyle={checkBox}
									checked={this.state.isSaved}
									onChange={() => this.toggleSwitch()}
								/>
								<Text> Save this card for faster checkout</Text>
							</View>
							<Text style={{ fontSize: 16, color: Color.Primary, paddingTop: 3, paddingBottom: 3 }}>
								{' '}
								Saved Card
							</Text>

							{this.renderCardInfo()}
						</View>
					)}
					<CardSection style ={styles.finalBtnWrapper}>
					  <View style={styles.finalBtn}>
					  <View style={styles.finalBtnChild}>
					    <ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.placeOrderData(e)}
                                   disabled={ !this.state.orderData.paymentOption } >
                                          Proceed
                        </ButtonWithBackground>
					 </View>
						{this.props.loading ? <Spinner style={styles.proceedBtnSpinner} Color = {Color.Gray}/> : null}
					</View>
					</CardSection>

				
				</View>
			</ScrollView>
		);
	}
}

function mapStateToProps(state) {
	// console.log('order placed state--->' + JSON.stringify(state.order.orders));
	// console.log('grand===' + state.add.loading);
	// console.log('user card ===>' + JSON.stringify(state.auth.user.totalLoyaltyPoints));
	return {
		orders: state.order.orders,
		stripe: state.add,
		order: state.add,
		userId: state.auth.user._id,
		point: state.auth.user.totalLoyaltyPoints,
		cartItems: state.cartItems,
		cardInfo: state.add.cardInfo,
		card: state.add.card,
		loading: state.add.loading,
		isPay: state.add.isPay,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			placeOrder: placeOrder,
			paymentStripe: paymentStripe,
			fetchCardInfo: fetchCardInfo,
			fetchCartCoupon: fetchCartCoupon,
			deleteCard: deleteCard,
			selectSaveCard: selectSaveCard,
			orderPlaceRequest: orderPlaceRequest
		},
		dispatch
	);
}

Payment = connect(
	mapStateToProps,
	mapDispatchToProps
)(Payment);
export default reduxForm({ validate, form: 'payment' })(Payment);
