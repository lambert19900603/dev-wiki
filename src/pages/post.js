import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from '../containers/Page';
import { Grid, Row, Col } from 'react-bootstrap';
import WidgetBox from '../containers/WidgetBox';
import CatList from '../components/CatList';
import TagList from '../components/TagList';
import { Converter } from 'showdown';

class Post extends Component {
    static propTypes = {
        params: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired
    };

    render() {
        const { params, post } = this.props;

        let converter = new Converter();

        return (
            <Page>
                <div className="posts">
                    <Grid className="padding-top-10">
                        <Row>
                            <Col className="main-board"
                                 sm={12}
                                 md={9}>
                                <article className="markdown-body"
                                         dangerouslySetInnerHTML={{
                                    __html: converter.makeHtml(post.text)
                                }}></article>
                            </Col>
                            <Col className="side-board"
                                 xsHidden={true}
                                 smHidden={true}
                                 md={3}>
                                <WidgetBox title="分类"
                                           topBorder={false}>
                                    <CatList />
                                </WidgetBox>
                                <WidgetBox title="标签">
                                    <TagList />
                                </WidgetBox>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Page>
        );
    }
}

export default connect(state => ({
    post: state.post
}))(Post);
