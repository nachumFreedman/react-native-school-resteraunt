import React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';
import {Color} from "../color/Color";

const Header = ({ onPress, children, title}) => {
 const { Header,HeaderText,HeaderBody } = styles;

 return (

     <View style={Header} > 
       <Text style={HeaderText}>{title}</Text>
   </View>
 );
};
const styles ={
    Header: {
        width: '100%',
        backgroundColor: 'transparent', 
        height: 70,
        alignItems: 'center',
        paddingTop: 24,
        paddingLeft: 30,
        paddingRight: 30,
      },
      HeaderText:{
          fontSize: 22,
          color: '#fff',
      },
    
}


export default Header ;





















// import React from 'react';
// import {View, Text, Image , ScrollView, Dimensions,ImageBackground, TouchableOpacity} from 'react-native';
// import {Color} from "../../common/Color";
// import {CrossPlatformIcon } from "../../common/Constant";

// const Header = ({title,leftChild}) => {
//   const {} = styles;
//     return(
//       <View style={styles.header} >
//         <Text style={styles.headerLeft}>
//             {leftChild}
//         </Text>
        
//        </View>
//       );  
//     };  
// const styles ={
//     header:{
//         backgroundColor: 'transparent',
//         flex: 1,
//         height: 72,
//       },
//       headerLeft:{
//         color: '#fff'
           
//       },
//       headerBody:{
//         alignItems: 'center',
//       },
//       headerLeftText:{
//         color: '#fff',
//         fontSize: 22,
//         fontWieght: 800,
//       },
//       headrTitle:{
//         color: Color.White,
//         fontSize: 22,
//         alignItems: 'center',
//       },
// }


// export default Header ;