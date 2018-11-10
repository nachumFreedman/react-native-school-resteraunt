import React from 'react';
import {View, Text, Image , ScrollView, Dimensions,ImageBackground, TouchableOpacity} from 'react-native';
import {Color} from "../color/Color";
import {CrossPlatformIcon } from "../CrossPlatformIcon/CrossPlatformIcon";

const HeaderLeftButton = ({onPress,icon,btnIcon}) => {
  const {} = styles;
    return(
      <View style={styles.HeaderLeftButton} >
        <TouchableOpacity onPress = {(onPress)} >
            <CrossPlatformIcon name={btnIcon} color={Color.White} size={40} />
        </TouchableOpacity>
       </View>
      );  
    };  
const styles ={
    HeaderLeftButton:{
        position: 'absolute',
        top: 19,
        left: 16,
      },
}


export default HeaderLeftButton ;