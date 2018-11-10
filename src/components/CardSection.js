
import React from 'react';
import {View} from 'react-native';
import styles from "./styles";

const CardSection = ({ children , onPress,style}) => {
 const { cardSectionContainer } = styles;

 return (
    <View style={[cardSectionContainer, style]} onPress={onPress}>
        {children}</View>
 );
};


export { CardSection };