import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import {CrossPlatformIcon } from "../common/CrossPlatformIcon/CrossPlatformIcon";

const ButtonIcon = ({ onPress, title , style, BtnTextStyle,iconName,color,size,btnIcon}) => {
 const { BtnIcon, BtnText,btnArrowIcon } = styles;

 return (
   <TouchableOpacity onPress={onPress} style={[BtnIcon, style]}>
     <Text style={[BtnText,BtnTextStyle]}>
       {title}
     </Text>
     <CrossPlatformIcon name={iconName} color={color} size={size} style={[btnArrowIcon,btnIcon]}/>
   </TouchableOpacity>
 );
};


export { ButtonIcon };