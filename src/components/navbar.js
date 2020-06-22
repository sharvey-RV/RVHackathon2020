import React, { Component } from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import jarvis from "../image/jarvislogo.png"


class NavBar1 extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={jarvis} alt="jarvis" style={{ height: "35px" }}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/View">View Commands</Nav.Link>
                        <Nav.Link href="/Add">Add Commands</Nav.Link>
                        <Nav.Link href="/Edit">Edit Commands</Nav.Link>
                        <Nav.Link href="/Doc">Documentation</Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar1;
