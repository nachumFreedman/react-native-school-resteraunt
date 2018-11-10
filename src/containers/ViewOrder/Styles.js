// const React = require("react-native");
// const { StyleSheet } = React;
import React from 'react-native'
import StyleSheet from 'React'

import { Color } from "../../common/color/Color";

export default {
  Container:{
    padding: 20,
    paddingTop: 50,
    backgroundColor: Color.LightBlue,
  },
  ImgWrapper:{
    position: 'relative',
    marginBottom: 14,
  },
  Img:{
    width: 400,
    height: 202,
    borderRadius: 3,
  },
  TitleWrap:{
    backgroundColor: Color.overLay,
    position: 'absolute',
    bottom: 0,
    left:0,
    padding: 12,
    paddingLeft:  22,
    paddingRight: 22,
    borderTopRightRadius: 26,

  },
  Title:{
    color: Color.White,
    fontSize: 17,
  },
  InfoWrap:{
    flex: 10,
    justifyContent:'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Color.Border,
    paddingRight: 4,
    paddingLeft: 2,
    paddingTop: 10,
    paddingBottom : 10,
    

  },
  InfoLabel:{
    flex: 4,
    fontSize: 16,
    color: Color.DarkLight,
  
  },
  Info:{
    flex: 6,
    fontSize: 16,
    color: Color.DarkLighter,
    textAlign: 'right'
  },

  btnWrap:{
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
  },
  btn:{
    flex: 5,
    backgroundColor: Color.Dark,
    margin: 0,
    borderRadius: 2,
  },
  btnText:{
    
  },
 

  


}