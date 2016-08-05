import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';

export default class Page extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ])
    };

    render() {
        const { children } = this.props;

        return (
            <div>
                <Header />
                <main>
                    {children}
                </main>
            </div>
        );
    }
}

