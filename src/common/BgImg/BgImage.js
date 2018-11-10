import React from 'react';
import { Text, TouchableOpacity,View, Dimensions,ImageBackground, } from 'react-native';
import {Color} from "../color/Color";

const BgImage = ({ onPress, children,src,style}) => {
 const { BgStyle } = styles;

 return (
    <ImageBackground source={src} style={[BgStyle,style]}>
    {children}
    </ImageBackground>
 );
};
const styles ={
    BgStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
      },
    
}


export default BgImage ;

