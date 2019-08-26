import React, { Component } from 'react';
import {  Navbar, Nav,Container,Form,FormControl,Button } from 'react-bootstrap';
import logo from "./../../img/logo-movie-2.png";
import Genre from '../Genre'
// import SearchBar from '../SearchBar'

class Navbarr extends Component {

    render() {
        return (
            <div>
  <Navbar bg="" expand="lg" style={{  minHeight:"90px"}}>
  <Container>
    <Navbar.Brand href="/" className="text-dark " >  <img src={logo} alt="lovie_mania" style={{ width:"200px"}} /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto ">
        <Nav.Link href="/" className="text-dark h5"><i className="fa fa-play"></i>  NOW PLAYING</Nav.Link>
        
        <Nav.Link href="/toprating" className="text-dark h5"><i className="fa fa-star"></i> TOP RATING</Nav.Link>
        <Nav.Link href="/popular" className="text-dark h5"><i className="fa fa-tint"></i> POPULAR</Nav.Link>
        
        
      
      </Nav>
      <Form inline>
      <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2" 
            // onChange={this.onChange}
            // value={this.state.keyword} 
            />
      
      <Button variant="outline-success">Search</Button>
      
    </Form>
    {/* <SearchBar /> */}
      
    </Navbar.Collapse>

    <button
              className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect"
              id="more-button"
            >
              <i className="material-icons">more_vert</i>
            </button>

            <ul
              className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect"
              htmlFor="more-button"
            >
              <p><Genre /></p>
              {/* <li className="mdl-menu__item">4.4 KitKat</li>
              <li disabled className="mdl-menu__item">
                4.3 Jelly Bean
              </li>
              <li className="mdl-menu__item">
                 Genre
              </li> */}
            </ul>
  </Container>
         

            
  </Navbar>
  
            </div>
        )
    }
}

export default Navbarr;
