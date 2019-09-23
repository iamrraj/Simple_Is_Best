import React, { Component } from 'react'
import {Form,FormControl,Button } from 'react-bootstrap';

class Formm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.loaddata} inline>
            <FormControl 
                    type="text" 
                    style={{width:"200px"}}
                    placeholder="Search" 
                    className="mr-sm-2" 
                    name="find"
                    />
            <Button variant="outline-success">Search</Button>
            </Form>
        )
    }
}

export default Formm;
