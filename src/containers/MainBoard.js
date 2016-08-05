import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

export default class MainBoard extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ])
    };

    render() {
        const { children } = this.props;

        return (
            <div className="main-board">
                {children}
            </div>
        );
    }
}

