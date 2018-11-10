/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
	Scene,
	Router,
	Actions,
	Drawer,
	Stack,
} from 'react-native-router-flux';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CartButton from './src/common/Header/CartButton';
import Home from './src/containers/Home/Home';
import ProductDetail from './src/containers/ProductDetail/ProductDetail';
import ProductList from './src/containers/ProductList/ProductList';
import Cart from './src/containers/Cart/Cart';
import LoginScreen from './src/containers/user/LoginScreen';
import SignUp from './src/containers/user/SignUp';
import ForgetPassword from './src/containers/user/ForgetPassword';
import ConfirmPassword from './src/containers/user/ConfirmPassword';
import OTPGenerate from './src/containers/user/OTPGenerate';
import SideBar from './src/common/SideBar/SideBar';
import AddressList from './src/containers/AddressList/AddressList';
import AddressForm from './src/containers/AddressForm/AddressForm';
import Payment from './src/containers/Payment/Payment';
import ThankYou from './src/containers/ThankYou/ThankYou';
import Categories from './src/containers/Categories/Categories';
import AboutUs from './src/containers/About/AboutUs';
// import Map from './src/containers/About/Map';
import BookingHistory from './src/containers/BookingHistory/BookingHistory';
import BookingTable from './src/containers/Table/BookingTable';
import Chat from './src/containers/Chat/Chat';
import Contact from './src/containers/Contact/Contact';
import Favourite from './src/containers/Favourite/Favourite';
import News from './src/containers/News/News';
import NewsDetail from './src/containers/NewsDetail/NewsDetail';
import Offers from './src/containers/Offers/Offers';
import OrderStatus from './src/containers/Order/OrderStatus';
import OrderList from './src/containers/OrderList/OrderList';
import OrderRating from './src/containers/Rating/OrderRating';
import Setting from './src/containers/Settings/Setting';
import ViewOrder from './src/containers/ViewOrder/ViewOrder';
import MenuIcon from './src/Images/menu.png';
import { Color } from './src/common/color/Color';
import i18n from "./i18n/i18n";

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				{/* Removed for brevity */}
				<Drawer
					hideNavBar
					key="draw"
					contentComponent={SideBar}
					drawerImage={MenuIcon}
					drawerWidth={300}
					tapToClose={true}
				>
					{/*
		        Wrapper Scene needed to fix a bug where the tabs would
		        reload as a modal ontop of itself
		      */}
					<Stack
						key="mainScreen"
						title="Tab #1"
						tabBarLabel="TAB #1"
						inactiveBackgroundColor="#FFF"
						activeBackgroundColor="#DDD"
						icon={MenuIcon}
						navigationBarStyle={{ backgroundColor: Color.Dark }}
						titleStyle={styles.titleStyle}
					>
						<Scene
							key="homeScreen"
							component={Home}
							title={i18n.t("Home")}
							rightButton={<CartButton onPress={() => Actions.cart()} />}
						/>
					</Stack>
				</Drawer>

				<Scene
					key="productList"
					component={ProductList}
					title={i18n.t("ProductList")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					hideMenuImage={true}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="detail"
					component={ProductDetail}
					title={i18n.t("ProductDetail")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="cart"
					component={Cart}
					title={i18n.t("Cart")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="addressList"
					component={AddressList}
					title={i18n.t("Delivery Options")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="addAddress"
					component={AddressForm}
					title={i18n.t("Add Address")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="payment"
					component={Payment}
					title={i18n.t("Pay Now")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene key="thanksUser" component={ThankYou} hideNavBar />
				<Scene
					key="categories"
					component={Categories}
					title={i18n.t("Category")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="favourite"
					component={Favourite}
					title={i18n.t("Favourite")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="bookTable"
					component={BookingTable}
					title={i18n.t("Book A Table")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="history"
					component={BookingHistory}
					title={i18n.t("Booking History")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="contact"
					component={Contact}
					title={i18n.t("Contact")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="news"
					component={News}
					title={i18n.t("News")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="newsDetail"
					component={NewsDetail}
					title={i18n.t("News Detail")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="chat"
					component={Chat}
					title={i18n.t("Chat")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="offer"
					component={Offers}
					title={i18n.t("Offers")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="orderStatus"
					component={OrderStatus}
					title={i18n.t("Order Status")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="orderList"
					component={OrderList}
					title={i18n.t("Order")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="rating"
					component={OrderRating}
					title={i18n.t("Rating")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="setting"
					component={Setting}
					title={i18n.t("Settings")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="ViewOrder"
					component={ViewOrder}
					title={i18n.t("Order")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				<Scene
					key="aboutUs"
					component={AboutUs}
					title={i18n.t("About Us")}
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/>
				{/* <Scene
					key="map"
					component={Map}
					title="Map"
					rightButton={<CartButton onPress={() => Actions.cart()} />}
					navigationBarStyle={{ backgroundColor: Color.Dark }}
					titleStyle={styles.titleStyle}
					tintColor={Color.White}
				/> */}
				<Scene hideNavBar key="login" component={LoginScreen} />
				<Scene hideNavBar key="register" component={SignUp} />
				<Scene hideNavBar key="forgotPassword" component={ForgetPassword} />
				<Scene hideNavBar key="confirmPassword" component={ConfirmPassword} />
				<Scene hideNavBar key="otp" component={OTPGenerate} />
			</Scene>
		</Router>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		 color: Color.White, alignSelf: 'center' 
	}
});

export default RouterComponent;
