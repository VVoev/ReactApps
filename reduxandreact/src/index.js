import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './routes';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import {loadCourses} from './actions/courseActions'
import {loadAuthors} from './actions/authorActions'

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors())
ReactDOM.render(
    <Provider store={store}>
        <Navigation />
    </Provider>,
    document.getElementById('root')
);

