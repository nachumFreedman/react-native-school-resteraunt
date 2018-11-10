import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from "./styles";
import {Color} from "../common/color/Color";
import {CrossPlatformIcon } from "../common/CrossPlatformIcon/CrossPlatformIcon";

const InputGroup = ({ label , value , onChangeText , placeholder ,secureTextEntry, icon, iconColor,style, input }) => {
  const {IconStyle,InputGroupWrapper,InputGroupLabel,InputGroup} = styles; 
    return(
      <View style={[InputGroupWrapper, style]}>
      <Text style={InputGroupLabel}>{label}</Text>
      <CrossPlatformIcon name={icon} size={30} color={iconColor} style={IconStyle}/>
        <TextInput 
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid='transparent'
          placeholderTextColor={Color.DarkLighter}
          style={[InputGroup,input]} />
        
       </View>
      );  
    };

export { InputGroup };