const React = require('react-native');
import {Platform, StyleSheet} from 'react-native';

const {Dimensions} = React;

import {Color} from '../common/color/Color';

export default {
				//button outline style
				OutlineBtnText : {
								alignSelf: 'center',
								color: Color.White,
								fontSize: 16,
								fontWeight: '600',
								paddingTop: 10,
								paddingBottom: 10,
								paddingRight: 5
				},
				OutlineBtn : {
								flex: 1,
								backgroundColor: Color.Primary,
								borderRadius: 5,
								borderWidth: 1,
								borderColor: Color.White,
								marginLeft: 5,
								marginRight: 5
				},

				//normal button
				Btn : {
								flex: 1,
								backgroundColor: Color.Primary,
								borderRadius: 5,
								marginLeft: 5,
								marginRight: 5,
								height: 50
				},
				BtnText : {
								alignSelf: 'center',
								color: Color.White,
								fontSize: 16,
								fontWeight: '600',
								paddingTop: 15
				},
				//Card

				cardContainer : {
								marginLeft: 5,
								marginRight: 5,
								marginTop: 10
				},
				// CardSection
				cardSectionContainer : {
								padding: 5,
								backgroundColor: 'transparent',
								justifyContent: 'flex-start',
								flexDirection: 'row',

								position: 'relative'
				},
				// Header

				HeaderTitle : {
								fontSize: 20,
								color: Color.White
				},
				HeaderWrapper : {
								height: 70
				},
				left : {
								position: 'absolute',
								top: 20,
								left: 16,
								flex: 1
				},
				body : {
								flex: 2
				},
				right : {
								position: 'absolute',
								bottom: 20,
								right: 14,
								flex: 1
				},
				//Input

				Input : {
								color: Color.Text,
								fontSize: 14,
								borderBottomWidth: 1,
								width: '100%',
								borderBottomColor: Color.White,
								height: 40
				},
				InputLabel : {
								fontSize: 18
				},
				InputWrapper : {
								height: 40,
								flex: 1,
								flexDirection: 'row',
								alignItems: 'center',
								paddingLeft: 0
				},

				//Spinner

				spinnerWrapper : {
								justifyContent: 'center',
								alignItems: 'center'
				},

				//Avatar
				AvatarWrapper : {
								width: 50,
								height: 50,
								borderRadius: 100
				},
				AvatarImg : {
								width: 50,
								height: 50
				},

				// AvatarSquare
				AvatarSquareWrapper : {
								width: 50,
								height: 50
				},

				//Input Group
				InputGroup : {
								color: Color.DarkLighter,
								fontSize: 18,
								borderBottomWidth: 0,
								borderColor: 'transparent',
								width: '95%',
								paddingTop: 5
				},
				InputGroupLabel : {
								fontSize: 18
				},
				InputGroupWrapper : {
								height: 55,
								flex: 1,
								flexDirection: 'row',
								borderWidth: 1,
								borderColor: Color.White,
								paddingLeft: 10,
								borderRadius: 3
				},
				IconStyle : {
								paddingTop: 2,
								paddingRight: 10
				},

				//ListItem

				LisItem : {
								flex: 12,
								flexDirection: 'row'
				},
				ListItemAatar : {
								flex: 3,
								width: 50,
								height: 50,
								borderRadius: 100
				},
				LisItemImg : {
								width: 50,
								height: 50
				},
				ListItemAatarSquare : {
								flex: 2,
								width: 50,
								height: 50
				},
				LisItemTextWrapper : {
								flex: 8,
								paddingLeft: 5,
								paddingTop: 5
				},
				ListItemTitle : {
								fontSize: 14,
								fontWeight: '600',
								color: Color.White
				},
				ListItemSubTitle : {
								fontSize: 14,
								color: Color.White
				},
				LisItemRight : {
								flex: 2,
								paddingTop: 5
				},
				LisItemRightText : {
								fontSize: 12,
								color: Color.White
				},

				//seek bar

				sliderContainer : {
								flex: 1,
								justifyContent: 'flex-end'
				},
				seekbar : {
								width: '100%'
				},

				//Badge
				batchWrapper : {
								backgroundColor: Color.Primary,
								width: 20,
								height: 20,
								borderRadius: 200,
								position: 'absolute',
								top: 7,
								right: 14
				},
				batchText : {
								color: Color.White,
								alignSelf: 'center',
								fontWeight: '600',
								fontSize: 10,
								lineHeight: 20
				},
				// side bar item
				SidebarWrapper : {
								flex: 1,
								flexDirection: 'row',
								paddingLeft: 20,
								height: 44,
								borderBottomWidth: 1,
								borderBottomColor: 'rgba(255,255,255,0.12)'
				},
				sidebarSides : {
								flex: 0.2,
								opacity: 0.9
				},
				sidebarSides2 : {
								flex: 0.2,
								opacity: 0.9,
								marginRight: 45
				},
				sidebarBody : {
								flex: 0.5
				},
				sidebarTitle : {
								color: Color.White,
								paddingTop: 5
				},

				// msgItem
				msgItemContainer : {
								backgroundColor: Color.Grey,
								height: Dimensions
												.get('window')
												.height
				},
				msgItemSubContainer : {
								minHeight: 30,
								Height: 'auto',
								position: 'relative'
				},
				msgContainer : {
								flex: 1,
								flexDirection: 'row',
								padding: 10
				},
				senderImg : {
								flex: 0.2
				},
				msgText : {
								flex: 0.8,
								backgroundColor: Color.White,
								padding: 10,
								paddingTop: 16,
								borderRadius: 10
				},
				receiverImg : {
								flex: 0.2,
								paddingLeft: 25
				},
				headTextContainer : {
								position: 'relative',
								paddingTop: 2
				},
				msgTitle : {
								fontSize: 14,
								color: Color.red
				},
				msgTiming : {
								fontSize: 12,
								color: Color.Dark,
								position: 'absolute',
								top: -11,
								right: 4
				},
				receicerMsgTiming : {
								fontSize: 12,
								color: Color.Dark,
								position: 'absolute',
								top: -11,
								right: 4
				},
				msgSubTitle : {
								fontSize: 13,
								color: Color.Dark
				},
				//footer
				footer : {
								position: 'absolute',
								bottom: 0,
								left: 0,
								backgroundColor: Color.Primary,
								width: '100%',
								height: 70,
								padding: 10
				},
				footerIcon : {
								position: 'absolute',
								bottom: 0,
								right: 0
				},
				footerInput : {
								backgroundColor: Color.White,
								height: 50
				},
				//counting button
				countingBtnWrapper : {
								backgroundColor: Color.Primary,
								height: 40,
								width: '50%',
								borderTopLeftRadius: 8,
								borderTopRightRadius: 8,
								paddingLeft: 30,
								paddingRight: 30,
								paddingTop: 6
				},
				countingBtn : {
								backgroundColor: Color.White,
								borderRadius: 100,
								width: 20,
								marginLeft: 0,
								marginRight: 0,
								height: 25
				},
				countingBtnText : {
								color: Color.Primary,
								paddingTop: 1
				},
				countingValueContainer : {
								backgroundColor: Color.Primary,
								borderRadius: 100,
								width: 20,
								marginLeft: 0,
								marginRight: 0,
								height: 25
				},
				countingValue : {
								paddingTop: 1
				},
				//button with icon
				BtnIcon : {
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: Color.Dark,
								height: 50,
								paddingBottom: 10
				},
				btnArrowIcon : {
								paddingTop: 10,
								paddingLeft: 10
				},


				//button with spinner
				button: {
					padding: 10,
					height: 46,
					borderRadius: 3,
					width:"100%"
				  },
				  disabled: {
					backgroundColor: Color.PrimaryLight,
					height: 46,
					width:"100%"
				 //   borderColor: "#aaa"
				  },
				  disabledText: {
					color: Color.White,
					textAlign: 'center',
					fontSize: 17, 
				   },
				  enableText: {
					color: Color.White,
					textAlign: 'center',
					fontSize: 17, 
				  }
};
