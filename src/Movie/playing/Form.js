import React, { Component } from "react";
// import {Form,FormControl,Button } from 'react-bootstrap';

class Formm extends Component {
  render() {
    return (
      <form onSubmit={this.props.loaddata} method="POST">
        <input
          type="text"
          style={{ width: "200px" }}
          placeholder="Search"
          className="mr-sm-2 form-control"
          name="find"
        />
        <button className="btn btn-outline-success">Search</button>
      </form>
    );
  }
}

export default Formm;
