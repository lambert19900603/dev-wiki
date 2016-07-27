import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    static propTypes = {
        pages: PropTypes.array.isRequired
    }

    static contextTypes = {
        history: PropTypes.object.isRequired
    }

    render() {
        const { history } = this.context;
        const { pages } = this.props;

        return (
            <header>
                <Navbar inverse className="navbar-theme" fixedTop={true}>
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
            </header>
        );
    }
}