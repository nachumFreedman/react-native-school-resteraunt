import types from '../Actions/types';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
	restaurantInfo: {},
	chatList: [],
	chat: {},
	loading: true,
	textValue: '',
	isSend: false,
});

export default (state = INITIAL_STATE, action) => {
	//	console.log('chat-reducers---' + JSON.stringify(action));

	switch (action.type) {
		case types.FETCH_CHAT_lIST_SUCCESS:
			return Object.assign({}, state, { chatList: action.payload }, { loading: false });

		case types.POST_CHAT_SUCCESS:
			return Object.assign({}, state, { chat: action.payload }, { isSend: true }, { loading: false });

		// case types.SAVE_CHAT_HISTORY:
		// 	return { ...state, chatList: [...state.chatList, action.payload] };

		case types.UPDATE_CHAT_LIST:
			return { ...state, chatList: [...state.chat, action.payload] };

		case types.FETCH_RESTAURANT_INFO_SUCCESS:
			return { ...state, restaurantInfo: action.payload, loading: false };
		default:
			return state;
	}
};
