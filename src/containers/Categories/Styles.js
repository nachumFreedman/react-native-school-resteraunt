

import { Color } from "../../common/color/Color";

export default {
  Container:{
    padding: 6,
    backgroundColor: Color.LightBlue,
  },
  LisItem: {
    flex: 12,
    flexDirection: "row",
    borderRadius: 1,
    backgroundColor: 'rgba(255,255,255, 1)',
    shadowColor: Color.Dark,
    minHeight: 90,
    padding: 4,
    marginBottom: 6,
    marginTop: 6,
   
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  ItemImgWrapper: {
    flex: 3,
    width: 80,
    height: 80,
    paddingLeft:10,
    paddingTop: 4,
  },
  ItemImg: {
     width: 82,
     height:82,
     borderRadius: 2,
  },
  LisItemBody: {
     flex: 9,
     paddingLeft: 15,
     paddingTop: 1  
  },
  Title: {
    fontSize: 18,
    fontWeight: "600",
    color: Color.Dark,
    marginBottom: 4,
  },
  Detail: {
    fontSize: 14,
    fontWeight: '300',
    color: Color.DarkLight,
    lineHeight:20,
    height: 60,
    overflow: 'hidden',
    marginBottom: 10,
    paddingRight: 10,  
  },
  


}