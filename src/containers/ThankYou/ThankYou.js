import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import Styles from './Styles';
import { Button } from '../../components';
import { Actions } from 'react-native-router-flux';
import i18n from "../../../i18n/i18n";

class ThankYou extends React.Component {
	render() {
		return (
			<View>
				<ImageBackground source={require('../../Images/bg/greeting.jpeg')} style={Styles.imgBck}>
					<View style={Styles.container}>
						<View style={Styles.logoContainer}>
							<Image source={require('../../Images/icon/hat.png')} style={Styles.logo} />
						</View>
						<Text style={Styles.greetingText}>{i18n.t('Thank You For Your Order')}</Text>
						{/* <Text style={Styles.aboutRes}>
							
						</Text> */}
					</View>
				</ImageBackground>
				<View style={Styles.moreContainer}>
					<Image source={require('../../Images/hungry.png')} style={Styles.topImg} />

					<View style={Styles.hungryText}>
						<Text>{i18n.t('Still Hungry')} ?</Text>
					</View>
					<Button style={Styles.btn} BtnTextStyle={Styles.btnText} onPress={() => Actions.mainScreen()}>
						{i18n.t('Back To Home')}
					</Button>
				</View>
			</View>
		);
	}
}

export default ThankYou;
