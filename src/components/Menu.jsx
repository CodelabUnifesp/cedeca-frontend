import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../resources/img/nav_cedeca.png'

export class Menu extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img src={logo} alt="Cedeca" width="120"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/cadastro">Início</Nav.Link>
                <Nav.Link href="/">Log out</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}