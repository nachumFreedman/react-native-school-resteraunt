// const React = require("react-native");
// const { StyleSheet } = React;
import {Dimensions} from 'react-native';

import { Color } from "../../common/color/Color";

export default {
  Container:{
    padding: 20,
    paddingTop: 6,
    backgroundColor: Color.LightBlue,
    padding: 5
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
    flex: 4,
  },
  ImgWrapper:{
    height: 110,
    position: 'relative',
    overflow:'hidden'
  },
  Img:{
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
  OfferWrap:{
    backgroundColor: Color.Danger,
    position: 'absolute',
    top: 0,
    left:0,
    padding: 8,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  OfferText:{
    color: Color.White,
    fontSize: 13,
    fontWeight: '700'
  },

  Title:{
    fontSize: 16,
    fontWeight: '600',
    color: Color.DarkLight,
    marginBottom: 6,
  },
  InfoWrap:{
    height: 28,
    justifyContent:'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Color.Border,
    paddingRight: 4,
    paddingLeft: 2,
    paddingBottom: 2,
    paddingTop: 2,
    marginTop: 3,
    marginBottom: 2,
    
  },
  InfoLabel:{
    flex: .7,
    fontSize: 14,
    color: Color.DarkLighter,
  },
  Info:{
    flex: .3,
    fontSize: 14,
    color: Color.DarkLight,
    textAlign: 'right'
  },

  btnWrap:{
    width: '100%',
    marginTop: 14,
  },
  btn:{
    flex: 1,
    backgroundColor: Color.Dark,
    borderRadius: 1,
    height: 36,
    padding: 6,
    paddingTop: 8,
    position: 'relative',
  },
  btnText:{
    position: 'absolute',
    top: 11,
    color: Color.White,
    fontSize: 11,
    fontWeight: '500',
  },
 
  DetailTitle:{
    fontSize: 14,
    fontWeight: '600',
    color: Color.DarkLight,
    marginBottom: 4,
    marginTop: 5,
  },
  DetailContent:{
    fontSize: 14,
    color: Color.DarkLighter,
    lineHeight:20,
    height: 50,
    paddingRight: 10,
    overflow: 'hidden',
  },
  emptyText: {
		color: Color.White,
		textAlign: 'center',
		fontSize: 18,
	},
	emptyIcon: {
		alignSelf: 'center',
		marginTop: 100,
  },
  bgImg:{
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height, 
    marginTop: -10 
},
}