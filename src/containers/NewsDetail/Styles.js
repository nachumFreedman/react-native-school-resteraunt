// const React = require("react-native");
// const { StyleSheet } = React;
import React from 'react-native'
import StyleSheet from 'React'

import { Color } from "../../common/color/Color";

export default {
  Container:{
    backgroundColor: Color.White,
    minHeight: '100%',
  },
  ItemContainer:{
    padding: 16,
    borderRadius: 2,
    shadowColor: Color.Dark,
    minHeight: 90,
    marginBottom: 6,
    marginTop: 6,
  }, 
 
  ImgWrapper:{
    height: 200,
    overflow:'hidden'
  },
  Img:{
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
  Title:{
    fontSize: 20,
    fontWeight: '600',
    color: Color.DarkLight,
    marginBottom: 8,
    overflow: 'hidden'
  },
  DateContent:{
    flexDirection: 'row',
    marginBottom: 12,
  },
  DateIcon:{
    height: 20,
  },
  DateText:{
    paddingTop: 1,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: '500',
    color: Color.DarkLighter,
  },
  DetailContent:{
    fontSize: 14,
    color: Color.DarkLighter,
    lineHeight:20,
    paddingRight: 10,
    textAlign: 'justify'
  },
}