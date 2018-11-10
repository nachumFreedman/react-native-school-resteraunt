import types from '../Actions/types';

const INITIAL_STATE = { newsList: [], newsDetails: null, loading: true };

export default (state = INITIAL_STATE, action) => {
	//console.log("action.type-"+JSON.stringify(action));

	switch (action.type) {
		case types.NEWS_FETCH_SUCCESS:
			return { ...state, newsList: action.payload, loading: false };

		case types.NEWS_FETCH_By_Id_SUCCESS:
			return { ...state, newsDetails: action.payload, loading: false };

		default:
			return state;
	}
};
