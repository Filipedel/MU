import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useEffect, useState} from "react";

const Navigbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Muzik</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/playlists">Playlist</Nav.Link>
            <Nav.Link href="/emotions">Emotion</Nav.Link>
            <Nav.Link href="/sonjour">Son du jour</Nav.Link>
            <Nav.Link href="/releases">Sorties FR</Nav.Link>
            <Nav.Link href="/searchTrack">Recherche</Nav.Link>
            <Nav.Link href="/login">
              Connexion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigbar;