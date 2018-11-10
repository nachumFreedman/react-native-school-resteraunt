import React from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { LoadingIndicator, ButtonIcon, Spinner } from '../../components';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import renderIf from '../../components/renderIf';
import CheckBox from 'react-native-checkbox';
import Styles from './Styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAddressById, fetchUserById, deleteAddress } from '../../Stores/Actions';
import { Actions } from 'react-native-router-flux';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import i18n from '../../../i18n/i18n';

class AddressList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cartItems: {},
			shippingAddress: {},
			active: false,
			isSelected: 0,
			loading: true,
			isChecked: false,
			payAmount: this.props.cartItems.grandTotal,
			orderData: {},
			isSelect: false,
		};

		this.props.fetchAddressById();
	}

	async componentWillReceiveProps(nextProps) {
		//	console.log('props====>' + JSON.stringify(nextProps));
		if (!nextProps.loading) {
			await this.setState({
				loading: nextProps.loading,
			});
			//	console.log('next Props==' + this.state.loading);
		}
	}
	// update total
	async updateTotal() {
		const total = this.state.payAmount - this.props.auth.totalLoyaltyPoints;
		console.log('----->' + total);
		await this.setState({
			payAmount: total,
		});
		this.props.cartItems.grandTotal = this.state.payAmount;
		console.log('payMount--->' + this.state.payAmount);
	}

	// select address with the use of dynamic radio buttons & taking all information about selected card items
	selectAddress(index, value, selectedAddress) {
		//	console.log('selected Address-->' + JSON.stringify(selectedAddress));

		this.props.cartItems.grandTotal = this.state.payAmount;
		var orderData = Object.assign({}, this.state.cartItems, {
			shippingAddress: selectedAddress,
		});
		this.setState({ orderData: orderData, isSelect: true });

		// console.log('order-data->' + JSON.stringify(orderData));
		selectedAddress.selected = true;
		this.props.addressList.map(address => {
			if (selectedAddress._id != address._id) {
				address.selected = false;
			}
		});
	}

	toggleSwitch() {
		//	console.log('checkbox==>' + this.state.isChecked);

		if (this.state.isChecked === false) {
			this.setState({
				isChecked: true,
				active: true,
			});
			this.updateTotal();
		} else {
			const total = this.state.payAmount + this.props.auth.totalLoyaltyPoints;
			this.setState({
				isChecked: false,
				payAmount: total,
				active: false,
			});

			// console.log('----->' + total);
			// await this.setState({
			// 	payAmount: total,
			// });
			// this.props.cartItems.grandTotal = this.state.payAmount;
			// console.log('payMount--->' + this.state.payAmount);
		}
		//	console.log('save==>' + this.state.isChecked);
	}

	//payment

	moveToPay(e) {
		//	console.log('move');
		if (this.state.isSelect === false) {
			Alert.alert('Please!', 'Select Address !', [{ text: 'OK', onPress: () => console.log('ok') }], {
				canceLabel: false,
			});
		} else {
			Actions.payment({
				orderData: this.state.orderData,
				userId: this.props.userId,
			});
		}
	}

	// use loyality points
	selectLoyalityPoint() {
		if (!this.state.active) {
			this.setState({ value: true, active: true });
		} else {
			this.setState({ value: false, active: false });
		}
	}

	// fetch address
	fetchAddress() {
		this.props.fetchAddressById();
	}

	// delete address info
	async deleteAddress(e, id) {
			Alert.alert('ohhhh!', 'Do you want to delete address!', [
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{ text: 'OK', onPress: async () => {
				this.props.deleteAddress(id);
		        await this.fetchAddress();
			} },
		], {
				canceLabel: false,
			});
	
		
		// Toast.show('Address has been deleted');
	}

	loadingData() {
		if (this.props.loading) {
			return <LoadingIndicator />;
		}
	}

	render() {
		const {
			container,
			amountWrapper,
			amountSubContainer,
			checkBox,
			loyalityPointText,
			addressHeader,
			addressHeaderLabel,
			addressBtn,
			addressBtnTitle,
			addressList,
			addressItem,
			addressItemWrapper,
			deleteIcon,
			proceedBtn,
			btnText,
			horzontalLine,
			amountSubContainerLabel,
			amountSubContainerValue
		} = Styles;
		console.log('total---' + JSON.stringify(this.props.addressList));
		if (this.props.loading) {
			return <Spinner />;
		}
		return (
			<ScrollView style={container}>
				<View >
					<View style={amountWrapper}>
						<View style={amountSubContainer}>
							<Text style={amountSubContainerLabel}>{i18n.t('Total Order')}</Text>
							<Text style={amountSubContainerValue}>${this.state.payAmount.toFixed(2)}</Text>
						</View>
						{renderIf(this.props.auth.totalLoyaltyPoints >= 0)(
							<View>
								<View style={amountSubContainer}>
									<Text style={amountSubContainerLabel}>{i18n.t('Loyality Points')}</Text>
									<Text style={amountSubContainerValue}>${this.props.auth.totalLoyaltyPoints}</Text>
								</View>
								{renderIf(this.props.auth.totalLoyaltyPoints != 0)(
									<View style={amountSubContainer}>
										<Text style={amountSubContainerLabel}>Use Loyality Points</Text>
										<CheckBox
											label="false"
											checkboxStyle={checkBox}
											checked={this.state.isChecked}
											onChange={() => this.toggleSwitch()}
										/>
									</View>
								)}
							</View>
						)}
						{renderIf(this.state.active)(
							<Text style={loyalityPointText}>Use Total 9 Loyality Points</Text>
						)}
					</View>
					<View style={addressHeader}>
						<Text style={addressHeaderLabel}>{i18n.t('Address List')}</Text>
						<TouchableOpacity style={addressBtn} onPress={() => Actions.addAddress()}>
							<Text style={addressBtnTitle}>{i18n.t('Add New Address')}</Text>
						</TouchableOpacity>
					</View>
					{renderIf(this.props.addressList.length != 0)(
						<View style={addressList}>
							{this.loadingData()}
							<View>
								<RadioGroup
									size={24}
									thickness={2}
									color={Color.Danger}
									highlightColor={Color.Light}
									onSelect={(index, value) =>
										this.selectAddress(index, value, this.props.addressList[index])
									}
								>
									{this.props.addressList.map(item => {
										return (
											<RadioButton value={item.userName} key={item.userName}>
												<View style={addressItemWrapper}>
													<View style={Styles.addressInfo}>
														<Text>{item.userName}</Text>
														<Text>{item.city}</Text>
														<Text>{item.landmark}</Text>
														<Text>{item.pincode}</Text>
													</View>
													<View style={addressItem}>
														<TouchableOpacity
															onPress={e => this.deleteAddress(e, item._id)}
														>
															<CrossPlatformIcon
																name="trash"
																color={Color.Danger}
																size={20}
																style={deleteIcon}
																onPress={e => this.deleteAddress(e, item._id)}
															/>
														</TouchableOpacity>
													</View>
												</View>
											</RadioButton>
										);
									})}
								</RadioGroup>
							</View>
						</View>
					)}

					<ButtonIcon
						BtnTextStyle={btnText}
						style={proceedBtn}
						title={i18n.t("Proceed")}
						iconName="arrow-forward"
						color={Color.White}
						size={20}
						onPress={e => this.moveToPay(e)}
					/>
					
				</View>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	// console.log('address-->' + JSON.stringify(state.add.address));
	return {
		addressList: state.add.address,
		loading: state.add.loading,
		cartItems: state.cartItems,
		userId: state.auth.user._id,
		auth: state.auth.user,
		addressCrud: state.add.addressCrud,
		isLoggedIn: state.auth.isLoggedIn,
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchAddressById: fetchAddressById,
			deleteAddress: deleteAddress,
		},
		dispatch
	);
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddressList);
