import React from 'react'
import { Link } from "react-router-dom"
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const NavBar = () => {
  return (      
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand><Link to="/">Bugs.com</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link><Link to="/bugs">Bugs</Link></Nav.Link>
            <Nav.Link><Link to="/apps">Apps</Link></Nav.Link>
            <Nav.Link><Link to="/aboutus">About us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar