import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
    static propTypes = {
        pages: PropTypes.array.isRequired
    };

    render() {
        const { pages } = this.props;

        return (
            <header>
                <Navbar
                    inverse
                    className="navbar-theme"
                    fixedTop={true}>
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
                                    <NavItem
                                        className={
                                            page.name === "signIn" ?
                                            "sign-in" : undefined
                                        }
                                        eventKey={i+1}>
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

export default connect(state => ({
    pages: state.pages
}))(Header);