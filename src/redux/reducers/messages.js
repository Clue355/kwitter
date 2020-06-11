// TODO: implement
import {
    GET_MESSAGES,
    MESSAGE_SUCCESS,
    MESSAGE_FAILURE
} from '../actions/messageAction'


const initialState = {
    messages: [],
    message_success: false,
    message_fail: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                messages: [...action.payload],
                message_success: true,
                message_fail: false
            }
            case MESSAGE_SUCCESS:
                return {
                    messages: [...action.payload],
                    message_success: true,
                    message_fail: false
                }
                case MESSAGE_FAILURE:
                    return {
                        message: [state],
                        message_success: false,
                        message_fail: true
                    }
    }
}