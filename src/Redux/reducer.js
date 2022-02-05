import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from './types'

const initialState = {
    loading: false,
    books: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                books: action.payload,
                error: ''
            }
        case FETCH_DATA_FAILED:
            return {
                loading: false,
                books: [],
                error: action.payload
            }
        default:
            return state;
    }
}
export default reducer