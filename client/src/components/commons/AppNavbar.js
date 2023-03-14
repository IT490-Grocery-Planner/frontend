import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/UserContext';

export default function AppNavbar() {

    const {currentUser, logout} = useAuth()
  
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">IT490</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Groceries</Nav.Link>
              <Nav.Link as={Link} to="/grocery-add">Add Groceries</Nav.Link>

              <NavDropdown title="Recipes" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/my-recipes">
                  My Recipes 
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/recipe-lookup">
                  Recipe Lookup 
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/saved-recipes">
                  Saved Recipes 
                </NavDropdown.Item>
              
                <NavDropdown.Item as={Link} to="/recipe-spotlight">
                  Recipe Spotlight 
                </NavDropdown.Item>
            
                
              </NavDropdown>

            </Nav>
            <NavDropdown title={`${currentUser['fname']},${currentUser['lname']}`} id="basic-nav-dropdown">
                
                <NavDropdown.Item onClick={logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
