import React from "react";
import {View,Text} from "react-native";
import {Avatar} from "../components";
import styles from "./styles";

const ReceiverChat = ({receiverTitle,receiverTiming,receiverSubTitle,avatarReceiverImg,style}) => {
    const {msgItemContainer,msgItemSubContainer,msgContainer, receicerMsgTiming,receiverImg,msgText,headTextContainer,msgTitle,msgTiming,msgSubTitle} = styles;
    return(
      
        <View style={msgItemSubContainer}>
        <View style={msgContainer}>
        <View style={msgText}>
         <View style={headTextContainer}>
          <Text style={msgTitle}>{receiverTitle}</Text>
          <Text style={receicerMsgTiming}>{receiverTiming}</Text>
        </View>
          <Text style={msgSubTitle}>{receiverSubTitle}</Text>
         </View>
         <View style={receiverImg}>
         <Avatar img={avatarReceiverImg}/>
         </View>
         </View>
        </View>
    );
}

export {ReceiverChat};
