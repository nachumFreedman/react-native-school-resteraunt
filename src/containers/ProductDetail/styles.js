const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	headerWrapper: {
		width: Dimensions.get('window').width,
		height: 70,
		marginTop: -10,
	},
	headerTitle: {
		marginLeft: 50,
		marginTop: 20,
	},
	ProductImg: {
		height: 250,
		width: Dimensions.get('window').width,
		position: 'relative',
	},
	PriceWrapper: {
		width: 50,
		height: 50,
		backgroundColor: Color.Primary,
		borderRadius: 100,
		position: 'absolute',
		top: 224,
		right: 10,
	},
	price: {
		color: Color.White,
		textAlign: 'center',
		paddingTop: 15,
		fontWeight: 'bold',
	},
	favIconWrapper: {
		position: 'absolute',
		right: 10,
		top: 10,
	},
	subContainer: {
		padding: 20,
	},
	productTitle: {
		fontSize: 18,
		fontWeight: '400',
		paddingBottom: 10,
	},
	productSubTitle: {
		fontSize: 12,
		paddingBottom: 10,
	},
	productWrapper: {
		flexDirection: 'row',
		paddingBottom: 10,
	},
	cartBtnWrapper: {
		width: '50%',
	},
	cartBtn: {
		height: 40,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		flex: 0,
		paddingLeft: 5,
		paddingRight: 5,
	},
	btnText: {
		paddingTop: 10,
	},
	ingredient: {
		fontSize: 16,
		fontWeight: '400',
		paddingBottom: 10,
		paddingTop: 20,
	},
	ingredientPriceWrapper: {
		backgroundColor: Color.White,
		marginBottom: 10,
		paddingLeft: 3,
		paddingRight: 10,
		height: 40,
		paddingBottom: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',

		position: 'relative',
	},
	extraIngredientPriceWrapper: {
		backgroundColor: Color.White,
		marginBottom: 10,
		paddingLeft: 3,
		height: 40,
		paddingBottom: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		paddingTop: 8,
		paddingRight: 6,
		position: 'relative',
	},
	ingredientText: {
		flex: 1,
	},
	orderBtnWrapper: {
		flex: 1,
		flexDirection: 'row',
	},
	checkoutBtn: {
		marginRight: 10,
		backgroundColor: Color.Dark,
		color:Color.White
	},
	sizeWrapper: { backgroundColor: Color.White },
};
