import React from 'react'
import logo from '../../../assets/logo.jpeg'

import './styles.css'

import { Navbar, Nav } from 'react-bootstrap'

const Menu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="bg" className="nav" variant="dark">
        <Navbar.Brand href="/">Somos Gente</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/sobre">Sobre Nós</Nav.Link>
            <Nav.Link href="/projetos">Projetos</Nav.Link>
            <Nav.Link href="/entrar">Entrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu