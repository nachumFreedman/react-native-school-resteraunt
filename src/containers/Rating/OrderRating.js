import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Input, Spinner, CardSection,ButtonWithBackground } from '../../components';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { ratingStatus } from '../../Stores/Actions';
import Styles from './Styles';
import { Color } from '../../common/color/Color';
import { Actions } from 'react-native-router-flux';
import i18n from "../../../i18n/i18n";

class OrderRating extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItem: '',
			order: '',
			rating: 0,
			comment: '',
			ratingStatus: false
		};
		this.onButtonPress = this.onButtonPress.bind(this);
	}

	// start rating
	onStarRatingPress(rating) {
		this.setState({
			ratingStatus: true,
			menuItem: this.props.navigation.state.params.productId,
			order: this.props.navigation.state.params.orderId,
			rating: rating,
		});
	}

	onButtonPress(e) {
		if (!this.state.rating) {
			Alert.alert(
				'Please Submit Your Rating',
				'',
				[
					{
						text: 'Cancel',
						onPress: Actions.rating(),
						style: 'cancel',
					},
					{ text: 'OK', onPress: () => Actions.rating() },
				],
				{ cancelable: false }
			);
		} else {
			this.props.ratingStatus(this.state.menuItem, this.state.order, this.state.rating, this.state.comment);
			Actions.homeScreen();
		}
	}

	render() {
		const { rateView, inputWrapper, input, reviewText, reviewWrapper, BtnWrapper, headerImg } = Styles;
		return (
			<View>
				<View style={{ padding: 20 }}>
					<View style={rateView}>
						<StarRating
							disabled={false}
							maxStars={5}
							starSize={30}
							starColor={Color.Primary}
							emptyStarColor={Color.Primary}
							fullStarColor={Color.Primary}
							rating={this.state.rating}
							selectedStar={rating => this.onStarRatingPress(rating)}
						/>
					</View>
					<Text style={reviewText}>{i18n.t('Review')}</Text>
					<View style={reviewWrapper}>
						<Input
							style={inputWrapper}
							onChangeText={val => this.setState({ comment: val })}
							multiline={true}
							Input={input}
							numberOfLines={6}
						/>
					</View>
					<CardSection>
						<View style={Styles.ratingBtn}>
						<View style={Styles.ratingBtnChild}>
                            <ButtonWithBackground
                                   color = '#4bc08a'
                                   onPress={e => this.onButtonPress(e)}
                                    disabled={!this.state.ratingStatus } >
                                          {i18n.t('Submit')}
                                     </ButtonWithBackground>
							</View>
							{this.props.loading ? <Spinner style={Styles.ratingBtnSpinner} Color = {Color.Gray}/> : null}
						</View>
					</CardSection>
				
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	//	console.log('rate-state-' + JSON.stringify(state.rate.rating));
	return { rate: state.rate, loading: state.rate.loading };
};

export default connect(
	mapStateToProps,
	{ ratingStatus }
)(OrderRating);
