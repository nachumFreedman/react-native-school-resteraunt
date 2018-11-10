const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	uploadText: {
		color: Color.White,
		fontSize: 12,
		position: 'absolute',
		top: 40,
		left: 13,
	},
	selectImage: {
		marginTop: 10,
		position: 'relative',
		height: 90,
		width: 90,
		borderRadius: 100,
		borderWidth: 4,
		borderColor: Color.White,
		marginBottom: 20,
	},
	imageContainer: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50,
	},
	editIcon: {
		position: 'absolute',
		top: 20,
		left: 30,
	},
	imgBg: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		marginTop: -25,
	},
	container: {
		padding: 15,
	},
	labelContainer: {
		paddingTop: 8,
		paddingLeft: 4,
		height: 40,
		flex: 0.4,
	},
	languageText: {
		alignSelf: 'center',
		fontSize: 16,
		flex: 0.9,
	},
	subContainer: {
		padding: 10,
		borderRadius: 5,
		marginBottom: 15,
		flexDirection: 'row',
		backgroundColor: Color.White,
		height: 40,
	},
	labelText: {
		fontSize: 14,
		color: Color.White,
		flex: 0.8,
	},
	langPicker: {
		height: 50,
		width: 120,
		alignSelf: 'center',
		color: Color.Primary,
	},
	inputWrapper: {
		backgroundColor: 'rgba(255,255,255,0.23)',
		marginBottom: 10,
		alignSelf: 'center',
		flex: 0.6,
		paddingLeft: 4,
		height: 42,
		borderRadius: 3,
	},
	error: {
		color: Color.Danger,
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
		flex: 1,
		margin: 12,
		height: 46,
		borderRadius: 4,
		position: 'relative'
	},
	finalBtnChild: {
		paddingTop: 3,
	},
	inputStyle: {
		fontSize: 16,
		paddingTop: 4,
		color: Color.White,
		height: 42,
	},
	fieldWrapper: {
		flexDirection: 'row',
		backgroundColor: 'transparent',
	}
};
