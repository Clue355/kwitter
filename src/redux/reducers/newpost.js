// TODO: implement
import {
  GET_NEWPOST,
  NEWPOST_SUCCESS,
  NEWPOST_FAILURE,
} from "../actions/newPost";

const initialState = {
  text: "",
  loading: false,
  newpost_fail: false,
};

export const newpostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWPOST:
      return {
        ...initialState,
        loading: true,
      };
    case NEWPOST_SUCCESS:
      return {
        ...initialState,
        text: action.payload.text,
        loading: false,
      };
    case NEWPOST_FAILURE:
      return {
        ...initialState,
        newpost_fail: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
