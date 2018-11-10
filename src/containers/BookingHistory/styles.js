const React = require("react-native");

const { StyleSheet, Dimensions } = React;
import {Color} from "../../common/color/Color";

export default {
//    headerWrapper:{ 
//         width: Dimensions.get("window").width,
//         height: 70, 
//         marginTop: -10,
//     },
//     headerTitle:{
//         marginLeft: 50, 
//         marginTop: 20
//     },
    bgImg:{
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height, 
        marginTop: -10 
    },
    overlay:{
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height,
        backgroundColor: Color.overLay
    },
    // mainContainer:{
    //     padding: 30,

    //    borderBottomWidth: 1,
    // //    borderBottomColor: "rgba(255,255,255,0.1)",
    // },
    heading:{
        color:Color.White, 
        fontSize: 16, 
        textAlign: "center"
    },
    horizontalLine:{
        borderColor: Color.BorderLighter, 
        borderWidth: 1, 
        marginBottom: 3, 
        marginTop: 4
    },
   container:{
       flexDirection: "row",
       borderBottomWidth: 1,
       borderBottomColor: "rgba(255,255,255,0.1)",
       paddingBottom: 10,
    },
    tableInfo:{
        paddingLeft: 40, 
        flex: .6, 
        justifyContent: "center"
    },
    statusWrapper:{
        flex: .3, 
        backgroundColor: Color.overLay, 
        padding: 16, 
        justifyContent: "center", 
        alignItems: "center"
    },
    tableContent:{
        color: Color.White
    },
    statusText:{
        color: Color.White, 
        fontSize: 14
    },
    statusSubText:{
        color: Color.Primary, 
        fontSize: 18
    },
    emptyText: {
		color: Color.White,
		textAlign: 'center',
		fontSize: 18,
	},
	emptyIcon: {
		alignSelf: 'center',
		marginTop: 100,
	}
}