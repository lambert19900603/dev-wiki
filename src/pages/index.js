import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';

class Index extends Component {
    render() {
        return (
            <AppBar
                title="Dev Wiki"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}

export default connect(state => ({}))(Index);