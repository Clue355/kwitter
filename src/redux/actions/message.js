import {domain,headers, Response} from './const/index'
import {store} from '../App.js'

export const MESSAGE_POST = 'MESSAGE_POST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_FAIL = 'MESSAGE_FAIL'

const url = domain + '/message'

export const postMessage = messageData => dispatch => {
    const token = store.getState().auth.login.token
    return fetch(url, {
        method:'POST',
        headers: {...headers, Authorization:`Bearer ${token}`},
        body: JSON.stringify(messageData)
    })
    .then(Response)
    .then(result => {
        return siapatch({
            type: MESSAGE_SUCCESS,
            payload: result
        })
    })
    .catch(err => {
        return dispatch ({
            type: MESSAGE_FAIL,
            payload:err.message
        })
    })
}