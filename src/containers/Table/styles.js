const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	bgImg: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		marginTop: -10,
	},
	overlay: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		// backgroundColor: Color.overLay,
	},
	container: {
		paddingLeft: 20,
		width: '92%',
		paddingTop: 60,
	},
	heading: {
		color: Color.White,
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 20,
	},
	subContainer: {
		flexDirection: 'row',
		paddingLeft: 10,
		marginBottom: 10,
	},
	datePickerWrapper: {
		flex: 0.5,
	},
	subHead: {
		color: Color.White,
		fontSize: 16,
		paddingBottom: 10,
	},
	timePickerWrapper: {
		flex: 0.5,
		marginLeft: 10,
	},
	dateTimePickerWrapper: {
		borderWidth: 1,
		borderColor: Color.White,
		padding: 4.4,
		flexDirection: 'row',
		height: 46, 
	},
	pickerIcon: {
		alignSelf: 'flex-end',
		position: 'absolute',
		top:0,
		left: 20
	},
	pickerText: {
		color: Color.White,
		paddingTop: 4,
		paddingRight: 10,
		fontSize: 13
	},
	pickerHeading: {
		color: Color.White,
		paddingLeft: 8,
		paddingBottom: 10,
	},
	pickerWrapper: {
		borderWidth: 1,
		borderColor: Color.White,
		marginLeft: 10,
	},
	picker: {
		color: Color.White,
	},
	finalBtnWrapper: {
		height: 50,
		marginTop: 30,
		marginLeft: 10,
	},
	finalBtn: {
		backgroundColor: Color.Primary,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 10,
	},
	btnTextWrapper: {
		backgroundColor: Color.White,
		padding: 2,
	},
	btnText: {
		color: Color.White,
	},
	finalBtnSpinner: {
		position: 'absolute',
		top: 6,
		right: 6,
		zIndex: 999,
	},
	finalBtn: {
		flex: 1,
		margin: 8,
		height: 46,
		borderRadius: 4,
		position: 'relative'
	},
	finalBtnChild: {
		paddingTop: 3,
	},
	picker: {
		alignSelf: 'stretch',
		paddingHorizontal: 20,
		height: 46,
		borderRadius: 10,
	  },
	  pickerText: {
		color: 'white',
		fontSize: 14,
		fontWeight: "600",
		marginTop: 8,
	  }
};
