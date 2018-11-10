// const React = require("react-native");
// const { StyleSheet,Dimensions } = React;
import React from 'react-native';
import StyleSheet from 'React';

import { Color } from '../../common/color/Color';

export default {
	Container: {
		padding: 20,
		paddingTop: 6,
		backgroundColor: Color.LightBlue,
		padding: 5,
	},
	ItemContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: Color.White,
		padding: 4,
		borderRadius: 2,
		shadowColor: Color.Dark,
		minHeight: 90,
		marginBottom: 6,
		marginTop: 6,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 1,
		shadowOpacity: 0.5,
	},
	ItemContent: {
		flex: 0.5,
		padding: 4,
		paddingLeft: 12,
	},
	ItemImgContent: {
		flex: 0.3,
	},
	ImgWrapper: {
		height: 90,
		overflow: 'hidden',
	},
	Img: {
		width: '100%',
		height: '100%',
		borderRadius: 2,
	},

	Title: {
		fontSize: 16,
		fontWeight: '600',
		color: Color.DarkLight,
		marginBottom: 6,
	},
	Price: {
		fontSize: 14,
		fontWeight: '600',
		color: Color.Primary,
		marginBottom: 4,
	},
	Date: {
		fontSize: 14,
		color: Color.DarkLighter,
		marginBottom: 4,
		paddingRight: 10,
		overflow: 'hidden',
	},
	// btnWrap:{
	//   width: '100%',
	//   marginTop: 14,
	// },
	// btn:{
	//   flex: 1,
	//   backgroundColor: Color.Dark,
	//   borderRadius: 1,
	//   height: 36,
	//   padding: 6,
	//   paddingTop: 8,
	//   position: 'relative',
	// // },

	btnWrap: {
		flex: 0.2,
		paddingTop: 10,
	},
	btn: {
		width: '100%',
		backgroundColor: Color.Primary,
		borderRadius: 1,
		height: 30,
		paddingLeft: 10,
		position: 'relative',
		marginBottom: 4,
	},
	btnText: {
		position: 'absolute',
		top: 5,
		alignSelf: 'center',
		color: Color.White,
		fontSize: 12,
		fontWeight: '500',
	},
	emptyText: {
		textAlign: 'center',
		fontSize: 18,
	},
	emptyIcon: {
		alignSelf: 'center',
		marginTop: 100,
	},
};
