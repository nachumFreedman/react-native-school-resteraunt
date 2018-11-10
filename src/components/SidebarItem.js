import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from "./styles";
import {Batch} from "../components";
import {Color} from "../common/color/Color";
import {CrossPlatformIcon} from "../common/CrossPlatformIcon/CrossPlatformIcon";

const SidebarItem = ({title, onPress, batchText, iconName}) => {
  const {SidebarWrapper, sidebarBody, sidebarSides, sidebarSides2, sidebarTitle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[SidebarWrapper]}>
      <View style={sidebarSides}>
        <CrossPlatformIcon name={iconName} color={Color.White} size={30}/>
      </View>
      <View style={sidebarBody}>
        <Text style={sidebarTitle}>{title}</Text>

      </View>
      <View style={sidebarSides2}>
        <CrossPlatformIcon name="arrow-forward" color={Color.White} size={25}/>
      </View>
    </TouchableOpacity>
  );
};

export {SidebarItem};