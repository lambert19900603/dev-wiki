import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Col, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Masthead extends Component {
    static contextTypes = {
        history: PropTypes.object.isRequired
    }

    render() {
        const { history } = this.context;

        return (
            <div className="masthead">
                <Grid>
                    <Row>
                        <Col
                            sm={12}
                            md={8} mdOffset={2}
                            className="masthead-content">
                            <h2>我沉浸在知识的海洋中</h2>
                            <h1>无法自拔</h1>
                            <form>
                                <FormGroup>
                                    <FormControl
                                        className="control-search"
                                        type="text"
                                        placeholder="寻找..."
                                    />
                                    <Glyphicon glyph="search" />
                                </FormGroup>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}