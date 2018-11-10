const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	imgBck: {
		width: Dimensions.get('window').width,
		height: 340,
		paddingTop: 10,
	},
	container: {
		margin: 15,
		backgroundColor: Color.overLay,
		padding: 10,
	},
	logoContainer: {
		alignItems: 'center',
		paddingBottom: 10,
	},
	logo: {
		width: '24%',
		height: 95,
		backgroundColor: 'transparent',
	},
	greetingText: {
		color: Color.White,
		fontSize: 18,
		textAlign: 'center',
		paddingBottom: 30,
	},
	aboutRes: {
		color: Color.White,
		textAlign: 'center',
	},
	moreContainer: {
		flexDirection: 'row',
		paddingTop: 20,
		paddingLeft: 20,
		justifyContent: 'space-between',
	},
	topImg: {
		width: 50,
		height: 50,
		position: 'relative',
	},
	hungryText: {
		position: 'absolute',
		left: 40,
		top: 35,
	},
	btn: {
		flex: 0.6,
		padding: 0,
		height: 40,
		marginTop: 5,
	},
	btnText: {
		paddingTop: 8,
	},
};
