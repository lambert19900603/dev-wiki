import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import rootReducer from './reducers/root';
import React from 'react';
import { render } from 'react-dom';
import Root from './root'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/*
 Needed for onTouchTap
 Can go away when react 1.0 release
 Check this repo:
 https://github.com/zilverline/react-tap-event-plugin
 */
injectTapEventPlugin();

const store = createStore(rootReducer);

const App = () => (
    <MuiThemeProvider>
        <Root store={store} />
    </MuiThemeProvider>
);

render(
    <App />,
    document.getElementById('root')
);