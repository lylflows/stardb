import {
    SEARCH_PERSON,
    FETCH_PEOPLE,
    FETCH_PERSON,
    LOADING
} from '../actions/types';

const initialState = {
    text: '',
    people: [],
    loading: false,
    person: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_PERSON:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case FETCH_PEOPLE:
            return {
                ...state,
                people: action.payload,
                loading: false
            };
        case FETCH_PERSON:
            return {
                ...state,
                person: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}