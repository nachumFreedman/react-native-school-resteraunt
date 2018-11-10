import React from 'react';
import { View, Text } from 'react-native';
import { Color } from '../common/color/Color';
import { CrossPlatformIcon } from '../common/CrossPlatformIcon/CrossPlatformIcon';
import { Input } from '../components';
import styles from './styles';

const Footer = ({ title, onPress, onChangeText, onClick }) => {
	const { footer, footerIcon, footerInput, iconStyle } = styles;
	return (
		<View style={footer}>
			{/* <CrossPlatformIcon name="more" color={Color.White} size={50} style={[footerIcon, iconStyle]} onPress={onPress}/> */}
			<Input style={footerInput} onChangeText={onChangeText} />
			<CrossPlatformIcon
				name="send"
				color={Color.White}
				size={50}
				style={[footerIcon, iconStyle]}
				onPress={onClick}
			/>
		</View>
	);
};

export { Footer };
