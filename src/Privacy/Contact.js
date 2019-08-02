import React, { Component } from 'react'
import {  Row, Col,Container } from 'react-bootstrap';
import Sidebar from  "./Sidebar"

class Contact extends Component {
    render() {
        return (
            <Container>
                <Row style={{marginTop: "40px"}}>
                    <Col sm={8} style={{backgroundColor:"white", padding:"30px"}}>
                        <h1>Contact</h1>
                    </Col>

                    <Col sm={4}>
                        <Sidebar/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;
