import api from '../../utils/api'

export const ADD_LIKE = 'ADD_LIKE'
export const ADD_LIKE_SUCCESS = 'ADD_LIKE_SUCCESS'
export const ADD_LIKE_FAIL = 'ADD_LIKE_FAIL'
export const REMOVE_LIKE = 'REMOVE_LIKE'
export const REMOVE_LIKE_SUCCESS = 'REMOVE_LIKE_SUCCESS'
export const REMOVE_LIKE_FAIL = 'REMOVE_LIKE_FAIL'

export const addLike = (credentials) => async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_LIKE });
      const payload = await api.addLike();
      // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
      // console.log({ result })
      dispatch({ type: ADD_LIKE_SUCCESS, payload });
    } catch (err) {
      dispatch({
        type: ADD_LIKE_FAIL,
        payload: err.message,
      });
    }
  };

  export const removeLike = (credentials) => async (dispatch, getState) => {
    try {
      dispatch({ type: REMOVE_LIKE });
      const payload = await api.removeLike();
      // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
      // console.log({ result })
      dispatch({ type: REMOVE_LIKE_SUCCESS, payload });
    } catch (err) {
      dispatch({
        type: REMOVE_LIKE_FAIL,
        payload: err.message,
      });
    }
  };