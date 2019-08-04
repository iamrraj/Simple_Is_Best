import React, { Component } from 'react'
import {  Row, Col,Container } from 'react-bootstrap';
import Sidebar from  "./Sidebar"
import axios from 'axios';
import ReactMarkdown from 'react-markdown/with-html';


class Faq extends Component {
    constructor(props){
        super(props);
            this.state={
                contact:[],
            };
        
    }

    componentDidMount(){
        axios.get('http://simpleisbestt.herokuapp.com/api/sib/faq')
            .then(res =>{
                const contact = res.data;
                console.log(res);
                this.setState({ contact})
            })
    }

    render() {
        return (
            <Container>
                <Row style={{marginTop: "40px"}}>
                {this.state.contact.map( c => 
                    <Col sm={8} style={{backgroundColor:"white", padding:"30px"}}>
                        <p><ReactMarkdown  source = { c.faq } escapeHtml={false}  /></p>
                    </Col>
                )}
                    <Col sm={4}>
                        <Sidebar/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Faq;
