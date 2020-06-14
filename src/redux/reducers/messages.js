// TODO: implement
import {
  GET_MESSAGES,
  MESSAGE_SUCCESS,
  MESSAGE_FAILURE,
  MESSAGE_TOGGLE,
} from "../actions/messageAction";

const initialState = {
  messages: [],
  loading: false,
  message_fail: false,
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...initialState,
        loading: true,
      };
    case MESSAGE_SUCCESS:
      return {
        ...initialState,
        messages: action.payload.messages,
        loading: false,
      };
    case MESSAGE_FAILURE:
      return {
        ...initialState,
        message_fail: action.payload,
        loading: false,
      };
    case MESSAGE_TOGGLE:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id !== action.payload.messageId) {
            return message;
          }
          const isLiked = message.likes.find((like) => {
            return like.username === action.payload.username;
          });
          console.log("toggling message", message.id, message.likes);
          return {
            ...message,
            likes: isLiked
              ? message.likes.filter((like) => like !== isLiked)
              : [...message.likes, { username: action.payload.username }],
          };
        }),
      };
    default:
      return state;
  }
};
