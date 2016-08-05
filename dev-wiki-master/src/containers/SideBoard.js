import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

export default class SideBoard extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ])
    }

    render() {
        const { children } = this.props;

        return (
            <div className="side-board">
                {children}
            </div>
        );
    }
}