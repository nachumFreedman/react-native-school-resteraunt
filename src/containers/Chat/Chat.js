import React from 'react';
import { ScrollView, View, Text, ImageBackground, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SenderChat, ReceiverChat } from '../../components';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import { Color } from '../../common/color/Color';
import renderIf from '../../components/renderIf';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reset, reduxForm } from 'redux-form';
import { getChatList, postChat, getRestaurantInfo, updateChat } from '../../Stores/Actions';
import styles from './styles';
import Moment from 'moment';
import AutoScroll from 'react-native-auto-scroll';

const renderInput = ({
	placeholder,
	InputStyle,
	meta: { touched, error, warning },
	input: { onChange, ...restInput },
}) => {
	return (
		<TextInput
			placeholder={placeholder}
			underlineColorAndroid="transparent"
			style={InputStyle}
			onChangeText={onChange}
			{...restInput}
		/>
	);
};

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			message: '',
			sellerId: '',
			chatList: [],
			chat: {
				message: '',
				sentBy: 'sender',
				sender: '',
				receiver: '',
			},
			isSent: false,
			listHeight: 0,
			scrollViewHeight: 0,
			refresh: false,
		};
		this.props.getChatList(this.props.restaurantInfo._id);
	}

	chooseMultimedia() {
		if (this.state.active === false) {
			this.setState({
				active: true,
			});
		} else {
			this.setState({
				active: false,
			});
		}
	}

	onChatTypeHandler(message) {
		this.setState({ message: message });
	}

	//get chat data
	getChatData() {
		console.log('get');
		this.setState({ refresh: true });
		this.props.getChatList(this.props.restaurantInfo._id);
		console.log('restaurant id' + this.props.restaurantInfo._id);
	}

	//send chat data
	async onSendTextHandler(e) {
		console.log('post');
		var chatData = {
			message: '',
			sentBy: 'sender',
			sender: '',
			receiver: '',
		};
		chatData.message = this.state.message;
		chatData.receiver = this.props.restaurantInfo._id;
		chatData.sender = this.props.user._id;
		console.log('message   -' + JSON.stringify(chatData));
		await this.setState({ chat: chatData, isSent: true });
		this.props.postChat(chatData);
	}

	// componentWillReceiveProps(nextProps) {
	// 	var isSent = 'false';
	// 	console.log('nextProps----', JSON.stringify(nextProps.chatData));
	// 	if (nextProps.chatData) {
	// 		isSent = true;
	// 	}
	// 	if (isSent == true) {
	// 	}
	// }

	componentWillReceiveProps(nextProps) {
		console.log('isSend-----', nextProps.isSend);
		if (this.state.isSent == true) {
			if (nextProps.isSend == true) {
				console.log(' chat render ');
				this.props.reset();
				nextProps.getChatList(this.props.restaurantInfo._id);
			}
			this.setState({ isSent: false });
		}
		console.log('isSend', this.state.isSent);
	}

	// 	if (nextProps.isSend == true) {
	// 		// this.setState({ message: '' });
	// 		this.state.message = this.props.textValue;
	// 		console.log('msg', this.state.message);
	// 	}
	// }
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('get');
	// 	this.props.getChatList(nextProps.restaurantInfo._id);
	// 	return nextState.message === '';
	// }

	render() {
		const {
			imgBackground,
			chatContainer,
			container,
			msgItemSubContainer,
			msgContainer,
			senderImg,
			msgText,
			headTextContainer,
			msgTitle,
			msgTiming,
			msgSubTitle,
			curdWithChat,
		} = styles;
		//	console.log('id==' + this.props.restaurantInfo._id);

		return (
			<View style={container}>
				<ImageBackground style={imgBackground} source={require('../../Images/bg/sidebar_bg.jpg')}>
					<View style={chatContainer}>
						<AutoScroll contentContainerStyle={styles.scrollContainer}>
							<FlatList
								data={this.props.chat.chatList}
								style={{ flex: 1 }}
								renderItem={({ item }) => (
									<View>
										{renderIf(item.sentBy === 'sender')(
											<SenderChat
												avatarSenderImg={{uri: this.props.user.imageUrl}}
												senderTitle={item.message}
												senderTiming={Moment(item.timestamp).format('h:mm a')}
											/>
										)}
										{renderIf(item.sentBy === 'receiver')(
											<ReceiverChat
												avatarReceiverImg={require('../../Images/icon/ic_launcher.png')}
												receiverTitle={item.message}
												receiverTiming={Moment(item.timestamp).format('h:mm a')}
											/>
										)}
									</View>
								)}
								keyExtractor={(item, index) => item._id}
							/>
						</AutoScroll>
					</View>

					{/* {renderIf(this.state.active)(
						<View style={curdWithChat}>
							<Button>
								<CrossPlatformIcon name="trash" color={Color.White} size={30} />
							</Button>
							<Button>
								<CrossPlatformIcon name="microphone" color={Color.White} size={30} />
							</Button>
							<Button>
								<CrossPlatformIcon name="attach" color={Color.White} size={30} />
							</Button>
							<Button>
								<CrossPlatformIcon name="call" color={Color.White} size={30} />
							</Button>
							<Button>
								<CrossPlatformIcon name="person-add" color={Color.White} size={30} />
							</Button>
							<Button>
								<CrossPlatformIcon name="call" color={Color.White} size={30} />
							</Button>
							<Button>
								<CrossPlatformIcon name="person-add" color={Color.White} size={30} />
							</Button>
						</View>
					)} */}
				</ImageBackground>
				<View style={styles.footer}>
					{/* <TouchableOpacity style={styles.footerIconLeft}>
						<CrossPlatformIcon
							name="more"
							color={Color.White}
							size={50}
							onPress={() => this.chooseMultimedia()}
						/>
					</TouchableOpacity> */}
					<View style={styles.inputWrapper}>
						<Field
							component={renderInput}
							placeholder="Type Message......"
							InputStyle={styles.footerInput}
							onChange={message => this.onChatTypeHandler(message)}
						/>
					</View>

					<TouchableOpacity style={styles.footerIconRight}>
						<CrossPlatformIcon
							name="send"
							color={Color.White}
							size={40}
							onPress={e => this.onSendTextHandler(e)}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

function mapStateToProps(state) {
	//	console.log('chat-state-data---->' + JSON.stringify(state.chat));
	return {
		chat: state.chat,
		restaurantInfo: state.chat.restaurantInfo,
		user: state.auth.user,
		loading: state.chat.loading,
		isSend: state.chat.isSend,
		textValue: state.chat.textValue,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			postChat: chatData => dispatch(postChat(chatData)),
			getChatList: getChatList,
		},
		dispatch
	);
}

Chat = connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat);
export default reduxForm({ form: 'chat' })(Chat);
