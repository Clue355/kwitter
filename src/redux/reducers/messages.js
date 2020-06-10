// TODO: implement
import {MESSAGE_POST, MESSAGE_SUCCESS, MESSAGE_FAIL, GET_MESSAGES_SUCCESS} from '../actions'

const intitialState = {
    messages: [],
    message_success: false,
    message_fail: false
}

export default (state= intitialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
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
                case MESSAGE_POST:
                    const newMessage = {...action.payload}
                    return {
                        messages: [newMessage, ...state.messages]
                    }
                    case MESSAGE_FAIL:
                        return {
                            messageS: [state],
                            message_success: false,
                            message_fail: true
                        }
                        default:
                            return state
    }
}