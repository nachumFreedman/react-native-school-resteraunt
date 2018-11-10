import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Badge = ({ text, style, batch }) => {
	const { batchWrapper, batchText } = styles;
	return (
		<View style={[batchWrapper, style]}>
			<Text style={[batchText, batch]}>{text}</Text>
		</View>
	);
};

export { Badge };
