import React, { Component } from 'react'
import {  Navbar, Nav,Container } from 'react-bootstrap';
import logo from "./../../img/logo-movie-2.png";


export class Footer extends Component {
    render() {
        return (
            <Navbar bg="info" expand="lg" style={{marginTop:"30px"}}>
            <Container>
              <Navbar.Brand href="/" className="text-white"> 2015-2019  <img src={logo} alt="lovie_mania" style={{ width:"200px", height:"30px"}} />   &nbsp;  || </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ">
                  <Nav.Link href="/about" className="text-white font-weight-bold">  About </Nav.Link>
                  <Nav.Link href="/contact" className="text-white font-weight-bold"> Contact </Nav.Link>
                  <Nav.Link href="/cookies" className="text-white font-weight-bold"> Cookies </Nav.Link>
                  <Nav.Link href="/privacy" className="text-white font-weight-bold"> Privacy </Nav.Link>
                  <Nav.Link href="/faq" className="text-white font-weight-bold"> Faq</Nav.Link>
                  
                </Nav>
                
              </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}

export default Footer
