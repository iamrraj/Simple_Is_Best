import React, { Component } from "react";
import Spinner from "../../common/Spinner";
import Service from "../Service";
import Navbarr from "../Layout/Navbar";
const service = new Service();
const POSTER_PATH = "http://image.tmdb.org/t/p/original";

class GenreOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null,
      page: null
    };
  }

  _loadMore = async e => {
    e.preventDefault();

    await this.setState(prev => {
      return { page: prev.page + 1 };
    });
    await service.getCustomersByURL(parseInt(this.state.page));
    //this.props.history.push("/?page=" + parseInt(this.state.page));
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.match.params.id}&page=${this.state.page}`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  };

  _loadLess = async e => {
    e.preventDefault();

    await this.setState(prev => {
      return { page: prev.page - 1 };
    });
    await service.getCustomersByURL(parseInt(this.state.page));
    //this.props.history.push("/?page=" + parseInt(this.state.page));
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.match.params.id}&page=${this.state.page}`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.match.params.id}&page=${this.state.page}`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  onClickRecomendation = async id => {
    this.props.history.push("/overview/" + id);
    window.location.reload();
  };

  render() {
    const { movie } = this.state;
    if (movie === null)
      return (
        <p>
          <Spinner />
        </p>
      );
    return (
      <div>
        <Navbarr />
        <div className="container">
          <div class="row ">
            {movie.results.map(castt => (
              <div
                class="col-sm-3"
                key={castt.id}
                style={{ marginTop: "15px" }}
              >
                <button onClick={() => this.onClickRecomendation(castt.id)}>
                  <div class="card">
                    <img
                      src={
                        castt.poster_path
                          ? `${POSTER_PATH}${castt.poster_path}`
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4I8WjSih2pBUuErcVPFj7G_Zn2xvNVWqvlMvHtb3M1JOtJUU"
                      }
                      alt={castt.name}
                      style={{ height: "360px" }}
                      class="card-img-top  image"
                    />
                    <div class="middle">
                      <p className="cc">{castt.title}</p>
                      <p className="cc">{castt.release_date}</p>
                      <p className="cc">{castt.vote_average}/10</p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={this._loadMore}
            className="btn__loadmore_popular_next"
          >
            <i className="fas fa-arrow-right fa-3x" />
          </button>

          <button
            onClick={this._loadLess}
            className="btn__loadmore_popular_less"
          >
            <i className="fas fa-arrow-left fa-3x" />
          </button>
        </div>
      </div>
    );
  }
}

export default GenreOverview;
