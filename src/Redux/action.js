import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from './types'
import reducer from './reducer'
import axios from 'axios'
import thunk from 'redux-thunk'
import { ThunkMiddleware } from 'redux-thunk'
import { applyMiddleware } from 'redux'
const redux = require('redux')






export function fetchRequest() {
    return {
        type: FETCH_DATA_REQUEST
    }
}
export function fetchSuccess(books) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: books
    }
}
export function fetchFailed(error) {
    return {
        type: FETCH_DATA_FAILED,
        payload: error
    }
}


//action creator with thunk returns a function not an object 
const fetchBooks = () => {
    return function (dispatch) {
        dispatch(fetchRequest())
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E&maxResults=40`)
            .then((res) => {
                const books = res.data.map((book, index) => book.id)
                dispatch(fetchSuccess(books))
            })
            .catch((err) => {
                dispatch(fetchFailed(err.message))
            })
    }
}

const store = redux.createStore(reducer, applyMiddleware)
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchBooks())