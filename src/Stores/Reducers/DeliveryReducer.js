import types from '../Actions/types';

const INITIAL_STATE = {
	address: [],
	loading: true,
	isAdded: false,
	stripe: '',
	cardInfo: [],
	card: {},
	order: {},
	addressCrud: {},
	addressAdd: {},
	isPay: false,
};

export default (state = INITIAL_STATE, action) => {
	// console.log(action);
	switch (action.type) {
		case types.ADD_ADDRESS_BY_USER:
			return { ...state, addressAdd: action.payload, isAdded: true, loading: false };

		case types.INITIAL_ADDRESS_REQUEST: 
		    return { ...state, loading: true} 

		case types.USERS_ADDRESS_DATA_FETCH_BY_ID_SUCCESS:
			return { ...state, address: action.payload, loading: false };

		case types.POST_ORDER_SUCCESS:
			return { ...state, order: action.payload, isPay: true, loading: false };

		case types.USERS_CARD_INFO:
			return { ...state, cardInfo: action.payload, loading: false };

		case types.DELETE_CARD_BY_USER:
			return { ...state, card: action.payload, loading: false };

		case types.PAYMENT_THROUGH_SAVED_CARD:
			return { ...state, stripe: action.payload, loading: false };

		case types.DELETE_ADDRESS_BY_USER:
			return { ...state, addressCrud: action.payload, loading: false };

		case types.ORDER_REQUEST:
			return { ...state, loading: true };

		default:
			return state;
	}
};
