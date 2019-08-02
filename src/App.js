import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "unstated";
import { Route,Switch} from 'react-router-dom'
import {  Navbar, Nav,Container } from 'react-bootstrap';


const BaseLayout = () => (

  <div>
  <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#"> <img src="https://i.imgur.com/v7Or56c.png" class="logo" alt=""  style={{width:"220px", height: "30px"}} /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto ">
        <Nav.Link href="/" className="text-white"><i className="fa fa-home"></i>  Home</Nav.Link>
        <Nav.Link href="/" className="text-white"><i className="fa fa-newspaper-o"></i> Article</Nav.Link>
        <Nav.Link href="/" className="text-white"><i className="fa fa-file-video-os"></i> Videos</Nav.Link>
        <Nav.Link href="/" className="text-white"><i className="fa fa-code"></i> Snippets</Nav.Link>
        <Nav.Link href="/" className="text-white"><i className="fa fa-bullhorn"></i> Sponser</Nav.Link>
        <Nav.Link href="/" className="text-white"><i className="fa fa-signal"></i> Rss</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
  </Navbar>
  
    <div>
          <Provider>
          
              <Switch>
  
               {/* <Route path="/" exact component={Home} />
                <Route  path='/:slug' component={Details} /> */}
                {/* <Route path="/LoginView" component={LoginView} /> */}
               
              </Switch>
            </Provider>
    </div>
  <div >
  <Navbar bg="" expand="lg" style={{ backgroundColor: "orange", marginTop:"30px"}}>
  <Container>
    <Navbar.Brand href="#" className="text-white"> 2015-2019 SIMPLE IS BEST   &nbsp; &nbsp;&nbsp;  || </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto ">
        <Nav.Link href="/" className="text-white">  About </Nav.Link>
        <Nav.Link href="/" className="text-white"> Contact </Nav.Link>
        <Nav.Link href="/" className="text-white"> Cookies </Nav.Link>
        <Nav.Link href="/" className="text-white"> Privacy </Nav.Link>
        <Nav.Link href="/" className="text-white"> Faq</Nav.Link>
        
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
