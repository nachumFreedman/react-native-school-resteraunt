import React from 'react';
import { View, Text, Image, ScrollView, Dimensions, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { LoadingIndicator, Spinner } from '../../components';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import Styles from './Styles';
import { connect } from 'react-redux';
import { fetchNews } from '../../Stores/Actions';
import { Actions } from 'react-native-router-flux';

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
		this.props.fetchNews();
	}

	// for loading data

	// async componentWillReceiveProps(nextProps) {
	// 	console.log('props' + JSON.stringify(nextProps));
	// 	if (!nextProps.loading) {
	// 		await this.setState({
	// 			loading: nextProps.loading,
	// 		});
	// 		// console.log("next Props==" + this.state.loading);
	// 	}
	// }

	render() {
		const {
			Container,
			ItemContainer,
			ImgWrapper,
			Img,
			ItemContent,
			ItemImgContent,
			ItemRightIcon,
			Title,
			DetailContent,
		} = Styles;
        // if (this.state.loading) {
		// 	return <LoadingIndicator />;
		// }
		return (
			<View>
				<ScrollView style={Container}>
					<FlatList
						data={this.props.newsList}
						renderItem={({ item }) => (
							<TouchableOpacity onPress={() => Actions.newsDetail({ newsId: item._id })}>
								<View style={ItemContainer}>
									<View style={ItemImgContent}>
										<View style={ImgWrapper}>
											<Image source={{ uri: item.thumb }} style={Img} />
										</View>
									</View>
									<View style={ItemContent}>
										<Text style={Title}>{item.title}</Text>
										<Text style={DetailContent} numberOfLines={3}>
											{item.shortDescription}
										</Text>
									</View>
									<View style={ItemRightIcon}>
										<CrossPlatformIcon name="arrow-forward" color={Color.Border} size={30} />
									</View>
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={(item, index) => item.title}
					/>
					{/* offer product item */}
				</ScrollView>
			</View>
		);
	}
}

// const mapStateToProps = state => {
//     console.log("news in class-" + JSON.stringify(state.news.newsList) );
//     return { newsList: state.news.newsList, loading: state.news.loading };
//   };

const mapStateToProps = ({ news }) => {
	const { newsList, props } = news;
	//	console.log('first Loading' + JSON.stringify(news.loading));
	return { newsList, props };
};

export default connect(
	mapStateToProps,
	{ fetchNews }
)(News);
