import React, { Component, PropTypes } from 'react';
import PostCard from './PostCard';

export default class PostsBoard extends Component {
    static propTypes = {
        posts: PropTypes.object.isRequired
    }

    render() {
        const { posts } = this.props;

        return (
            <div className="posts-board">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        );
    }
}
