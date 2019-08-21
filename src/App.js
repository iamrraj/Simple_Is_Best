import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "unstated";
import { Route } from 'react-router-dom';
import {  Navbar, Nav,Container,Form,FormControl,Button } from 'react-bootstrap';

import Home from './Page/Home'
import Details from './Page/Details'

import About from './Privacy/About';
import Privacy from './Privacy/Privacy';
import Cookies from './Privacy/Cookies';
import Contact from './Privacy/Contact';
import Faq from './Privacy/Faq';
import Product from './Privacy/Product'

import logo from "./img/logo-movie-2.png";

// import SeacrchBar from "./Movie/SeacrchBar" 


import MovieList from './Movie/MovieList'
import Popular from './Movie/Popular'
import TopRating from './Movie/TopRating'
import MovieOverview from './Movie/MovieOverview';



const BaseLayout = () => (

  <div>
  <Navbar bg="" expand="lg" style={{  minHeight:"90px"}}>
  <Container>
    <Navbar.Brand href="/" className="text-dark " > <img src={logo} alt="lovie_mania" style={{ width:"200px"}} /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto ">
        <Nav.Link href="/" className="text-dark h5"><i className="fa fa-play"></i>  NOW PLAYING</Nav.Link>
        
        <Nav.Link href="/toprating" className="text-dark h5"><i className="fa fa-star"></i> TOP RATING</Nav.Link>
        <Nav.Link href="/popular" className="text-dark h5"><i className="fa fa-tint"></i> POPULAR</Nav.Link>
        
      
      </Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      
      <Button variant="outline-success">Search</Button>
      {/* <SeacrchBar /> */}
    </Form>
      
    </Navbar.Collapse>
  </Container>
  </Navbar>
  
    <div>
          {/* <Provider>
          
              <Switch> */}
  
                <Route path="/m" component={Home} />
                <Route  path='/:pk' component={Details} />

                <Route  path='/contact' component={Contact} /> 
                <Route path="/cookies" component={Cookies} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={Faq} />

                <Route path="/" exact  component={MovieList} />
                <Route path="/toprating" component={TopRating} />
                <Route path="/popular" component={Popular} />
               

                <Route path="/overview/:id" component={MovieOverview} />


                <Route path="/product" component={Product} />
               
               
              {/* </Switch>
            </Provider> */}
    </div>
  <div >
  <Navbar bg="" expand="lg" style={{ backgroundColor: "orange", marginTop:"30px"}}>
  <Container>
    <Navbar.Brand href="#" className="text-white"> 2015-2019 SIMPLE IS BEST   &nbsp; &nbsp;&nbsp;  || </Navbar.Brand>
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
  </div>
  </div>
  
  )

function App() {
  return (
    <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
  );
}



export default App;
