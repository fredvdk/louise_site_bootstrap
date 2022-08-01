import React from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavbar() {
  return (
    <Navbar expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Col className="col-sm-2" style={{textAlign:'left'}}>
        <Navbar.Brand href="/#home">Psycholoog Louise</Navbar.Brand>
        </Col>
        <Col className="col-sm-8" style={{textAlign:'right'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/#overMij">Over mij</Nav.Link>
            <Nav.Link href="/#therapie">Therapie en visie</Nav.Link>
            <Nav.Link href="/#voorWie">Voor Wie</Nav.Link>
            <Nav.Link href="/#tarieven">Tarieven</Nav.Link>
            <Nav.Link href="/reservatie">Afspraak maken</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;