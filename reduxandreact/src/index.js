import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './routes';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Navigation />
    </Provider>,
    document.getElementById('root')
);

