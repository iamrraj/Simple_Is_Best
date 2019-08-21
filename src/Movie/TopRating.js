import React, { Component } from 'react'
import { Card } from "../common/Card";
// import Spinner from "../common/Spinner";
// import axios from 'axios';
import { Row ,Container} from 'react-bootstrap'
import '../css/custome.css'


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

export class TopRating extends Component {
    constructor(props){
        super(props);
        this.state ={
            movies:[],
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
          const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=1');
          const movies = await res.json();
          console.log(movies);
          this.setState({
            movies: movies.results,
          });
        } catch (e) {
          console.log(e);
        }
      }


    render() {
        return (
            <Container>
                <Row>
                {this.state.movies.map( movie => 
                    // 
                    //         <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} class="box"/>
                        
                    // 
                    <div className="android-card-container mdl-grid">
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
                    
                
                )}
                </Row>
            </Container>
        )
    }
}

export default TopRating ;
