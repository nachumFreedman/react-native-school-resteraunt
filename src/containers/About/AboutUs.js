import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import Styles from './Styles';
import {Actions} from 'react-native-router-flux';
import renderIf from '../../components/renderIf';
import i18n from "../../../i18n/i18n";

export default class AboutUs extends React.Component {

	constructor(props){
		super(props);
		this.state = { show_phn_no: false , show_email: false};
	}

	//show phn no 
    call_us(){
       this.setState({
		   show_phn_no: true
	   });
	}

	// show email
	email_us(){
		this.setState({
			show_email: true
		});
	}

	render() {
		return (
			<ScrollView>
				<View>
					<Image source={require('../../Images/About.jpg')} style={Styles.img} />
				</View>
				<View style={Styles.container}>
					<Text style={Styles.headerText}>{i18n.t('About Us')}</Text>
					<Text>
						Pietech Solution is a global information technology, consulting and outsourcing company was
						founded by a highly motivated groups of marketing Team, software Developer. Pietech is not a
						typical outsourcing company. Talented, driven and principled people who are passionate about IT
						services, came together because they wanted to do something special. Special work for our
						clients is the front line, revolutionizing the way the industry works is a gradual effect,
						improving Industry through services is our long term goal.
					</Text>
					<Text style={Styles.headerText}>Get In Touch</Text>
					<TouchableOpacity style={Styles.contactWrapper} onPress={() => this.call_us()}>
						<CrossPlatformIcon name="call" color={Color.Text} size={20} />
						<Text style={Styles.contactTitle}>{i18n.t('Call us')}</Text>
                       {renderIf(this.state.show_phn_no)(
						   <Text style={Styles.contactTitle}>(+91) 8147058182</Text>
					   )}
					</TouchableOpacity>
					<View style={Styles.borderOverlay} />
					<TouchableOpacity style={Styles.contactWrapper} onPress={() => this.email_us()}>
						<CrossPlatformIcon name="mail" color={Color.Text} size={20} />
						<Text style={Styles.contactTitle}>{i18n.t('Email us')}</Text>
						{renderIf(this.state.show_email)(
							<Text style={Styles.contactTitle}>info@pietechsolution.com</Text>
						)}
					</TouchableOpacity>
					<View style={Styles.borderOverlay} />
				
				</View>
			</ScrollView>
		);
	}
}
