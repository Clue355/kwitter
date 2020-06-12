import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  UPDATE_USER,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: false,
  loading: false,
  error: "",
  user: null, // https://kwitter-api.herokuapp.com/docs/#/Users/getUser
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload.token,
        user: action.payload.user,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    case UPDATE_USER: //return state, for user object user curr user or empty object
      return {
        ...state,
        user: {
          ...(state.user || {}),
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
