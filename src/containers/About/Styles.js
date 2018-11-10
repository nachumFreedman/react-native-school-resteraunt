const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	img: {
		width: '100%',
		height: 220,
	},
	container: {
		padding: 10,
	},
	headerText: {
		fontSize: 18,
		paddingBottom: 10,
		paddingTop: 10,
	},
	contactWrapper: {
		flexDirection: 'row',
		paddingBottom: 10,
		paddingTop: 10,
	},
	borderOverlay: {
		borderBottomColor: Color.BorderLighter,
		borderBottomWidth: 1,
	},
	contactTitle: {
		paddingLeft: 10,
		fontSize: 16,
	},

	//map
	mapView: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
};
