import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
        <LinkContainer to="/about">
          <NavItem>About Us</NavItem>
        </LinkContainer>
        <LinkContainer to="/gallery">
          <NavItem>Gallery</NavItem>
        </LinkContainer>
        <LinkContainer to="/pricing">
          <NavItem>Pricing</NavItem>
        </LinkContainer>
        <LinkContainer to="/booking">
          <NavItem>Book Your Wedding</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact">
          <NavItem>Contact Us</NavItem>
        </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export { Navigation };
