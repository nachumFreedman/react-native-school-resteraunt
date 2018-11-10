const React = require('react-native');

const {  Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	container: {
		padding: 25,
		backgroundColor: Color.LightBlue,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	amountWrapper: {
		backgroundColor: Color.White,
		padding:16,
	},
	amountSubContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 12,
	},
	amountSubContainerLabel: {
		fontWeight: "600",
		opacity: 0.9
	},
	amountSubContainerValue:{

	},
	checkBox: {
		width: 15,
		height: 15,
	},
	loyalityPointText: {
		color: Color.Primary,
	},
	addressHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 20,
		paddingLeft: 7,
	},
	addressHeaderLabel:{
		fontSize: 15,
		opacity: 0.9,
		paddingTop: 10,
	},
	addressBtn: {
		backgroundColor: Color.Black,
		padding: 6,
		borderRadius: 2,
		marginBottom: 10,
	},
	addressBtnTitle: {
		color: Color.White,
		padding: 5,
	},
	addressList: {
		backgroundColor: Color.White,
		padding: 5,
		marginTop: 10,
	},
	addressItemWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	addressInfo: {
		width: '80%',
		opacity: 0.9

	},
	addressItem: {
		width: '20%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	deleteIcon: {
		marginRight: 20,
	},
	horzontalLine: {
		borderBottomWidth: 1,
		borderBottomColor: Color.BorderLighter,
		paddingTop: 5,
	},
	proceedBtn: {
		height: 60,
		flex: 0,
		justifyContent: 'space-between',
		marginTop: 22,
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 36,
	},
	// btnText: {
	// 	paddingBottom: 5,
	// },
};
