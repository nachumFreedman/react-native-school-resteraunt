import React from "react";
import {View,Text} from "react-native";
import {Avatar} from "../components";
import styles from "./styles";

const SenderChat = ({senderTitle,senderTiming,senderSubTitle,avatarSenderImg,style}) => {
    const {msgItemContainer,msgItemSubContainer,msgContainer,senderImg,msgText,headTextContainer,msgTitle,msgTiming,msgSubTitle} = styles;
    return(
     
       <View style={[msgItemSubContainer,style]}>
        <View style={msgContainer}>
         <View style={senderImg}>
         <Avatar img={avatarSenderImg}/>
         </View>
         <View style={msgText}>
         <View style={headTextContainer}>
          <Text style={msgTitle}>{senderTitle}</Text>
          <Text style={msgTiming}>{senderTiming}</Text>
        </View>
          <Text style={msgSubTitle}>{senderSubTitle}</Text>
         </View>
         </View>
         </View>
    );
}

export {SenderChat};
