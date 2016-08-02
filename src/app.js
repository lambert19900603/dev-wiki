import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import rootReducer from './reducers/root';
import React from 'react';
import { render } from 'react-dom';
import Root from './root';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './less/main.less';

/*
 Needed for onTouchTap
 Can go away when react 1.0 release
 Check this repo:
 https://github.com/zilverline/react-tap-event-plugin
 */
injectTapEventPlugin();

const store = createStore(rootReducer);

render(
    <Root store={store} />,
    document.getElementById('root')
);