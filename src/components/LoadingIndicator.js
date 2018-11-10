import React from 'react'
import { View, ActivityIndicator, Dimensions,ImageBackground, } from 'react-native'
import {Color} from "../common/color/Color";

const LoadingIndicator = () =>
 <View style={styles.loadingContainer}>
   <ActivityIndicator size="large" color={Color.Primary} style={styles.loadingIndicator} />
 </View>

const styles ={
 loadingContainer: {
   display: 'flex',
   width: Dimensions.get("window").width,
   height: Dimensions.get("window").height,
   // backgroundColor: '#000000',
   // opacity: 0.5,
   
 },
 loadingIndicator: {
   flex: 1,
   alignItems: 'center',
   marginBottom: 40,
 }

}
export { LoadingIndicator };