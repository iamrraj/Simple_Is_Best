import React, { Component } from "react";
import Navbarr from "./Navbar";
import { Row, Container } from "react-bootstrap";
const POSTER_PATH = "http://image.tmdb.org/t/p/original";

class Movie extends Component {
  render() {
    return (
      <div>
        <Navbarr />
        <Container>
          <Row>
            {this.props.load.map(castt => (
              <div
                class="col-sm-3"
                key={castt.id}
                style={{ marginTop: "15px" }}
              >
                <a href={"/overview/" + castt.id}>
                  <div class="card">
                    <img
                      src={
                        castt.poster_path
                          ? `${POSTER_PATH}${castt.poster_path}`
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4I8WjSih2pBUuErcVPFj7G_Zn2xvNVWqvlMvHtb3M1JOtJUU"
                      }
                      alt={castt.name}
                      style={{ height: "360px" }}
                      class="card-img-top ig image"
                    />
                    <div class="middle">
                      <p className="cc">{castt.title}</p>
                      <p className="cc">{castt.release_date}</p>
                      <p className="cc">{castt.vote_average}/10</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Row>
          <button
            onClick={this.props.loadmore}
            className="btn__loadmore_popular_next"
          >
            <i className="fas fa-arrow-right fa-3x" />
          </button>

          <button
            onClick={this.props.loadless}
            className="btn__loadmore_popular_less"
          >
            <i className="fas fa-arrow-left fa-3x" />
          </button>
        </Container>
      </div>
    );
  }
}

export default Movie;
