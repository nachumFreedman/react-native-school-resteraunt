const React = require("react-native");

const { StyleSheet, Dimensions } = React;
import { Color } from "../../common/color/Color";

export default {
    headerImg:{
        height: 70
    },
    rateView: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        paddingBottom: 20
      },
      inputWrapper:{
        backgroundColor: Color.White, 
        paddingBottom: 5,
        borderRadius:5
    },
    input: {
        borderBottomWidth: 0,
        borderBottomColor: "transparent",
    },
    reviewText:{
        color: Color.Primary, 
        fontSize: 16, 
        paddingBottom: 10
    },
    reviewWrapper:{
        height: 100,
        borderWidth: 1, 
        borderColor: Color.Primary, 
        borderRadius: 5,
        marginBottom: 20
    },
    BtnWrapper:{
        height: 50
    },
    ratingBtn: {
	    flex: 1,
		marginRight: 4,
		height: 46,
		borderRadius: 4,
		position: 'relative'
	},
	ratingBtnChild:{
		paddingTop: 3,
	},
	ratingBtnSpinner:{
		position: 'absolute',
		top: 6,
		right: 6,
		zIndex: 999,
	},
};