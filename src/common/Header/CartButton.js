import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CrossPlatformIcon } from '../CrossPlatformIcon/CrossPlatformIcon';
import { Color } from '../color/Color';
import { connect } from 'react-redux';
import renderIf from '../../components/renderIf';
import { Badge } from '../../components';

class CartButton extends React.Component {
	render() {
		const { CartBtnIcon, cartIcon } = styles;

		return (
		  <TouchableOpacity onPress={this.props.onPress} style={CartBtnIcon}>
		    <CrossPlatformIcon name="cart" color={Color.White} size={30} style={cartIcon} />
		    {renderIf(this.props.cartItems.cart.length > 0)(<Badge text={this.props.cartItems.cart.length} />)}
		  </TouchableOpacity>
		);
	}
}

const mapStateToProps = state => {
	return { cartItems: state.cartItems };
};

const styles = {
	CartBtnIcon: {
		position: 'relative',
		paddingRight: 20,
		paddingBottom: 10,
	},

	cartIcon: {
		paddingTop: 10,
		paddingLeft: 10,
	},
	// badgeValue: {
	// 	position: 'absolute',
	// 	top: 4,
	// 	right: 12 ,
	// 	fontWeight: 600,
	// 	fontSize: 10,
	// }
};

export default connect(
	mapStateToProps,
	{}
)(CartButton);
