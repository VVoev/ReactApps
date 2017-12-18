import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/common/Header'

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorsActions'

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <Header />
    </Provider>,
    document.getElementById('root')
);
