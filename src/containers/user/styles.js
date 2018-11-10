// const React = require("react-native");
// const { StyleSheet } = React;
import {Dimensions} from 'react-native';
// import StyleSheet from 'React';

import { Color } from '../../common/color/Color';

export default {
	// container: {
	//   width: 360,
	//   height: 620,
	//   backgroundColor: Color.Primary,

	// },
	subContainer: {
		padding: 20,
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
	subText: {
		color: Color.White,
		textAlign: 'center',
		marginTop: 20,
		fontSize: 18,
		fontWeight: '600',
	},
	//Profile

	ProfileContainer: {
		width: 360,
		height: 620,
		backgroundColor: Color.Primary,
		paddingTop: 100,
		alignItems: 'center',
	},
	ProfileImg: {
		width: 150,
		height: 150,
		borderRadius: 100,
		marginBottom: 24,
	},
	ProfileText: {
		color: Color.White,
		fontSize: 14,
		lineHeight: 20,
	},
	iconWrapper: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 24,
	},
	icon: {
		paddingRight: 25,
	},
	loginBtnWrapper: {
		padding: 0,
		// marginTop: 10,
		// marginBottom: 10,
		// justifyContent: 'space-between',
		flexDirection: 'row',
	},
	loginBtn: {
	    flex: 1,
		marginRight: 4,
		height: 46,
		borderRadius: 4,
		position: 'relative'
	},
	loginBtnChild:{
		paddingTop: 3,
	},
	loginBtnSpinner:{
		position: 'absolute',
		top: 6,
		right: 6,
		zIndex: 999,
	},
	socialBtnWrapper: {
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingRight: 20,
		paddingLeft: 20,
		marginBottom: 10,
		marginTop: 22,
	},
	socialBtn: {
		alignItems: 'center',
		height: 46,
		width: 46,
	},
	socialBtnImg: {
		flex: 1,
	},
	InfoTextWrapper: {
		padding: 6,
		marginBottom: 10,
	},
	InfoText: {
		color: Color.White,
		fontSize: 16,
		fontWeight: '600',
		lineHeight: 26,
		textAlign: 'center',
	},
	inputIcon: {
		paddingTop: 8,
		width: '98%',
	},
	//error
	error: {
		color: Color.Danger,
		marginTop: -4,
		marginLeft: 10,
	},
	formWrapper: {
		marginBottom: 7,
	},
	inputWrapper: {
		borderWidth: 1,
		borderColor: Color.White,
		flexDirection: 'row',
		marginBottom: 10,
		borderRadius: 5,
	},
	iconInput: {
		alignSelf: 'center',
		marginLeft: 16,
	},
	inputText: {
		color: Color.White,
		marginLeft: 22,
		width: '90%',
		fontSize: 18,
		height: 46,
	},
	bckImg:{
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height,
    },
};
