import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ onPress, children, style, activeOpacity, BtnTextStyle }) => {
	const { Btn, BtnText } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={[Btn, style]} activeOpacity={activeOpacity}>
			<Text style={[BtnText, BtnTextStyle]}>{children}</Text>
		</TouchableOpacity>
	);
};

export { Button };
