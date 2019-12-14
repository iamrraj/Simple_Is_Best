import React, { Component } from "react";
import Spinner from "../../common/Spinner";
import Service from "../Service";

import Movie from "../Layout/Movie";
const service = new Service();

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
        movie: movie.results
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
        movie: movie.results
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
        <Movie
          load={this.state.movie}
          loadless={this._loadLess}
          loadmore={this._loadMore}
        />
      </div>
    );
  }
}

export default GenreOverview;
