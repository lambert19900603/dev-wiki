import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class TagList extends Component {
    static propTypes = {
        tags: PropTypes.array.isRequired
    }

    render() {
        const { tags } = this.props;

        return (
            <div className="widget-list tag-list">
                {tags.map((tag, i) =>
                    <a className="tag-label" href={"/tag/" + tag.id}>
                        {tag.name}
                    </a>
                )}
            </div>
        );
    }
}

export default connect(state => ({
    tags: state.tags
}))(TagList);