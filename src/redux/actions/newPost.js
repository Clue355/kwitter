import api from "../../utils/api";

export const GET_NEWPOST = "GET_NEWPOST";
export const NEWPOST_SUCCESS = "NEWPOST_SUCCESS";
export const NEWPOST_FAILURE = "NEWPOST_FAILURE";

export const newPost = (data) => async () => {
  try {
    await api.newPost(data);
  } catch (err) {
    console.error("unable to create a new post");
  }
};
