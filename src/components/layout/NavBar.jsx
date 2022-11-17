import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_layout.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand href="#home">Memorabilia Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <NavDropdown title="Sort By" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#">History</NavDropdown.Item>
              <NavDropdown.Item href="#">Celebrity</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Advanced Search
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}
