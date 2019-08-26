import React, { Component } from 'react'
import Spinner from '../../common/Spinner'

const POSTER_PATH = 'http://image.tmdb.org/t/p/original';



class GenreOverview extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          movie: null,
        };
      }
    
      async componentDidMount() {
        try {
          const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.match.params.id}`);
          const movie = await res.json();
          console.log(movie);
          this.setState({
            movie
          });
        } catch (e) {
          console.log(e);
        }
      }

    onClickRecomendation = async(id) => {
  
      this.props.history.push('/overview/'+id);
      window.location.reload();

    }

    render() {
        const { movie } = this.state;
        if (movie === null) return <p><Spinner /></p>;
        return (
          <div className="container">
         
                  {/* <div className="android-card-container mdl-grid" >
                  {movie.results.map(move => (
                  <div className="android-more-section" key={move.id}>
                      <div className="wrap">
                          <Card
                              key={move.id}
                              movieId={move.id}
                              urlImage={`${POSTER_PATH}${move.poster_path}`}
                              title={move.title}
                          />
                      </div>
                  </div>
                  ))}
                  </div>   */}

<div class="row " >
{movie.results.map(castt => (
    <div class="col-sm-3" key={castt.id} style={{marginTop: "15px"}}>
     <button  onClick={() => this.onClickRecomendation(castt.id)}>
      <div class="card">
      <img src={
        castt.poster_path ?
        `${POSTER_PATH}${castt.poster_path}`
        :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4I8WjSih2pBUuErcVPFj7G_Zn2xvNVWqvlMvHtb3M1JOtJUU"
      } alt={castt.name} style={{ height:"360px"}}  class="card-img-top  image"  />
          <div class="middle">
            <p className="cc">{castt.title }</p>
            <p className="cc">{castt.release_date}</p>
            <p className="cc">{castt.vote_average }/10</p>
          </div>
      </div>
      </button>
  </div>
  
  ))}
  </div>

          
          
          </div>
        )
    }
}

export default GenreOverview;



// class Movies extends Component {
//   state = {
//     movies: []
//   };

//   async componentDidMount() {
//     const { data: movies } = await axios.get(
//       "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=my_api_key"
//     );
//     this.setState({ movies });
//     console.log(movies);
//   }

//   render() {
//     console.log(this.state.movies);
//     return (
//       <div className="container">
//         {/* {this.state.movies.results.map(movie => <h1>{movie.title}</h1>)} */}
//       </div>
//     );
//   }
// }