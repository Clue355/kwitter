import api from "../../utils/api";

export const GET_MESSAGES = "GET_MESSAGES";
export const MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
export const MESSAGE_FAILURE = "MESSAGE_FAILURE";

export const getMessages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MESSAGES });
    const payload = await api.getMessages();
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

export const toggleMessageLike = (messageId) => async (dispatch, getState) => {
  try {
    const username = getState().auth.user.username;
    const messages = getState().messages.messages;

    const messageClicked = messages.find((message) => message.id === messageId);

    const messageIsLikedAlready = messageClicked.likes.find((like) => {
      return like.username === username;
    });

    if (messageIsLikedAlready) {
      await api.removeLike(messageIsLikedAlready.id);
    } else {
      await api.addLike(messageId);
    }
    const messageResponse = await api.getMessages();

    dispatch({
      type: MESSAGE_SUCCESS,
      payload: {
        messages: messageResponse.messages.map((message) => ({
          ...message,
          isLiked: !!message.likes.find((like) => like.username === username),
        })),
      },
    });
  } catch (err) {
    console.log("togglemMessageLike", err);
  }
};
