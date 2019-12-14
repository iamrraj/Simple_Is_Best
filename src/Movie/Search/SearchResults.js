import React, { Component } from "react";
import Movie from "../Layout/Movie";
import axios from "axios";
import Service from "../Service";

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
        <Movie
          load={this.state.results}
          loadless={this._loadLess}
          loadmore={this._loadMore}
        />
      </div>
    );
  }
}

export default SearchResults;
