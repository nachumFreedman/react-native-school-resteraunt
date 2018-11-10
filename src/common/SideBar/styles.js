const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import { Color } from '../color/Color';

export default {
	logOutBtn: {
		flex: 0.6,
		marginLeft: 50,
	},
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
		borderRadius: 90/2,
		borderWidth: 4,
		borderColor: Color.Primary,
		marginBottom: 20,
		marginLeft: 10,
	},
	userName: {
		color: Color.White,
		fontSize: 18,
		fontWeight: '700',
		paddingTop: 2,
		paddingBottom: 14,
		marginLeft: 15,
		textAlign: 'center',
		marginRight: 140
	},

	editIcon: {
		position: 'absolute',
		top: 20,
		left: 30,
	},
	imgBackground: {
		width: Dimensions.get('window').width,
		minHeight: Dimensions.get('window').height,
		height: '100%',
	},
	sideMenuWrapper: {
		marginTop: 20,
		
	},
	sideMenuImage: {
		alignItems: 'center',
		marginRight: 130,
		marginTop: 30
	}
};
