import api from "../../utils/api";

export const GET_MESSAGES = "GET_MESSAGES"
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS"
export const MESSAGE_FAILURE = "MESSAGE_FAILURE"

export const getMessages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MESSAGES });
    const payload = await api.getMessage();
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: MESSAGE_FAILURE,
      payload: err.message,
    });
  }
};
