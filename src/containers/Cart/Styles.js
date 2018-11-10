const React = require('react-native');

const {  Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	
	container: {
		padding: 15,
		backgroundColor: Color.LightBlue,
		marginTop: -10,
	},
	subContainer: {
		backgroundColor: Color.White,
		padding: 8,
		marginBottom: 15,
	},
	cartInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	productTitle: {
		fontSize: 16,
		fontWeight: '400',
	},
	cartInfoContainer: {
		flexDirection: 'row',
	},
	imgContainer: {
		flex: 0.3,
	},
	productImg: {
		width: '100%',
		height: 80,
		marginRight: 20,
	},
	cartPriceContainer: {
		flex: 0.65,
		paddingLeft: 5,
	},
	cartPriceSubContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 5,
	},
	horizontalLine: {
		borderBottomWidth: 1,
		borderBottomColor: Color.BorderLighter,
		paddingTop: 5,
	},
	quantityText: {
		paddingTop: 10,
	},
	countingWrapper: {
		backgroundColor: Color.White,
		padding: 1,
		marginLeft: 10,
		width: '80%',
	},
	countingBtn: {
		backgroundColor: Color.Primary,
		height: 30,
		width: 30,
		paddingTop: 3,
	},
	btnText: {
		color: Color.White,
	},
	valueBtn: {
		backgroundColor: Color.White,
		paddingTop: 4,
		marginLeft: 4,
		marginRight: 4,
		borderColor: Color.BorderLighter,
		borderWidth: 1,
		borderRadius: 0,
		height: 30,
		width: 30,
	},
	counterText: {
		color: Color.DarkLighter,
		fontSize: 12,
	},
	cartViewBtn: {
		flex: 0.3,
		height: 30,
		marginLeft: 0,
	},
	cartViewText: {
		paddingTop: 3,
	},
	total: {
		fontWeight: '600',
	},
	coupon: {
		color: Color.Primary,
	},
	proceedBtn: {
		backgroundColor: Color.Dark,
		height: 50,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		marginBottom: 20
	},

	proceedBtnText: {
		color: Color.White,
		fontSize: 16,
	},
	totalPrice: {
		flexDirection: 'row',
		paddingRight: 10,
	},
	pickerWrapper: {
		width: "60%"
	},
	couponHead: {
		paddingTop: 8,
	},
	logoImgWrapper: {
		width: '100%',
		height: 30,
		marginTop: 70,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 80,
		justifyContent: 'center',
	},
	logo: {
		width: '100%',
		height: 300,
	},
	emptyText: {
		color: Color.White,
		textAlign: 'center',
		fontSize: 18,
	},
	emptyIcon: {
		alignSelf: 'center',
		marginTop: 100,
	},
	bgImg:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	picker: {
		alignSelf: 'stretch',
		backgroundColor: Color.Primary,
		paddingHorizontal: 20,
		height: 46,
		borderRadius: 10,
	  },
	  pickerText: {
		color: 'white',
		fontSize: 14,
		fontWeight: "600"
	  }
};

