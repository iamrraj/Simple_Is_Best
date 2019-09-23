import React, { Component } from 'react'
import axios from 'axios'

// import Suggestions from '../Components/Suggestions'

// const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Lol extends Component {
  state = {
    error: false,
    query: '',
    movies: []
  }

  getInfo = () => {
    try {
        const res = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US`);
        const movies = res.json();
        console.log(movies);
        this.setState({
          movies: movies.results
        });
    } catch (e) {
        console.log(e);
      }
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        {this.state.movies.map( castt =>
            <p className="cc">{castt.title }</p>
        )}
      </form>
    )
  }
}

export default Lol;