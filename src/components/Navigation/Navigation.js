import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = ({ title }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

Navigation.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navigation;
