import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Index from './pages/index';
import Posts from './pages/posts';
import Post from './pages/post';

export default class Root extends Component {
    render() {
        const { store } = this.props;

        return (
          <div>
              <Provider store={store}>
                  <Router history={hashHistory}>
                      <Route path="/" component={Index} />
                      <Route path="/posts" component={Posts} />
                      <Route path="/post/:id" component={Post} />
                  </Router>
              </Provider>
          </div>
        );
    }
};