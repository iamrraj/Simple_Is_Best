import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./../../img/logo-movie-2.png";
import Genre from "../Genre";
import axios from "axios";
import Search from "../Search/Search";
// import SearchBar from '../SearchBar'

class TNavbarr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      movies: []
    };
  }

  getInfo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&query=${this.state.query}&page=1&include_adult=false`
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({
          movies: data.results // MusicGraph returns an object named data,
          // as does axios. So... data.data
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  render() {
    return (
      <div>
        <Navbar bg="" expand="lg" style={{ minHeight: "90px" }}>
          <Container>
            <Navbar.Brand href="/" className="text-dark ">
              {" "}
              <img
                src={logo}
                alt="lovie_mania"
                style={{ width: "200px" }}
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto ">
                <Nav.Link href="/" className="text-dark h5">
                  <i className="fa fa-play"></i> NOW PLAYING
                </Nav.Link>
                <Nav.Link href="/toprating" className="text-dark h5">
                  <i className="fa fa-star"></i> TOP RATING
                </Nav.Link>
                <Nav.Link href="/popular" className="text-dark h5">
                  <i className="fa fa-tint"></i> POPULAR
                </Nav.Link>
              </Nav>
              <Search />
            </Navbar.Collapse>

            <button
              className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect"
              id="more-button"
            >
              <i className="material-icons">more_vert</i>
            </button>

            <ul
              className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect"
              htmlFor="more-button"
            >
              <p>
                <Genre />
              </p>
              {/* <li className="mdl-menu__item">4.4 KitKat</li>
              <li disabled className="mdl-menu__item">
                4.3 Jelly Bean
              </li>
              <li className="mdl-menu__item">
                 Genre
              </li> */}
            </ul>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default TNavbarr;
