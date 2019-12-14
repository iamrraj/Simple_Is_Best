import React, { Component } from "react";
import Movie from "../Layout/Movie";
import Service from "../Service";

const service = new Service();

export class TopRating extends Component {
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
    await service.getCustomersByURL(parseInt(this.state.page));
    //this.props.history.push("/?page=" + parseInt(this.state.page));
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=${this.state.page}`
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

  _loadLess = async e => {
    e.preventDefault();

    await this.setState(prev => {
      return { page: prev.page - 1 };
    });
    await service.getCustomersByURL(parseInt(this.state.page));
    //this.props.history.push("/?page=" + parseInt(this.state.page));
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=${this.state.page}`
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
        `https://api.themoviedb.org/3/movie/top_rated?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=${this.state.page}`
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
    return (
      <div>
        <Movie
          load={this.state.movies}
          loadless={this._loadLess}
          loadmore={this._loadMore}
        />
      </div>
    );
  }
}

export default TopRating;
