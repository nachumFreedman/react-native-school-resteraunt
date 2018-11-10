const React = require('react-native');

const {  Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	imgBg: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	container: {
		padding: 10,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 30,
		paddingTop: 20,
	},
	heading: {
		color: Color.White,
		fontSize: 20,
	},
	// inputWrapper: {
	// 	backgroundColor: Color.White,
	// 	paddingBottom: 5,
	// 	marginBottom: 15,
	// 	borderRadius: 5,
	// },
	addBtn: {
		flexDirection: 'row',
		padding: 10,
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Color.Black,
	},
	btnTitle: {
		color: Color.White,
		fontSize: 18,
	},
	inputWrapper: {
		borderWidth: 1,
		borderColor: Color.White,
		flexDirection: 'row',
		marginBottom: 10,
		borderRadius: 5,
	},
	inputText: {
		color: Color.White,
		marginLeft: 22,
		width: '90%',
		fontSize: 18,
		height: 46,
	},
	error: {
		color: Color.Danger,
		marginTop: -4,
	},
	formWrapper: {
		marginBottom: 7,
	},
	finalBtnSpinner: {
		position: 'absolute',
		top: 6,
		right: 6,
		zIndex: 999,
	},
	finalBtn: {
		width: "100%",
		height: 46,
		borderRadius: 4,
		position: 'relative'
	},
	finalBtnChild: {
		paddingTop: 3,
	},
};
