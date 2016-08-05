import React, { Component, PropTypes } from 'react'
import { Image, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

export default class PostCard extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    };

    render() {
        const { post } = this.props;

        return (
            <div className="post-card">
                <h2 className="post-card-title">
                    <Link to={"/post/"+post.id}>{post.title}</Link>
                </h2>
                <span className="post-card-author">
                    <a href={"/user/"+post.author.id}>
                        <Image circle
                               className="avatar-size-23"
                               src={"../../imgs/avatar-"+post.author.id+".jpeg"}
                               alt={post.author.nickname}/>
                        {post.author.nickname}
                    </a>
                    <span className="split">·</span>
                    发布于
                    <span className="split">·</span>
                    <a href={"/cat/"+post.category}>java</a>
                    <span className="split">·</span>
                    {post.date}
                </span>
                <p className="post-card-excerpt">
                    {post.excerpt}
                </p>
                <ul className="list-inline post-card-feed">
                    <li>
                        <Glyphicon glyph="heart-empty"></Glyphicon>
                        {post.likes}
                    </li>
                </ul>
            </div>
        );
    }
}
