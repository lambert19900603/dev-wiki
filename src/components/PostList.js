import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PostCard from './PostCard';

class PostList extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    };

    render() {
        const { posts } = this.props;

        return (
            <ListGroup className="post-list">
                {posts.map((post, i) =>
                    <ListGroupItem className="post-list-item">
                        <PostCard post={post}/>
                    </ListGroupItem>
                )}
            </ListGroup>
        );
    }
}

export default connect(state => ({
    posts: state.posts
}))(PostList);