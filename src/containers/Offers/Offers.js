import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList,ImageBackground } from 'react-native';
import {  LoadingIndicator } from '../../components';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import Styles from './Styles';
import { connect } from 'react-redux';
import { fetchOfferMenuItem } from '../../Stores/Actions';
import i18n from "../../../i18n/i18n";
import { Actions } from 'react-native-router-flux';

class Offers extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
		this.props.fetchOfferMenuItem();
	}

	// for loading data
	loadingData() {
		if (this.props.loading) {
			return <LoadingIndicator />;
		}
	}

	render() {
		const {
			Container,
			ItemContainer,
			ImgWrapper,
			Img,
			OfferWrap,
			OfferText,
			ItemContent,
			ItemImgContent,
			Title,
			InfoWrap,
			InfoLabel,
			Info,
			btnWrap,
			btn,
			btnText,
			DetailTitle,
			DetailContent,
		} = Styles;
       if(this.props.offerItem.length === 0){
		   return(
			<ImageBackground
			source={require('../../Images/bg/login_bg.jpg')}
			style={Styles.bgImg}
		>
			<TouchableOpacity onPress={() => {
				Actions.drawerClose();
				Actions.mainScreen();
			}}>
				<CrossPlatformIcon
					name="empty"
					color={Color.White}
					size={150}
					style={Styles.emptyIcon}
				/>
				<Text style={Styles.emptyText}>{i18n.t('Sorry there is no Offers')}</Text>
			</TouchableOpacity>
		</ImageBackground>
	
		   );
	   }
	   else{
		return (
			<ScrollView>
				<View style={Container}>
					{/* offer product item */}
					<View>{this.loadingData()}</View>
					<FlatList
						data={this.props.offerItem}
						renderItem={({ item }) => {
							if (item.discount > 0) {
								return (
									<View style={ItemContainer}>
										<View style={ItemImgContent}>
											<View style={ImgWrapper}>
												<Image source={{ uri: item.thumb }} style={Img} />
												<View style={OfferWrap}>
													<Text style={OfferText}>{item.discount} %</Text>
												</View>
											</View>
											<View style={btnWrap}>
												<TouchableOpacity
													style={btn}
													onPress={() =>
														Actions.detail({
															productId: item._id,
														})
													}
												>
													<CrossPlatformIcon name="basket" color={Color.White} size={20} />
													<Text style={btnText}>
														{'\u00A0'}
														{'\u00A0'}
														{'\u00A0'}
														{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}   {i18n.t('BUY AGAIN')}
													</Text>
												</TouchableOpacity>
											</View>
										</View>
										<View style={ItemContent}>
											<Text style={Title}>{item.categoryTitle}</Text>
											<View style={InfoWrap}>
												<Text style={InfoLabel}>{i18n.t('Original Price')}</Text>
												<Text style={Info}>${item.price[0].value} </Text>
											</View>
											<View style={InfoWrap}>
												<Text style={InfoLabel}>{i18n.t('Offer Price')}</Text>
												<Text style={Info}>${item.sortPrice}</Text>
											</View>
											<Text style={DetailTitle}>{i18n.t('About Product')}:</Text>
											<Text style={DetailContent}>{item.description}</Text>
										</View>
									</View>
								);
							}
						}}
						keyExtractor={(item, index) => item._id}
					/>

					{/* offer product item */}
				</View>
			</ScrollView>
		);
	}
	}
}

const mapStateToProps = ({ product }) => {
	//console.log('offer in class-' + JSON.stringify(product.offerItem));
	const { offerItem, loading } = product;
	//	console.log('first Loading' + JSON.stringify(product.loading));
	return { offerItem, loading };
};

export default connect(
	mapStateToProps,
	{ fetchOfferMenuItem }
)(Offers);
