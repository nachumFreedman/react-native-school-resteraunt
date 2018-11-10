const React = require('react-native');

const {  Dimensions } = React;
import { Color } from '../../common/color/Color';

export default {
	imgBackground: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	scrollContainer: {
		minHeight: 500,
	},
	container: {
		position: 'relative',
		flex: 1,
	},
	curdWithChat: {
		flexDirection: 'column',
		backgroundColor: Color.Primary,
		width: '15%',
		alignItems: 'center',
		position: 'absolute',
		bottom: 80,
		left: 2,
	},
	chatContainer: {
		paddingBottom: 170,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		backgroundColor: Color.Primary,
		width: '100%',
		justifyContent: 'space-between',
		flex: 1,
		flexDirection: 'row',
	},
	inputWrapper: {
		flex: 0.88,
	},
	footerIconRight: {
		flex: 0.12,
		paddingLeft: 25,
		paddingTop: 6,
	},
	footerInput: {
		backgroundColor: Color.White,
		width: '100%',
		height: 50,
		paddingLeft: 20,
	},
};
