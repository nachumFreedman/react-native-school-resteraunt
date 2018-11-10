import React from 'react';
import { View, ImageBackground, Image, FlatList, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchProductList } from '../../Stores/Actions';
import {  LoadingIndicator } from '../../components';
import SearchInput, { createFilter } from 'react-native-search-filter';
import styles from './styles';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import renderIf from '../../components/renderIf';
import { Actions } from 'react-native-router-flux';
import i18n from '../../../i18n/i18n';
const KEYS_TO_FILTERS = ['description'];

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, searchTerm: '', searchBar: false };
		var { categoryId } = this.props.navigation.state.params;
		this.props.fetchProductList(categoryId);
	}
	searchUpdated(term) {
		this.setState({ searchTerm: term, searchBar: true });
	}
	componentDidMount() {
		//	console.log('call did mount');
	}
	componentWillUnmount() {
		//	console.log('called will unmount');
	}

	async componentWillReceiveProps(nextProps) {
		// console.log("props" + JSON.stringify(nextProps));
		if (!nextProps.loading) {
			await this.setState({
				loading: nextProps.loading,
			});
			// console.log("next Props==" + this.state.loading);
		}
	}

	loadingData() {
		if (this.state.loading) {
			return <LoadingIndicator />;
		}
	}

	renderSearch() {
		if (this.state.searchTerm != 'null') {
			{
				this.props.productList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)).map(item => (
					<View style={styles.productListItem}>
						<Text style={styles.title}> {item.categoryTitle}</Text>
					</View>
				));
			}
		}
	}

	render() {
		const {
			container,
			
			mainContainer,
			searchHeader,
			
			productListWrapper,
			productListItem,
			productListContainer,
			productListImg,
			productListInfo,
			title,
			price,
			productInfo,
			productSubtitle,
		} = styles;
		if (this.state.loading) {
			return <LoadingIndicator />;
		}
		const filteredCategories = this.props.productList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
		if (this.props.productList.length === 0) {
			return (
				<ImageBackground
					source={require('../../Images/bg/login_bg.jpg')}
					style={styles.bgImg}
				>
					<TouchableOpacity onPress={() => {
						Actions.drawerClose();
						Actions.mainScreen();
					}}>
						<CrossPlatformIcon
							name="list"
							color={Color.White}
							size={150}
							style={styles.emptyIcon}
						/>
						<Text style={styles.emptyText}>{i18n.t('Sorry there is no products')}</Text>
					</TouchableOpacity>
				</ImageBackground>
			);
		} else {
			return (
				<ScrollView style={container}>
					<View>{this.loadingData()}</View>

					<View style={mainContainer}>
						<View style={searchHeader}>
						<View style={styles.searchHeaderIconWrapper} >
							<CrossPlatformIcon name="search" color={Color.Gray} size={22} />
						</View>
							<SearchInput
								onChangeText={term => {
									this.searchUpdated(term);
								}}
								style={styles.searchInput}
								placeholder="Type a message to search"
							/>
						</View>
						{renderIf(this.state.searchBar === true)(
							this.props.productList
								.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
								.map(item => (
									<View style={productListItem}>
											<TouchableOpacity
												style={productListContainer}
												onPress={() => Actions.detail({ productId: item._id })}
											>
												<Image source={{ uri: item.thumb }} style={productListImg} />
												<View style={productListInfo}>
													<View style={productInfo}>
														<Text style={title}> {item.categoryTitle}</Text>
														<Text style={price}>${item.sortPrice}</Text>
													</View>
													<Text style={productSubtitle}>{item.description}</Text>
												</View>
											</TouchableOpacity>
										</View>
								))
						)}
						{renderIf(this.state.searchBar === false)(
							<View>
								<FlatList
									data={this.props.productList}
									style={productListWrapper}
									renderItem={({ item }) => (
										<View style={productListItem}>
											<TouchableOpacity
												style={productListContainer}
												onPress={() => Actions.detail({ productId: item._id })}
											>
												<Image source={{ uri: item.thumb }} style={productListImg} />
												<View style={productListInfo}>
													<View style={productInfo}>
														<Text style={title}> {item.categoryTitle}</Text>
														<Text style={price}>${item.sortPrice}</Text>
													</View>
													<Text style={productSubtitle}>{item.description}</Text>
												</View>
											</TouchableOpacity>
										</View>
									)}
									keyExtractor={(item, index) => item._id}
								/>
							</View>
						)}
					</View>
				</ScrollView>
			);
		}
	}
}

// const mapStateToProps = state => {
//   console.log("Product list-->" + JSON.stringify(state.product.productList));
//   return { productList: state.product.productList };
// };
const mapStateToProps = ({ product }) => {
	// console.log("list---"+ product.productList);
	const { productList, loading } = product;
	console.log('first Loading' + JSON.stringify(product.loading));
	return { productList, loading };
};

export default connect(
	mapStateToProps,
	{ fetchProductList }
)(ProductList);
