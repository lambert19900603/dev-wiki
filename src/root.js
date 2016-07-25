import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Index from './pages/index';

export default class Root extends Component {
    render() {
        const { store } = this.props;

        return (
          <div>
              <Provider store={store}>
                  <Router history={hashHistory}>
                      <Route path="/" component={Index} />
                  </Router>
              </Provider>
          </div>
        );
    }
};
