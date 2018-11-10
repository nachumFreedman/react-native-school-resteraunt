import React from 'react';
import { View, Text, Image, FlatList, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { CardSection, Card } from '../../components';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import Styles from './Styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategoryList } from '../../Stores/Actions';
import { Actions } from 'react-native-router-flux';

class Categories extends React.Component {
	constructor(props) {
		super(props);
		this.props.fetchCategoryList();
	}

	render() {
		const { Container, LisItem, ItemImgWrapper, ItemImg, LisItemBody, Title, Detail } = Styles;

		return (
			<View>
				{/* listeItem item */}
				<View style={Container}>
					<ScrollView>
						<FlatList
							data={this.props.categories}
							renderItem={({ item }) => (
								<TouchableOpacity onPress={() => Actions.productList({ categoryId: item._id })}>
									<View style={Styles.LisItem}>
										<View style={Styles.ItemImgWrapper}>
											<Image source={{ uri: item.thumb }} style={Styles.ItemImg} />
										</View>
										<View style={Styles.LisItemBody}>
											<Text style={Styles.Title}>{item.title}</Text>
											<Text style={Styles.Detail} numberOfLines={3}>
												{item.description} 
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							)}
							keyExtractor={(item, index) => item.title}
						/>

						{/* listeItem item */}
					</ScrollView>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	//	console.log('category in class-' + JSON.stringify(state.categoryList.categories));
	return {
		categories: state.categoryList.categories,
		loading: state.categoryList.loading,
	};
};

export default connect(
	mapStateToProps,
	{ fetchCategoryList }
)(Categories);
