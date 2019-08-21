import React, { Component } from 'react'
import { Card } from "../common/Card";
const POSTER_PATH = 'http://image.tmdb.org/t/p/original';

class Recommended extends Component {

    state = {
        movie: {},
      }
    
      async componentDidMount() {
        try {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/similar?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`);
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
            <div className="android-card-container mdl-grid" key={movie.key}>
                    <div className="android-more-section">
                        <div className="wrap">
                            <Card
                                key={movie.id}
                                movieId={movie.id}
                                urlImage={`${POSTER_PATH}${movie.poster_path}`}
                                title={movie.title}
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommended;
