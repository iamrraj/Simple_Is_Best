import React, { Component } from "react";
// import {Form,FormControl,Button } from 'react-bootstrap';

class Formm extends Component {
  render() {
    return (
      <form onSubmit={this.props.loaddata} method="POST">
        <div className="row">
          <div className="col-sm-3">
            <input
              type="text"
              style={{ width: "200px" }}
              placeholder="Search"
              className="form-control"
              name="find"
            />
          </div>
          <div className="col-sm-2">
            <button className="btn btn-outline-success">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Formm;
