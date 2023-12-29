import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home"><img src="https://i.postimg.cc/KjjjtqkB/snap-Stream-removebg-preview.png" alt="" width={'250px'} /></Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header
