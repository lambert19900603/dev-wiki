import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Index extends Component {
    static propTypes = {

    }


    static contextTypes = {
        history: PropTypes.object.isRequired
    }

    render() {
        const { history } = this.context;
        const { pages } = this.props;

        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Dev Wiki</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {pages.map((page, i) =>
                                <LinkContainer to={"/"+page.name}>
                                    <NavItem eventKey={i+1}>
                                        {page.nameCN}
                                    </NavItem>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default connect(state => ({
    pages: state.pages
}))(Index);