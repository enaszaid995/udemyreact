import React, { Component } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
             <Container>
                <Navbar.Brand to="/">Coursera</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link to="/Home">Home</Nav.Link>
                    <NavDropdown title="Our Courses" id="basic-nav-dropdown">
                    <NavDropdown.Item to="/WebDevelopment">Web Development</NavDropdown.Item>
                    <NavDropdown.Item to="/Android">Android</NavDropdown.Item>
                    <NavDropdown.Item to="/Ios">IOS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item to="/AllCourses">Other</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
        )
    }
}

export default Header
