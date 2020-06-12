import api from "../../utils/api";

// AUTH CONSTANTS
export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";
export const UPDATE_USER = "AUTH/UPDATE_USER";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const login = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN });
    const loginResult = await api.login(credentials);
    const picResult = await api.loginGetUserPicture(credentials.username);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: loginResult.token, user: picResult.user },
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

export const register = (credentials) => async (dispatch, getState) => {
  try {
    await api.register(credentials);
  } catch (err) {
    throw err;
  }
};

export const profile = (data) => async (dispatch, getState) => {
  try {
    await api.profile(data);
  } catch (err) {
    throw err;
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
    // From Instructor Vince
  }
};
export const updateUser = (updates) => async (dispatch, getState) => {
  //  const newUser = { ...getState().auth.user, ...updates };
  await api.updateUser(getState().auth.user.username, updates);
  dispatch({
    type: UPDATE_USER,
    payload: updates,
  });
};

export const uploadPhoto = (photo) => (dispatch, getState) => {
  return api
    .uploadPhoto(getState().auth.user.username, photo)
    .then((res) => api.loginGetUserPicture(getState().auth.user.username))
    .then((data) => {
      dispatch({
        type: UPDATE_USER,
        payload: data.user,
      });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
