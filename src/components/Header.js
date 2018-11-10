
import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import styles from "./styles";
import {Color} from "../common/color/Color";
import {CrossPlatformIcon } from "../common/CrossPlatformIcon/CrossPlatformIcon";

const Header = ({ title ,onPress, rightIcon, onPressRightIcon, leftIcon,titleStyle,headerStyle}) => {
 const { HeaderTitle,HeaderWrapper,left, body,right } = styles;

 return (
    <View style = {[HeaderWrapper,headerStyle]}>
    <View style={left}>
        <TouchableOpacity>
        <CrossPlatformIcon name={leftIcon} color={Color.White} size={30} onPress={onPress} />
        </TouchableOpacity>
   </View>
   <View style={[body, titleStyle]}>
    <Text style = {HeaderTitle}>{title}</Text>
    </View>
      <View style={right}>
        <TouchableOpacity>
        <CrossPlatformIcon name={rightIcon} color={Color.White} size={30} onPress={onPressRightIcon}/>
        </TouchableOpacity>
     </View>
    </View>
 );
};


export { Header };