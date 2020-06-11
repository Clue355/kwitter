import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: false,
  username: "",
  loading: false,
  error: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...state,
        isAuthenticated: token,
        username,
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
    default:
      return state;
  }
};
