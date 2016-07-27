import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Header from '../components/header';
import Masthead from '../components/masthead';

class Index extends Component {
    static propTypes = {
        pages: PropTypes.array.isRequired
    }

    static contextTypes = {
        history: PropTypes.object.isRequired
    }

    render() {
        const { history } = this.context;
        const { pages } = this.props;

        return (
            <div>
                <Header pages={pages} />
                <Masthead />
            </div>
        );
    }
}

export default connect(state => ({
    pages: state.pages
}))(Index);