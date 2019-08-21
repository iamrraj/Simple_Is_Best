import React, { Component } from 'react'


class MovieOverview extends Component {

    state = {
        movie: {},
      }
    
      async componentDidMount() {
        try {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`);
          const movie = await res.json();
          this.setState({
            movie,
          });
        } catch (e) {
          console.log(e);
        }
      }

      
    render() {
        const { movie } = this.state;
        return (
            <div>
                <h1>{movie.title}</h1>
            </div>
        )
    }
}

export default MovieOverview
