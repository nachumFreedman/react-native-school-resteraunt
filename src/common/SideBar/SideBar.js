import React from 'react';
import {
	Image,
	View,
	Text,
	ImageBackground,
	ScrollView,
	AsyncStorage,
} from 'react-native';
import { SidebarItem, CardSection } from '../../components/index';
import styles from './styles';
import { connect } from 'react-redux';
import { logOut, fetchUserById } from '../../Stores/Actions';
import { Actions } from 'react-native-router-flux';
import i18n from '../../../i18n/i18n';

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
        this.props.fetchUserById();
		this.logoutHandler = this.logoutHandler.bind(this);
		if (this.isAuthenticated) {
			// console.log('loggedin - ', this.props.user.isLoggedIn);
		}
	}

	async isAuthenticated() {
		
		return this.props.user.isLoggedIn;
	}

	// selectPhotoTapped() {
	// 	const options = {
	// 		quality: 1.0,
	// 		maxWidth: 500,
	// 		maxHeight: 500,
	// 		storageOptions: {
	// 			skipBackup: true,
	// 		},
	// 	};

	// 	ImagePicker.showImagePicker(options, response => {
	// 		console.log('Response = ', response);

	// 		if (response.didCancel) {
	// 			console.log('User cancelled photo picker');
	// 		} else if (response.error) {
	// 			console.log('ImagePicker Error: ', response.error);
	// 		} else if (response.customButton) {
	// 			console.log('User tapped custom button: ', response.customButton);
	// 		} else {
	// 			let source = { uri: response.uri };

	// 			// You can also display the image using data:
	// 			// let source = { uri: 'data:image/jpeg;base64,' + response.data };

	// 			this.setState({
	// 				ImageSource: source,
	// 			});
	// 		}
	// 	});
	// }

	contact() {
		Actions.contact();
	}
	orders() {
		Actions.orderStatus();
	}
	orderList() {
		Actions.orderList();
	}
	offer() {
		Actions.offer();
	}
	bookTable() {
		Actions.bookTable();
	}
	bookingHistory() {
		Actions.history();
	}
	favourites() {
		Actions.favourite();
	}
	chat() {
		Actions.chat();
	}
	setting() {
		Actions.setting();
	}
	loginHandler() {
		Actions.login();
	}
	logoutHandler() {
		this.props.logOut();
		AsyncStorage.removeItem('access_token');
		Actions.login();
	}

	home() {
		Actions.homeScreen();
	}

	news() {
		Actions.news();
	}

	categories() {
		Actions.categories();
	}

	aboutUs() {
		Actions.aboutUs();
	}

	// renderCommonMenu() {
	// 	return (
	// 		<FlatList
	// 			data={sideMenuBarItems}
	// 			renderItem={({ item }) => (
	// 				<CardSection style={styles.sideMenu}>
	// 					<SidebarItem
	// 						key={item.name}
	// 						onPress={() => item.route}
	// 						iconName={item.icon}
	// 						title={item.name}
	// 					/>
	// 				</CardSection>
	// 			)}
	// 			keyExtractor={(item, index) => item.name}
	// 		/>
	// 	);
	// }

	render() {
		const {
		
			imgBackground,
			selectImage,
			sideMenu,
		} = styles;
		if (this.props.auth.isLoggedIn) {
			console.log('isLoggedIn -' + this.props.auth.isLoggedIn);
			return (
				<ScrollView>
						<ImageBackground style={imgBackground} source={require('../../Images/bg/sidebar_bg.jpg')}>
						<View style={styles.sideMenuWrapper}>
					
								<View style={styles.sideMenuImage}>
								{this.props.user.imageUrl === null ?
									
										<Image
										style={selectImage}
										source={require('../../Images/icon/profile.jpg')}
									/>
									 :
									
										<Image
											style={selectImage}
											source={{ uri: this.props.user.imageUrl }}
										/>
									}
								</View>
							<Text style={styles.userName}>{this.props.user.name}</Text>
						</View>
								<View  style={styles.sideMenuWrapper}>
									<CardSection style={sideMenu}>
										<SidebarItem onPress={() => this.home()} iconName="home" title={i18n.t("Home")} />
									</CardSection>
									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.categories()}
											iconName="list"
											title={i18n.t("Categories")}
										/>
									</CardSection>
									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.aboutUs()}
											iconName="people"
											title={i18n.t("About Us")}
										/>
									</CardSection>
									<CardSection style={sideMenu}>
										<SidebarItem onPress={() => this.news()} iconName="list-box" title={i18n.t("News")} />
									</CardSection>
									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.favourites()}
											iconName="heart"
											title={i18n.t("Favourite")}
										/>
									</CardSection>

									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.orderList()}
											iconName="color-palette"
											title={i18n.t("Your Order")}
										/>
									</CardSection>

									<CardSection style={sideMenu}>
										<SidebarItem onPress={() => this.offer()} iconName="pricetag" title={i18n.t("Offers")} />
									</CardSection>

									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.contact()}
											iconName="call"
											title={i18n.t("Contact Us")}
										/>
									</CardSection>

									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.bookTable()}
											iconName="apps"
											title={i18n.t("Book Table")}
										/>
									</CardSection>
									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.bookingHistory()}
											iconName="time"
											title={i18n.t("BookingHistory")}
										/>
									</CardSection>

									<CardSection style={sideMenu}>
										<SidebarItem onPress={() => this.chat()} iconName="chatbubbles" title={i18n.t("Chat")} />
									</CardSection>
									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.setting()}
											iconName="settings"
											title={i18n.t("Setting")}
										/>
									</CardSection>

									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.logoutHandler()}
											iconName="log-out"
											title={i18n.t("Logout")}
										/>
									</CardSection>
								</View>
						</ImageBackground>
				</ScrollView>
			);
		} else {
			return (
				<ScrollView>
					<ImageBackground style={imgBackground} source={require('../../Images/bg/sidebar_bg.jpg')}>
						<View style={styles.sideMenuWrapper}>
			
								<View style={styles.sideMenuImage}>
										<Image
										style={selectImage}
										source={require('../../Images/icon/profile.jpg')}
									/>									
								</View>
						</View>
			
								<View  style={styles.sideMenuWrapper}>
									<CardSection style={sideMenu}>
										<SidebarItem onPress={() => this.home()} iconName="home" title={i18n.t("Home")} />
									</CardSection>
									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.categories()}
											iconName="list"
											title={i18n.t("Categories")}
										/>
									</CardSection>
									<CardSection style={sideMenu}>
										<SidebarItem
											onPress={() => this.aboutUs()}
											iconName="people"
											title={i18n.t("About Us")}
										/>
									</CardSection>
									<CardSection style={sideMenu}>
										<SidebarItem onPress={() => this.news()} iconName="list-box" title={i18n.t("News")} />
									</CardSection>
									<CardSection>
										<SidebarItem
											onPress={() => this.loginHandler()}
											iconName="log-in"
											title={i18n.t("Login")}
										/>
									</CardSection>
								</View>
						</ImageBackground>
				</ScrollView>
			);
		}
	}
}

const mapStateToProps = state => {
	// console.log('side bar state-' + JSON.stringify(state));
	// console.log(state.auth.user.name);
	return {
		auth: state.auth,
		user: state.auth.user,
	};
};

export default connect(
	mapStateToProps,
	{ logOut ,fetchUserById},
	null
)(SideBar);
