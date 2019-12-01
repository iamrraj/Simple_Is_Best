import React, { Component } from "react";
import "../css/custome.css";

export class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
      // nextPageURl: ''
    };
  }

  // componentDidMount() {
  //     axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US`)
  //       .then(res => {
  //         const info = res.data;
  //         console.log(res);
  //         this.setState({ info });
  //       })

  //   }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.genres
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    // const { movies } = this.state;
    // if (movies === null) return <p>loading...</p>;
    return (
      <div>
        {this.state.movies.map(castt => (
          <li className="mdl-menu__item btn">
            <a href={"tv//genere/" + castt.id}>{castt.name}</a>
          </li>
        ))}
      </div>
    );
  }
}

export default Genre;
