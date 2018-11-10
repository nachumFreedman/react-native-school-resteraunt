import React, { Component } from 'react';
import {AsyncStorage } from 'react-native';
import {
	Scene,
	Router,
	Actions,
	Reducer,
	ActionConst,
	Overlay,
	Tabs,
	Modal,
	Drawer,
	Stack,
} from 'react-native-router-flux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Reducers from './src/Stores/Reducers';
import RouterComponent from './Router';
import RNLanguages from 'react-native-languages';
import SplashScreen from 'react-native-smart-splash-screen';
import i18n from './i18n/i18n';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);


// import LoginScreen from "./containers/user/";
// create our store
//const store = createStore()

export default class App extends Component {
   
	constructor(props){
	  super(props);
	   RNLanguages.addEventListener('change', this._onLanguagesChange);
	}

	componentWillUnmount() {
		 RNLanguages.removeEventListener('change', this._onLanguagesChange);
	  }

	  _onLanguagesChange = ({ language }) => {
		i18n.locale = language;
	  };
	  
	componentDidMount () {
		//SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
		SplashScreen.close({
		   animationType: SplashScreen.animationType.scale,
		   duration: 850,
		   delay: 500,
		})
		
   }
	
	render() {
	  const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
          console.log()
		const persistor = persistStore(store);
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<RouterComponent />
				</PersistGate>
			</Provider>
		);
	}
}
