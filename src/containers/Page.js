import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Page extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ])
    }

    render() {
        const {
            pages,
            children
        } = this.props;

        return (
            <div>
                <Header pages={pages}/>
                <main>
                    {children}
                </main>
            </div>
        );
    }
}

export default connect(state => ({
    pages: state.pages
}))(Page);

