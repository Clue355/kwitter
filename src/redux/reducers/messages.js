// TODO: implement
import {
  GET_MESSAGES,
  MESSAGE_SUCCESS,
  MESSAGE_FAILURE,
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
    default:
      return state;
  }
};
