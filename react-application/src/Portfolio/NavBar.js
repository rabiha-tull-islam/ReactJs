import React from 'react'
import {Navbar, Nav,NavDropdown,Container} from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  className="NavBar" fixed="bottom" >
                <Container>
                    <Navbar.Brand href="./Header/#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#portfolio">Porfolio</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
