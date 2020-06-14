import api from "../../utils/api";

export const GET_NEWPOST = "GET_NEWPOST";
export const NEWPOST_SUCCESS = "NEWPOST_SUCCESS";
export const NEWPOST_FAILURE = "NEWPOST_FAILURE";

export const newPost = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_NEWPOST });
    const payload = await api.newPost();

    dispatch({ type: NEWPOST_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: NEWPOST_FAILURE,
      payload: err.message,
    });
  }
};
