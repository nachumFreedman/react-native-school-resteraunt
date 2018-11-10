const React = require('react-native');

const {  Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	imgBg: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		marginTop: -15,
	},
	container: {
		padding: 20,
	},
	heading: {
		color: Color.White,
		fontSize: 22,
		textAlign: 'center',
		marginTop: 65,
	},
	contactSendBtnSpinner:{
		position: 'absolute',
		top: 6,
		right: 6,
		zIndex: 999,
	},
	subContainer: {
		borderWidth: 1,
		borderColor: Color.White,
		marginBottom: 10,
		borderRadius: 5,
	},
	labelText: {
		color: Color.White,
		paddingBottom: 5,
		fontSize: 16,
		marginLeft: 4,
	},
	langPicker: {
		height: 50,
		width: 120,
		alignSelf: 'center',
		color: Color.Primary,
	},
	inputWrapper: {
		width: '100%',
		backgroundColor: Color.White,
		borderRadius: 5,
		height: 42,
		paddingLeft: 14,
	},
	finalBtnWrapper: {
		margin: 15,
	},
	finalBtn: {
	    flex: 1,
		marginRight: 4,
		height: 46,
		borderRadius: 4,
		position: 'relative'
	},
	contactBtnSpinner:{
		position: 'absolute',
		top: 6,
		right: 6,
		zIndex: 999,
	},

	finalBtnChild:{
		paddingTop: 3,
	},
	// error
	error: {
		color: Color.Danger,
	},
	formWrapper: {
		marginBottom: 7,
	},
};
