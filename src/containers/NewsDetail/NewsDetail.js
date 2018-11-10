import React from 'react';
import { View, Text, Image, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { LoadingIndicator } from '../../components';
import { connect } from 'react-redux';
import { fetchNewsById } from '../../Stores/Actions';
import Styles from './Styles';
import Moment from 'moment';

class NewsDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
		const { newsId } = this.props.navigation.state.params;
		this.props.fetchNewsById(newsId);
	}

	async componentWillReceiveProps(nextProps) {
		//	console.log('props' + JSON.stringify(nextProps));
		if (!nextProps.loading) {
			await this.setState({
				loading: nextProps.loading,
			});
			// console.log("next Props==" + this.state.loading);
		}
	}

	render() {
		if (this.state.loading) {
			return <LoadingIndicator />;
		}
		const {
			Container,
			ItemContainer,
			ImgWrapper,
			Img,
			Title,
			DetailContent,
			DateContent,
			DateIcon,
			DateText,
		} = Styles;
		return (
			<View>
				<ScrollView style={Container}>
					<View style={ImgWrapper}>
						<Image source={{ uri: this.props.newsDetails.thumb }} style={Img} />
					</View>
					<View style={ItemContainer}>
						<Text style={Title}>{this.props.newsDetails.title}</Text>
						<View style={DateContent}>
							<Image source={require('../../Images/icon/arrow_right.png')} style={DateIcon} />
							<Text style={DateText}>
								{Moment(this.props.newsDetails.createdAt).format('DD-MMM-YYYY')},
								{Moment(this.props.newsDetails.createdAt).format('h:mm a')}
							</Text>
						</View>
						<Text style={DetailContent}>{this.props.newsDetails.fullDescription}</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

// const mapStateToProps = state => {
//     console.log("newsdetails in class-" + JSON.stringify(state.news.newsDetails) )
//     return { newsDetails: state.news.newsDetails };
//   };

const mapStateToProps = ({ news }) => {
	const { newsDetails, props } = news;
	// console.log('first Loading' + JSON.stringify(news.newsDetails));
	return { newsDetails, props };
};

export default connect(mapStateToProps, { fetchNewsById })(NewsDetail);
