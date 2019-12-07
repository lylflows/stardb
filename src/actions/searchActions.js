import { SEARCH_PERSON, FETCH_PEOPLE, FETCH_PERSON, LOADING } from './types';
import axios from 'axios';

import { APIKey } from '../APIKey';

export const searchPerson = text => dispatch => {
    dispatch({
        type: SEARCH_PERSON,
        payload: text
    });
};

export const fetchPeople = text => dispatch => {
    axios
        .get(`swapi.co/api/people=${APIKey}&s=${text}`)
        .then(response =>
            dispatch({
                type: FETCH_PEOPLE,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};

export const fetchPerson = id => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        .then(response =>
            dispatch({
                type: FETCH_PERSON,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};

export const setLoading = () => {
    return {
        type: LOADING
    };
};