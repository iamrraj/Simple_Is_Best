import React, { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <div className="something">
        <img
          src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1266,w_2252,x_74,y_0/f_auto,q_auto,w_1100/v1574897107/shape/mentalfloss/67393-gettyimages-1129464319.jpg"
          alt="donnnn"
          className="donnnn"
          style={{ width: "100%", marginBottom: "-200px" }}
        />
        <div className="donnn">
          <h2 className="text-center text-white"> Choose Here</h2>
          <center>
            <div>
              <a
                href="/tv"
                className="btn btn-info font-weight-bold h4"
                style={{ width: "100px", padding: "10px" }}
              >
                TV
              </a>{" "}
              &nbsp;&nbsp;&nbsp;
              <a
                href="/movie"
                className="btn btn-primary font-weight-bold h4"
                style={{ width: "100px", padding: "10px" }}
              >
                MOVIE
              </a>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default MainPage;
