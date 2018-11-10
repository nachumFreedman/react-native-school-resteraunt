// const React = require("react-native");
// const { StyleSheet } = React;
// import React from 'react-native';
import {Dimensions} from 'react-native';

import { Color } from '../../common/color/Color';

export default {
	Container: {
		padding: 20,
		paddingTop: 6,
		backgroundColor: Color.LightBlue,
		padding: 5,
	},
	ItemContainer: {
		flex: 12,
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
		flex: 8,
		padding: 4,
		paddingLeft: 12,
	},
	ItemImgContent: {
		flex: 4,
	},
	ImgWrapper: {
		height: 120,
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
	DetailTitle: {
		fontSize: 14,
		fontWeight: '600',
		color: Color.DarkLight,
		marginBottom: 4,
	},
	DetailContent: {
		fontSize: 14,
		color: Color.DarkLighter,
		lineHeight: 20,
		height: 50,
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
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	btn: {
		width: '48%',
		backgroundColor: Color.Dark,
		borderRadius: 1,
		height: 36,
		paddingLeft: 18,
		paddingTop: 8,
		position: 'relative',
	},
	btnText: {
		position: 'absolute',
		top: 10,
		alignSelf: 'center',
		color: Color.White,
		fontSize: 14,
		fontWeight: '500',
	},
	btnDelete: {
		width: '48%',
		backgroundColor: Color.Danger,
		borderRadius: 1,
		height: 36,
		padding: 6,
		paddingLeft: 10,
		paddingTop: 8,
		position: 'relative',
		marginLeft: 4,
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
	bgImg:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	}
};
