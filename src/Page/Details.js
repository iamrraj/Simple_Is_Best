import React, { Component } from 'react'
import axios from 'axios';
import {  Row, Col,Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown/with-html';
import Sidebar from '../Privacy/Sidebar'
import './home.css';

class Details extends Component {
    constructor(props){
        super(props);

        this.state={
            blog: null,
        };
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        const blog = (await axios.get(`http://localhost:8000/api/react/${params.pk}`)).data;
        console.log(blog)
        this.setState({
          blog,
        });
      }

    render() {
        const {blog} = this.state;

        if (blog === null) return <p>Loading ...</p>;
        return (
        <Container>
                
            <div style={{marginTop: "40px", backgroundColor:"white", padding:"30px"}}>
                <Row>
                    <Col sm={2}>
                    <img src="https://i.ibb.co/WzYTTSf/66996194-394482144528868-896954686559485952-n.jpg" alt="66996194-394482144528868-896954686559485952-n" style={{ borderRadius: "50%", width:"150px", height:"150px" }}  />
                    </Col>
                    <Col sm={8}>
                    <h5>  By <strong>Rahul Raj</strong> </h5>
                    <p style={{opacity: "0.7"}}>I'm a passionate Full Stack  developer and researcher from India, currently living in Warsaw, Poland. I write about Python, Django
                    React Js and Web Development on a weekly basis. &nbsp; &nbsp; <a href="# " style={{color:"orange"}}>Read More </a></p>

                        <a href="# "  style={{ marginRight: "7px"}}><i className="fa fa-facebook"></i></a>
                        <a href="# "  style={{ marginRight: "7px"}}><i className="fa fa-twitter"></i></a>
                        <a href="# "  style={{ marginRight: "7px"}}><i className="fa fa-github"></i></a>
                        <a href="# "  style={{ marginRight: "7px"}}><i className="fa fa-linkedin"></i></a>
                        <a href="# "  style={{ marginRight: "7px"}}><i className="fa fa-youtube"></i></a>
                        <a href="# "  style={{ marginRight: "7px"}}><i className="fa fa-instagram"></i></a>
                    
                    </Col>
                </Row>
            </div>


            <Row style={{marginTop: "40px"}}>
           
                <Col sm={8} style={{backgroundColor:"white", padding:"30px"}}>
                    {/*  */}
                    <h3 style={{opacity: "0.7"}} className="text-center">TUTORIAL</h3>
                    <hr style={{border: "1px dashed black", opacity: "0.2"}}/><br></br>

                    <h1 style={{textAlign:"center" }}> { blog.title } </h1>
                    <p style={{textAlign:"center", opacity: "0.7"}} className="text-dark"><i className="fa fa-calendar"></i> { blog.publish } &nbsp; <i class="fa fa-user"></i>  { blog.author }  &nbsp;
                                <i className="fa fa-clock-o"></i> { blog.read_time} Minutes Read   &nbsp; <i class="fa fa-comments"></i>  <a href="{{window.location.href}}#disqus_thread" className="text-dark">Comments</a>   &nbsp;   
                                <i className="fa fa-eye"></i> Views </p >

                    <img id="img"  src={ blog.murl} alt={ blog.title }  ></img>
                    <br></br><br></br>

                    <p><ReactMarkdown  source = { blog.details } escapeHtml={false}  /></p>

                    <hr style={{border: "1px dashed black", opacity: "0.2"}}/><br></br>

                        <p >
                       
                                <button class="btn " style={{background:"orange", color: "white"}}> { blog.tag } </button>
                           
                            <span style={{float:"right"}}>
                                <span style={{fontSize: "21px"}}>Share the Post &nbsp; &nbsp;</span>
                                <a href="http://www.facebook.com/sharer.php?u={{request.build_absolute_uri}}" onclick="window.open('http://www.facebook.com/sharer.php?u={{request.build_absolute_uri}}/','Facebook share', 'height=600, width=800')"  class="fa fa-facebook text-white text-center" style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}} > </a>
                                <a href="https://twitter.com/share?url={{request.build_absolute_uri}}&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank" class="fa fa-twitter text-white text-center" style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}}> </a>
                                <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url={{request.build_absolute_uri}}" target="_blank" class="fa fa-linkedin text-white text-center" style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}}> </a>

                            </span>
                        </p>

                        
            
                        <div  style={{marginTop: "50px", backgroundColor:"#FE775A", padding:"30px"}}>
                                <h1><i class="fa fa-telegram" aria-hidden="true"></i> Subscribe To Our Mailing List </h1>
                                <h2>Receive updates from the Blog!</h2>
                                <form action="{% url 'contactt' %}" method="POST">

                                <Row>
                                    <Col sm={7}>
                                        <input class="form-control " name="email" type="email" placeholder="Your@email.com" aria-label="Search" />
                                    </Col>
                                    <Col sm={5}>
                                        <button class="btn btn-dark " type="submit" style={{width:"250px"}}>Subscribe</button>
                                    </Col>
                                </Row>
                                </form>

                        </div>

                </Col>
            
                <Col sm={4}>
                    <Sidebar/>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Details;
