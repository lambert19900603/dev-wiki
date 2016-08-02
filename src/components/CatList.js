import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';

class CatList extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired
    }

    render() {
        const { categories } = this.props;

        return (
            <ul className="widget-list cat-list">
                {categories.map((category, i) =>
                    <li className="widget-list-item cat-list-item">
                        <i className="fa fa-folder-o"></i>
                        <a href={"/cat/" + category.id}>
                            {category.name}
                        </a>
                    </li>
                )}
            </ul>
        );
    }
}

export default connect(state => ({
    categories: state.categories
}))(CatList);