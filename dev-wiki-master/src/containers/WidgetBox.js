import React, { Component, PropTypes } from 'react';

export default class WidgetBox extends Component {
    static propTypes = {
        title: PropTypes.string,
        topBorder: PropTypes.bool,
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ])
    }

    static defaultProps = {
        topBorder: true
    }

    render() {
        const { title, topBorder, children } = this.props;

        return (
            <div className={topBorder?"widget-box":"widget-box-ntb"}>
                <h2 className="widget-box-title">{title}</h2>
                {children}
            </div>
        );
    }
}

