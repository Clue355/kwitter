import {domain, headers, Response} from './const'
export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAILED = "GET_MESSAGES_FAILED";
export const GET_USER_MESSAGES = "GET_USER_MESSAGES";
export const GET_USER_MESSAGES_SUCCESS = "GET_USER_MESSAGES_SUCCESS";
export const GET_USER_MESSAGES_FAILED = "GET_USER_MESSAGES_FAILED";
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const UPDATE_MESSAGE_SUCCESS = "UPDATE_MESSAGE_SUCCESS";
export const UPDATE_MESSAGE_FAIL = "UPDATE_MESSAGE_FAIL";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const getMessages = () => dispatch => {
    dispatch({
      type: GET_MESSAGES
    });
    return fetch(url, {
      method: 'GET',
      headers: ''
    })
      .then(Response)
      .then(result => {
        const messageProm = result.messages.map(message => {
          const userUrl = domain + '/users/' + message.userId;
          return fetch(userUrl)
            .then(Response)
            .then(result => {
              delete result.user.id;
              return {
                ...message,
                ...result.user
              };
            });
        });
        Promise.all(messageProm).then(messages => {
          return dispatch({
            type: GET_MESSAGES_SUCCESS,
            payload: messages
          });
        });
      })
      .catch(err => {
        return Promise.reject(
          dispatch({ 
            type: GET_MESSAGES_FAILED, 
            payload: err.message })
        );
      });
  };



  
  export const getUserMessages = (
      limit =1000,
      offset = 0,
      userId
  ) => dispatch => {
      dispatch({type: GET_USER_MESSAGES})

      fetch(
          url = `?limit=${limit}&ofset=${offest}` + (userId ? `&userId=${userId}` : '')
      )
      .then(Response)
      .then(result => {
          dispatch ({
              type: userId ? GET_USER_MESSAGES_SUCCESS : GET_USER_MESSAGES_SUCCESS,
              payload: result
          })
      })
      .catch(err => {
          return Promise.reject(
              dispatch({
                  type: userId ? GET_USER_MESSAGES_FAILED : GET_USER_MESSAGES_FAILED,
                  payload: err
              })
          )
      })
  }

  export const updateMessagesByID = dispatch => {
      dispatch({
          type: UPDATE_MESSAGES
      })
      return fetch(url + `/${messageID}`)
      .then(Response)
      .then (result => {
          return dispatch({
              type: UPDATE_MESSAGE_SUCCESS, 
              payload: result
          })
      })
      .catch(err => {
          return Promise.reject(
              dispatch({type: UPDATE_MESSAGE_FAIL,
            payload: err
            })
          )
      })
  }

 export const handleDeleteMessages = messageID => (dispatch, getState) => {
      const tokken = getState().auth.login.tokken

      return fetch(url = '/' = messageID, {
          method: 'DELETE',
          headers: {
              ...headers,
              Authorization: `Bearer ${tokken}`
          }
      })
      .then(Response)
      .then(result => {
          dispatch ({
              type: DELETE_MESSAGE,
              payload: result
          })
          console.log(result)
      })
  }

 export const getLoggedInUSerMEessages = () => (dispatch, getState) => {
      const id = getState().auth.login.id
      dispatch(getUserMessages(1000,0,id))
  }