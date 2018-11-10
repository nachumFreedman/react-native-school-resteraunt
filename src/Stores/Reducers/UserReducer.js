import types from "../Actions/types";

const INITIAL_STATE = {
  user: "",
  isLoggedIn: false,
  loading: false,
  pending: true,
  showTost: false
};

export default (state = INITIAL_STATE, action) => {
  //console.log("login action ", JSON.stringify(action));
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        showTost: true,
        loading: false,
        pending: false,
        user: action.payload,
        
      };

    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.INITIAL_REQUEST: 
       return {
        ...state,
        loading: true
       }

    case types.RESET_USER_STATE:
      return {
        ...state,
        showTost: false,
        loading: false,
        pending: true,
        
      };

    case types.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        loading: false
      };

    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        
        loading: false
      };

    case types.ERROR_MSG:
      return {
        ...state,
        loading: false,
      } 

    case types.USER_LOGIN_PENDING:
      return {
        ...state,
        isLoggedIn: false,
        loading: true
      };

    case types.USERS_DATA_FETCH_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.payload
      };

    case types.USER_DATA_UPDATE:
      return {
        ...state
      };

    case types.FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        showTost: true,
        loading: false,
        user: action.payload,
      };

    case types.GMAIL_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        showTost: true,
        loading: false,
        user: action.payload,
      };

    case types.TWITTER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        showTost: true,
        loading: false,
        user: action.payload,
      };

    case types.PASSWORD_RECOVERY:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case types.OTP_GENERATE:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    case types.RESET_PASSWORD:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
