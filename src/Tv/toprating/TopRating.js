import React, { Component } from "react";
// import BlurImageLoader from "react-blur-image-loader";
// import Image from "react-blur-lazy-image";
import Spinner from "../../common/Spinner";
import { Row, Container } from "react-bootstrap";
import Navbarr from "../Layout/Navbar";
const POSTER_PATH = "http://image.tmdb.org/t/p/original";

export class TTopRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: null
    };
  }

  _loadMore = async e => {
    e.preventDefault();

    await this.setState(prev => {
      return { page: prev.page + 1 };
    });
    //await service.getCustomersByURL(parseInt(this.state.page));
    //this.props.history.push("/?page=" + parseInt(this.state.page));
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=${this.state.page}`
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=${this.state.page}`
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movies } = this.state;
    if (movies === null)
      return (
        <p>
          <Spinner />
        </p>
      );

    return (
      <div>
        <Navbarr />
        <Container>
          <Row>
            {movies.map(castt => (
              <div
                class="col-sm-3"
                key={castt.id}
                style={{ marginTop: "15px" }}
              >
                <a href={"overview/" + castt.id}>
                  <div class="card">
                    <img
                      src={
                        castt.poster_path
                          ? `${POSTER_PATH}${castt.poster_path}`
                          : "https://i.ibb.co/WzYTTSf/66996194-394482144528868-896954686559485952-n.jpg"
                      }
                      alt={castt.name}
                      style={{ height: "360px" }}
                      class="card-img-top ig image"
                    />
                    <div class="middle">
                      <p className="cc">{castt.original_name}</p>
                      <p className="cc">{castt.first_air_date}</p>
                      <p className="cc">{castt.vote_average}/10</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
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

export default TTopRating;
