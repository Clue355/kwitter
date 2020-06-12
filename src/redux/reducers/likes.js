// TODO: implement
import {
    ADD_LIKE,
    ADD_LIKE_SUCCESS,
    ADD_LIKE_FAIL,
    REMOVE_LIKE,
    REMOVE_LIKE_SUCCESS,
    REMOVE_LIKE_FAIL,
} from '../actions/likeAction'

const initialState = {
    triggerLike: false,
    triggerLikeError: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIKE:
            return {
            ...initialState
        }
            case ADD_LIKE_SUCCESS:
                return {
                triggerLike: ''}
                case ADD_LIKE_FAIL:
                    return {
                    triggerLike: false,
                    triggerLikeError: action.payload}
                    case REMOVE_LIKE:
                        return {
                        triggerLike: true,
                        triggerLikeError: ''}
                        case REMOVE_LIKE_SUCCESS:
                            return {
                            triggerLike: ''}
                            case REMOVE_LIKE_FAIL:
                                return {
                                triggerLike: false,
                                triggerLikeError: action.payload}
                                default: return state
    }
    
}