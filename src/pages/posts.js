import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Page from '../containers/Page';
import { Grid, Row, Col } from 'react-bootstrap';
import PostsBoard from '../components/PostsBoard';

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    }

    render() {
        const { posts } = this.props;

        return (
            <Page>
                <div className="posts">
                    <Grid>
                        <Row>
                            <Col sm={12} md={9}>
                                <PostsBoard />
                            </Col>
                            <Col
                                className="side-board"
                                smHidden={true}
                                md={3}
                            />
                        </Row>
                    </Grid>
                </div>
            </Page>
        );
    }
}

export default connect(state => ({
    posts: state.posts
}))(Posts);