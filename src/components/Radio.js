import React from "react";
import {View} from "react-native";
import RadioButton from 'radio-button-react-native';
import {Color} from "../common/color/Color";


var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];

class Radio extends React.Component {
 
render(){
    return(
        <View>
        <RadioButton 
           currentValue={this.props.currentValue}
            value={this.props.value}
            onPress={this.props.onPress}
            outerCircleColor={Color.Danger}
            outerCircleSize={24}
            outerCircleWidth={2}
            innerCircleColor={Color.Danger}
            innerCircleSize={12}/>
        </View>
    );
}
}

export {Radio};