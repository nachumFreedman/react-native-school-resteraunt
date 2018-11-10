const React = require("react-native");

const { StyleSheet, Dimensions } = React;
import { Color } from "../../common/color/Color";

export default {
  carousel: {
      marginTop: -5
    },
    categoryContainer:{
        padding: 10
    },
    category:{
         fontSize: 24, 
         paddingBottom: 15,
         paddingTop: 10,
         textAlign: 'center'    
    },
    categoryListContainer: {
        position: 'relative'
    },
    categoryImg: {
        width:"100%", 
        height: 150
    },
    categoryOverlay:{
        position: 'absolute', 
        top: 0, 
        right: 0, 
        width:'100%',
        height:'100%', 
        backgroundColor:'rgba(0,0,0,0.4)'
    },
    categoryWrapper: {
        position: "absolute",
        top: "40%",
        alignSelf: "center"
    },

    categoryTitle:{
        fontSize: 18,
        color: Color.White 
    },
    categoryList:{
        marginBottom: 10
    }
}