import AuthorApi from '../api/mockAuthorApi'
import React from 'react';
import * as types from './actionTypes'

export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors()
            .then((authors) => {
                dispatch(loadAuthorsSuccess(authors))
            }).catch((error) => {
                throw(error);
            });
    };
}