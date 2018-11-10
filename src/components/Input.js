import React from 'react';
import { Text, View, TextInput } from 'react-native';
import {Color} from "../common/color/Color";
import styles from "./styles";

const Input = ({ label , value , onChangeText , placeholder ,secureTextEntry , style,
  keyType,keyboardTypeIs,lines,noOfLines,edit,length,defaultValue}) => {
  const {InputWrapper,InputLabel,Input} = styles;
    return(
      <View style={[InputWrapper, style]}>
      <Text style={InputLabel}>{label}</Text>
        <TextInput 
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={Color.DarkLighter}
          style={Input}
          underlineColorAndroid='transparent'
          key={keyType}
          keyboardType={keyboardTypeIs}
          multiline={lines}
          numberOfLines={noOfLines}
          editable = {edit}
          maxLength = {length}
          defaultValue={defaultValue}
           />
          
       </View>
      );  
    };

export { Input };