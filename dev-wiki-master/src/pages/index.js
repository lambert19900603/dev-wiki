import React, { Component, PropTypes } from 'react'
import Page from '../containers/Page';
import Masthead from '../components/Masthead';

export default class Index extends Component {
    render() {
        return (
            <Page>
                <Masthead />
            </Page>
        );
    }
}