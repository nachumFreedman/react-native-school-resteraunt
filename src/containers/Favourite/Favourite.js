import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, Alert,TouchableOpacity, FlatList } from 'react-native';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import Styles from './Styles';
import { connect } from 'react-redux';
// import Toast from 'react-native-simple-toast';
import { bindActionCreators } from 'redux';
import { fetchFavouriteItems, removeFavouriteItem } from '../../Stores/Actions';
import { Actions } from 'react-native-router-flux';
import i18n from "../../../i18n/i18n";

class Favourite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			userReaction: '',
			menuItem: '',
		};
		this.props.fetchFavouriteItems();
	}

	// fetch favourite list items
	favItemFetch() {
		this.props.fetchFavouriteItems();
	}

	removeToFavourite(e, favItem){
		Alert.alert('ohhhh!', 'Do you want to remove Item!', [
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{ text: 'OK', onPress: async () => this.removeItem(e, favItem)},
	], {
			canceLabel: false,
		});

	}
	// remove favourite list items
	async removeItem(e, favItem) {
		// console.log('remove===');
		await this.setState({
			userReaction: 'DISLIKE',
			menuItem: favItem.menuItem._id,
		});
		//	console.log('state==' + this.state.userReaction + ' ' + this.state.product);
		this.props.removeFavouriteItem(this.state.userReaction, this.state.menuItem);
		// Toast.show('Successfully deleted product from Favourite');
		await this.favItemFetch();
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
			DetailTitle,
			DetailContent,
		} = Styles;
		if (this.props.items.length === 0) {
			return (
				<ImageBackground
					source={require('../../Images/bg/login_bg.jpg')}
					style={Styles.bgImg}
				>
					<TouchableOpacity onPress={() => {
						Actions.drawerClose();
						Actions.mainScreen();
					}}>
						<CrossPlatformIcon
							name="heart"
							color={Color.Danger}
							size={150}
							style={Styles.emptyIcon}
						/>
						<Text style={Styles.emptyText}>{i18n.t('Wish List is Empty')}</Text>
					</TouchableOpacity>
				</ImageBackground>
			);
		} else {
			return (
				<ScrollView>
					<ScrollView style={Container}>
						{/* offer product item */}
						<FlatList
							data={this.props.items}
							renderItem={({ item }) => (
								<View style={ItemContainer}>
									<View style={ItemImgContent}>
										<View style={ImgWrapper}>
											<Image source={{ uri: item.menuItem.thumb }} style={Img} />
										</View>
									</View>
									<View style={ItemContent}>
										<Text style={Title}>{item.menuItem.title}</Text>
										<Text style={DetailTitle}>{i18n.t('About Product')}:</Text>
										<Text style={DetailContent}>{item.menuItem.description}</Text>

										<View style={btnWrap}>
											<TouchableOpacity
												style={btn}
												onPress={() => Actions.detail({ productId: item._id })}
											>
												<Text style={btnText}>
													{'\u00A0'}
													{'\u00A0'}{i18n.t('Buy')}{' '}
												</Text>
											</TouchableOpacity>
											<TouchableOpacity
												style={btnDelete}
												onPress={e => this.removeToFavourite(e, item)}
											>
												<Text style={btnText}>
													{'\u00A0'}
													{'\u00A0'}{i18n.t('Delete')}{' '}
												</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							)}
						/>
						{/* offer product item */}
					</ScrollView>
				</ScrollView>
			);
		}
	}
}

const mapStateToProps = state => {
	//console.log('items -->' + JSON.stringify(state.favourite.items));
	return {
		items: state.favourite.items,
		item: state.favourite.item,
		user: state.auth.user,
		productList: state.product.productList,
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchFavouriteItems: fetchFavouriteItems,
			removeFavouriteItem: removeFavouriteItem,
		},
		dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Favourite);
