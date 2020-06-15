import api from "../../utils/api";
import { getMessages } from "./messageAction";

export const GET_NEWPOST = "GET_NEWPOST";
export const NEWPOST_SUCCESS = "NEWPOST_SUCCESS";
export const NEWPOST_FAILURE = "NEWPOST_FAILURE";

export const newPost = (data) => async (dispatch) => {
  try {
    await api.newPost(data);
    dispatch(getMessages());
  } catch (err) {
    console.error("unable to create a new post");
  }
};
