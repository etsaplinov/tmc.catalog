import React, { Component } from 'react';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Tuning Catalog</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/categories">
                            <NavItem className="nav-link">Категории</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/cars">
                            <NavItem className="nav-link">Автомобили</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Личный кабинет" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Войти</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default NavigationBar;
