import React, { Component, PropTypes } from 'react'
import { Image, Glyphicon } from 'react-bootstrap';

export default class PostCard extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    render() {
        const { post } = this.props;

        return (
            <section className="post-card">
                <h2 className="post-card-title">
                    <a href="/post/0">我们是能够自由地在知识的大海中遨游的一代人</a>
                </h2>
                <span className="post-card-author">
                    <a href="/user/lambert">
                        <Image circle
                               className="avatar-size-23"
                               src="../../imgs/avatar-lambert.jpeg"
                               alt="鲍凌波Lambert"/>
                        鲍凌波Lambert
                    </a>
                    发布于
                    <span className="split"></span>
                </span>
                <p className="post-card-excerpt">
                    老实说,我也不知道要在这里写点什么,这就是个用来测试的语句。。。
                    以及blablablablablablabla。。。
                    而且TMD不够长还不能满足显示的要求这尼玛。。。我只好再打两句废话
                    好吧,这行写完应该是够了吧。。。
                </p>
                <ul className="list-inline post-card-feed">
                    <li>
                        <Glyphicon glyph="heart-empty"></Glyphicon>
                        99
                    </li>
                </ul>
            </section>
        );
    }
}
