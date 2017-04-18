/* eslint-disable no-console */

// entry point of the app

// Consider the need of this
import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes.js';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadCourses} from './actions/courseActions.js';
import {loadAuthors} from './actions/authorActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

// when have a serverside logic - we will pass a parameter
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
