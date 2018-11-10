import React from "react";
import {
 TouchableOpacity,
 TouchableNativeFeedback,
 Text,
 View,
 StyleSheet,
 Platform
} from "react-native";
import styles from "./styles";

const ButtonWithBackground = props => {
 const content = (
   <View
     style={[
       styles.button,
       { backgroundColor: props.color },
       props.disabled ? styles.disabled : null
     ]}
   >
     <Text style={props.disabled ? styles.disabledText : styles.enableText}>
       {props.children}
     </Text>
   </View>
 );
 if (props.disabled) {
   return content;
 }
 if (Platform.OS === "android") {
   return (
     <TouchableNativeFeedback onPress={props.onPress}>
       {content}
     </TouchableNativeFeedback>
   );
 }
 return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

export {ButtonWithBackground};
