import React from 'react';
import { View, Text } from 'react-native';
import { Button, CardSection } from '../components';
import { Color } from '../common/color/Color';
import styles from './styles';

const CountingBtn = ({ counter, onPress, onClick, style, countingBtnStyle, value, BtnText, valueText }) => {
	const { countingBtnWrapper, countingBtn, countingBtnText, countingValueContainer, countingValue } = styles;
	return (
		<CardSection style={[countingBtnWrapper, style]}>
			<Button style={[countingBtn, countingBtnStyle]} BtnTextStyle={[countingBtnText, BtnText]} onPress={onClick}>
				-
			</Button>
			<Button style={[countingValueContainer, value]} BtnTextStyle={[countingValue, valueText]}>
				{counter}
			</Button>
			<Button style={[countingBtn, countingBtnStyle]} BtnTextStyle={[countingBtnText, BtnText]} onPress={onPress}>
				+
			</Button>
		</CardSection>
	);
};

export { CountingBtn };
