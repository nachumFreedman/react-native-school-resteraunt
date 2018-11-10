import React, {Component} from 'react';
import SideBar from './SideBar';
import MenuIcon from '../../Images/menu.png';

export default class Drawer extends React.Component {
				render() {
					return (
							<Drawer
								hideNavBar
								key="drawer"
								content={< SideBar />}
								drawerImage={MenuIcon}
								drawerWidth={400}>
							</Drawer>
					);
	}
}
