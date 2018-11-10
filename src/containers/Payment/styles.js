const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	container: {
		backgroundColor: Color.LightBlue,
		padding: 20,
	},
	subContainer: {
		backgroundColor: Color.White,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 18,
		marginBottom: 18,
	},
	amountSubContainerLabel:{
	},
	heading: {
		fontSize: 15,
		paddingBottom: 16,
		marginLeft: 2
	},
	stripe: {
		backgroundColor: Color.White,
		padding: 20,
		width: '100%',
		marginBottom: 10,
	},
	stripeTitle: {
		marginTop: 20,
		marginBottom: 12,
		fontWeight: '600',
	},
	stripeLabel: {
		marginBottom: 8,
		marginTop: 12,
		marginLeft: 2
	},
	stripeWrapper: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	stripeWrapperText:{
		paddingTop: 6,
		marginRight: 10,
		fontWeight: '600',
		opacity: 0.86,
	},
	cardImg: {
		width: '20%',
		height: 30,
		marginLeft: 10,
	},
	inputWrapper: {
		height: 50,
	},
	input: {
		backgroundColor: Color.LightBlue,
		marginBottom: 10,
		borderRadius: 2,
		paddingLeft: 8,
		paddingRight: 8,
		height: 50,
	},
	inputContainer: {
		flexDirection: 'row',
		flex: 10,
	},
	inputSubContainer: {
		flex: 3,
		marginRight: 12,
	},
	dateInput: {
		height: 50,
		flex: 0.5,
		marginRight: 5,
	},
	proceedBtn: {
		backgroundColor: Color.Dark,
		paddingBottom: 18,
		paddingRight: 10,
		paddingLeft: 10,
		textAlign: 'center',
		paddingTop: 12,
		marginTop: 26,
		borderRadius: 3,
	},
	proceedBtnText:{
		fontSize: 18,
		color: Color.White,
		textAlign: 'center',
	
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
	proceedBtnSpinner:{
		position: 'absolute',
		top: 6,
		right: 6,
		zIndex: 999,
	},

	finalBtnChild:{
		paddingTop: 3,
	},
	btnText: {
		fontSize: 18,
	},
	btnIcon: {
		paddingTop: 17,
		paddingRight: 10,
	},
	checkBox: {
		width: 15,
		height: 15,
	},
	saveCard: {
		flexDirection: 'row',
		justifyContent: 'center',
		margin: 10,
	},
	cardContainer: {
		flexDirection: 'row',
		padding: 6,
		backgroundColor: Color.White,
		marginBottom: 10,
	},
	cardComponent: {
		flex: 0.1,
	},
	cardInfo: {
		flex: 0.8,
	},
	cvcInput: {
		backgroundColor: Color.White,
		marginBottom: 10,
	},
	error: {
		color: Color.Danger,
		fontSize: 11,
		marginTop: -6,
	},
	formWrapper: {
		marginBottom: 7,
		height: 50,
	},
	paymentOptionWrapper: {
		backgroundColor: Color.White,
		padding: 20,
	},
	
};
