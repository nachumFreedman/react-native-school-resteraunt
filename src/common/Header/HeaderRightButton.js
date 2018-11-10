import React from 'react';
import { View, Text, Image, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Color } from '../color/Color';
import { connect } from 'react-redux';
import { Badge } from '../../components';
import renderIf from '../../components/renderIf';
import { CrossPlatformIcon } from '../CrossPlatformIcon/CrossPlatformIcon';

class HeaderRightButton extends React.Component {
	render() {
		return (
			<View style={styles.HeaderRightButton}>
				<TouchableOpacity onPress={this.props.onPress}>
					{renderIf(this.props.cartItems.cart.length > 0)(
						<Badge
							text={this.props.cartItems.cart.length}
							style={{ position: 'absolute', zIndex: 999, left: 10 }}
						/>
					)}
					<CrossPlatformIcon
						name={this.props.btnIcon}
						color={Color.White}
						size={40}
						style={{ position: 'relative' }}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = {
	HeaderRightButton: {
		position: 'absolute',
		top: 19,
		right: 16,
	},
};

const mapStateToProps = state => {
	return { cartItems: state.cartItems };
};

export default connect(mapStateToProps, {})(HeaderRightButton);
