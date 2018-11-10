// const React = require("react-native");
// const { StyleSheet } = React;
import React from 'react-native'
import StyleSheet from 'React'

import { Color } from "../../common/color/Color";

export default {
  Container:{
    padding: 20,
    paddingTop: 6,
    backgroundColor: Color.LightBlue,
    padding: 5,
  },
  ItemContainer:{
    flex: 12,
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: Color.White,
    padding: 4,
    borderRadius: 2,
    shadowColor: Color.Dark,
    minHeight: 90,
    marginBottom: 6,
    marginTop: 6,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1 ,
    shadowOpacity: 0.5

  }, 
  ItemContent:{
    flex: 8,
    padding: 4,
    paddingLeft: 12,
  },
  ItemImgContent:{
    flex: 3,
  },
  ItemRightIcon:{
    flex: 1,
    alignSelf: 'center',
  },
  ImgWrapper:{
    height: 100,
    overflow:'hidden'
  },
  Img:{
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },

  Title:{
    fontSize: 16,
    fontWeight: '600',
    color: Color.DarkLight,
    marginBottom: 6,
    overflow: 'hidden'
  },
  DetailContent:{
    fontSize: 14,
    color: Color.DarkLighter,
    lineHeight:20,
    height: 70,
    paddingRight: 10,
    overflow: 'hidden',
  },
}