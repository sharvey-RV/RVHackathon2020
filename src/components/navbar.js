import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import jarvis from "../image/jarvislogo.png";
import slackIcon from '../image/slackicon.png';


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
                        <Nav.Link href="/Doc">Documentation</Nav.Link>

                    </Nav>
                    <Nav.Link href="https://app.slack.com/client/T015JBLB1GD/"><img src={slackIcon} alt="slack" style={{ height: "30px" }} /></Nav.Link>
                </Navbar.Collapse>
            </Navbar>);
    }


}

export default NavBar1;
