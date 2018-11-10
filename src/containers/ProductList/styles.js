const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	container: {
		backgroundColor: Color.LightBlue,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	headerImg: {
		height: 70,
	},
	mainContainer: {
		padding: 15,
		backgroundColor: Color.LightBlue,
	},
	searchHeader: {
		height: 46,
		backgroundColor: Color.White,
		borderColor: Color.Border,
		borderWidth: 1,
		flexDirection: 'row',
		flex: 1,
		borderRadius: 4,
		paddingTop: 5,
	},
	searchHeaderIconWrapper:{
		flex: 0.2,
		paddingTop: 5,
		paddingLeft: 18
	},
	searchInput: {
		borderColor: Color.DarkLighter,
		height: 40,
		flex: 0.8,
	},
	searchIcon: {
		paddingBottom: 10,
		marginTop: -10,
	},
	productListWrapper: {
		flexWrap: 'wrap',
		flexDirection: 'column',
		width: '100%',
		// justifyContent: "space-between" ,
		marginTop: 20,
	},
	productListItem: {
		width: '100%',
		height: 240,
		marginBottom: 12,
	},
	productListContainer: {
		borderRadius: 5,
		borderColor: Color.BorderLighter,
		borderWidth: 1,
	},
	productListImg: {
		width: '100%',
		height: 160,
	},
	productListInfo: {
		backgroundColor: Color.White,
		padding: 16,
	},
	productInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 6,
	},
	title: {
		fontSize: 14,
		fontWeight: '700',
		color: Color.Dark,
	},
	price: {
		fontSize: 14,
		fontWeight: '700',
		color: Color.Dark,
	},
	productSubtitle: {
		fontSize: 12,
		paddingLeft: 5,
		paddingRight: 5,
	},
	inputWrapper: {
		paddingLeft: 0,
		paddingRight: 0,
		padding: 0,
		backgroundColor: 'rgba(0,0,0,0.05)',
	},
	textInput: {
		backgroundColor: Color.Black,
	},
	emptyText: {
		color: Color.White,
		textAlign: 'center',
		fontSize: 18,
	},
	emptyIcon: {
		alignSelf: 'center',
		marginTop: 100,
	},
	bgImg: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	}
};
