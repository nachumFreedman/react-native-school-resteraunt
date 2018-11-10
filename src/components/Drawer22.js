import React, { Component } from "react";
import { Image } from "react-native";
import { DrawerNavigator } from "react-navigation";
import {Color} from "../common/color/Color";
import SideBar from "../common/SideBar/SideBar";
import RecentChat from "../containers/Chat/RecentChat";
import Notifications from "../containers/Notification/Notifications";
import FriendsGroup from "../containers/Group/FriendsGroup";
import FriendList from "../containers/Friend/FriendList";
import Setting from "../containers/Settings/Setting";
import LoginScreen from "../containers/user/LoginScreen";
import SignUp from "../containers/user/SignUp";
import ForgetPassword from "../containers/user/ForgetPassword";
import Categories from "../containers/Categories/Categories";
import ViewOrder from "../containers/ViewOrder/ViewOrder";
import Offers from "../containers/Offers/Offers";
import Favourite from "../containers/Favourite/Favourite";
import News from "../containers/News/News";
import NewsDetail from "../containers/NewsDetail/NewsDetail";

const Drawer = DrawerNavigator({
  LoginScreen:{screen: LoginScreen},
  ForgetPassword:{screen: ForgetPassword},
  Categories: {screen: Categories},
  ViewOrder: {screen: ViewOrder},
  Offers: {screen: Offers},
  Favourite: {screen: Favourite},
  News: {screen: News},
  NewsDetail: {screen: NewsDetail},
  RecentChat: { screen: RecentChat },
  FriendsGroup: { screen: FriendsGroup},
  FriendList: { screen: FriendList},
  Setting: { screen: Setting},
  Notifications: { screen: Notifications },
  
},
  {
    drawerPosition: "left",
    LoginScreen:{screen: LoginScreen},
    initialRouteName: "NewsDetail",
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerBackgroundColor: Color.Primary,
    contentComponent: props => <SideBar {...props} />
    
  },
)


export default Drawer;
