import React from 'react'

import './styles.css'

import { Navbar, Nav } from 'react-bootstrap'

const Menu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Somos Gente</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
          <Nav.Link href="/sobre">Sobre</Nav.Link>
          <Nav.Link href="/projetos">Projetos</Nav.Link>
          <Nav.Link href="/login">Entrar</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu