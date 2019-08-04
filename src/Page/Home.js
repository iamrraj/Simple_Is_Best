import React, { Component } from 'react'
import {  Row, Col,Container } from 'react-bootstrap';
import axios from 'axios';
import Sidebar from '../Privacy/Sidebar';
import './home.css';
// import Service from './Service'
// import Moment from 'react-moment';


class Home extends Component {
    constructor(props){
        super(props);
            this.state={
                contact:[],
            };
        
    }

    componentDidMount(){
        axios.get(`http://simpleisbestt.herokuapp.com/api/react`)
            .then(res =>{
                const contact = res.data;
                console.log(res);
                this.setState({ contact})
            })
    }

    

    render() {
        return (
        <div>
            <section id="fact23">
                <div className="container text-center">
                <div className="home-search ">
                    <div className="overlay">
                    <div className="display-4 mb-4 text-white">
                    <h1 style={{color: "white", fontSize:"53px"}}>
                        <span style={{color: "orange"}}>SI</span>
                     MP<span style={{color: "orange"}} >LE</span> IS <span style={{color: "orange"}} >B</span>ES<span style={{color: "orange"}}>T</span> </h1>
                    <h4 className="text-white">Stories about Python,React Js, Django, Node Js and Web Development</h4>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            <Container>
                <Row style={{marginTop: "40px"}}>
                {this.state.contact.map( post => 
                    <Col sm={8} style={{backgroundColor:"white", padding:"30px" , marginBottom: "40px"}} key={post.pk}>
                        {/* <p><ReactMarkdown  source = { c.title } escapeHtml={false}  /></p> */}
                        <a href={"/" + post.pk} style={{ textDecoration:"none"}}>
                                <h3 style={{opacity: "0.7"}} className="text-center text-dark">TUTORIAL</h3>

                                <hr style={{border: "1px dashed black", opacity: "0.2"}}/><br></br>

                                <center><h1 style={{textalign:"center"}} className="text-dark" > { post.title } </h1></center>
                                                <br></br>
                                <p style={{textAlign:"center", opacity: "0.7"}} className="text-dark"><i className="fa fa-calendar"></i> { post.publish } &nbsp; <i className="fa fa-user"></i>  { post.author }  &nbsp;
                                <i className="fa fa-clock-o"></i>  { post.read_time}  Minutes Read    &nbsp; <i className="fa fa-comments"></i>  <span className="text-dark"> Comments </span>   &nbsp;   
                                <i className="fa fa-eye"></i> Views </p >
                                <img id="img"  src={ post.murl} alt={ post.title }  ></img>
                                                <br></br>
                                <p style={{fontSize: "18px"}} className="text-dark">{ post.body }</p>
                        </a>

                                    <p style={{fontSize: "20px",textAlign:"center"}} >
                                        <a href="# " style={{color:"orange"}}>
                                            <strong>READ MORE</strong>
                                        </a>
                                    </p>
                        <hr style={{border: "1px dashed black", opacity: "0.2"}}/><br></br>
                        <p >
            
                        
                        <button className="btn " style={{background:"orange", color:"whit"}}> { post.name }</button>
                            
                            <span style={{float:"right"}}>
                                <a href="http://www.facebook.com/sharer.php?u={{request.build_absolute_uri}}"  target="_blank" rel="noopener noreferrer" className="fa fa-facebook text-center text-white" style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}} > </a>
                                <a href="https://twitter.com/share?url={{request.build_absolute_uri}}&amp;text=Simple%20Is%20Best&amp;hashtags=simpleisbest" target="_blank"  rel="noopener noreferrer" className="fa fa-twitter text-center text-white" style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}}> </a>
                                <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url={{request.build_absolute_uri}}" target="_blank" rel="noopener noreferrer"  className="fa fa-linkedin text-center text-white" style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}}> </a>
                                

                            </span>
                        </p>

                    </Col>
                )} 
                    <Col sm={4} fixed="top">
                        <Sidebar/>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default Home;
