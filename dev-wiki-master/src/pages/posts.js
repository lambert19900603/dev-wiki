import React, { Component, PropTypes } from 'react';
import Page from '../containers/Page';
import { Grid, Row, Col } from 'react-bootstrap';
import PostList from '../components/PostList';
import WidgetBox from '../containers/WidgetBox';
import CatList from '../components/CatList';
import TagList from '../components/TagList';

export default class Posts extends Component {
    render() {
        return (
            <Page>
                <div className="posts">
                    <Grid className="padding-top-10">
                        <Row>
                            <Col className="main-board"
                                 sm={12}
                                 md={9}>
                                <PostList />
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
