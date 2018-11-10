const React = require("react-native");

const { StyleSheet, Dimensions } = React;
import { Color } from "../../common/color/Color";

export default {
    container:{
        backgroundColor: Color.LightBlue, 
        padding: 20, 
        marginTop: -10, 
        height: Dimensions.get('window').height
    },
    subContainer:{
        backgroundColor:Color.White,
        padding: 10
    },
    // horizontalLine:{
    //     borderBottomWidth: 1, 
    //     borderBottomColor: Color.BorderLighter ,
    //     paddingTop: 5
    // },
    // statusDocument:{
    //     padding: 15,
    //     flexDirection: "row", 
    //     justifyContent: "space-between"
    // },
    saveOrderWrapper:{
        paddingLeft: 10,
        paddingTop: 5,
        flexDirection: "row"
    },
    saveOrderImg:{
        width: "15%", 
        height: 40
    },
    saveOrderText:{
        alignSelf: "center", 
        paddingLeft: 6
    },
    statusWrapper:{
        flexDirection: "row", 
        padding: 10, 
        marginTop: 0
    },
    placeOrderStatus:{
        backgroundColor: Color.LightBlue, 
        padding: 4,
        marginRight: 10,
        flex:.5,
        justifyContent:"center", 
        alignItems:"center"
    },
    orderTimingStatus:{
        backgroundColor: Color.LightBlue, 
        padding: 4,
        flex:.5,
        justifyContent:"center", 
        alignItems:"center"
    },
    orderInfo: {
        flexDirection: "row", 
        padding: 5
    },
    orderFrom:{
        marginTop: 10,
        marginRight: 5,
        justifyContent:"center", 
        alignItems:"center",
        padding: 10,
        flex: 0.5,
        backgroundColor: Color.Primary, 
        height: 40, 
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    orderInfoHead:{
        color:Color.White
    },
    orderInfoSubHead:{
        color:Color.Dark
    },
    orderTiming:{
        marginTop: 10,
        justifyContent:"center", 
        alignItems:"center",
        padding: 10,
        flex: 0.5,
        backgroundColor: Color.Primary, 
        height: 40, 
        borderTopLeftRadius:10,
        borderTopRightRadius:10 
    },
    orderNo:{
        fontSize: 22,
        alignSelf: "center", 
        marginTop: 30, 
        marginBottom:40
    },
    status: {
        fontSize: 16
    }
}