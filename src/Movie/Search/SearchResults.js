import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import Navbarr from "../Layout/Navbar";
import axios from "axios";
import Service from "../Service";
const POSTER_PATH = "http://image.tmdb.org/t/p/original";

const service = new Service();

class SearchResults extends Component {
  state = {
    results: []
  };

  _loadMore = async (e, nextProps) => {
    e.preventDefault();

    await this.setState(prev => {
      return { page: prev.page + 1 };
    });
    await service.getCustomersByURL(parseInt(this.state.page));
    //this.props.history.push("/?page=" + parseInt(this.state.page));

    try {
      if (this.props.match.params.query !== nextProps.match.params.query) {
        let query = this.props.match.params.query;
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&query=${query}&page=${this.state.page}`
        );
        const movies = await res.json();
        console.log(movies);
        this.setState({
          movies: movies.results
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.query !== nextProps.match.params.query) {
      let query = this.props.match.params.query;
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&query=${query}&page=1`
        )
        .then(({ data }) => {
          console.log(data);
          this.setState({
            results: data.results
          });
        });
    }
  }

  addDefaultSrc(ev) {
    ev.target.src = "https://i.ibb.co/PwJHHhT/movieposterdefault.png";
  }

  componentDidMount() {}

  onClickRecomendation = async id => {
    this.props.history.push("/overview/" + id);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Navbarr />
        <Container>
          <Row>
            {this.state.results.map(castt => {
              return (
                <div
                  class="col-sm-3"
                  key={castt.id}
                  style={{ marginTop: "15px" }}
                >
                  <a
                    href="# "
                    onClick={() => this.onClickRecomendation(castt.id)}
                  >
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
              );
            })}
          </Row>
          <button
            onClick={this._loadMore}
            className="btn__loadmore_popular_next"
          >
            <i className="fas fa-arrow-right fa-3x" />
          </button>
        </Container>
      </div>
    );
  }
}

export default SearchResults;
