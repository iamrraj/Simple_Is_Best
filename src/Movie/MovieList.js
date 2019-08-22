import React, { Component } from 'react'
import { Card } from "../common/Card";
// import Spinner from "../common/Spinner";
// import axios from 'axios';
import { Row ,Container} from 'react-bootstrap'
import '../css/custome.css'


const POSTER_PATH = 'http://image.tmdb.org/t/p/original';

export class MovieList extends Component {
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
          const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
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
                 {this.state.movies.map( castt => 
                     <div class="col-sm-3" key={castt.id} style={{marginTop: "15px"}}>
                      <a href={'overview/'+ castt.id} >
                       <div class="card">
                       <img src={
                         castt.poster_path ?
                         `${POSTER_PATH}${castt.poster_path}`
                         :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4I8WjSih2pBUuErcVPFj7G_Zn2xvNVWqvlMvHtb3M1JOtJUU"
                       } alt={castt.name} style={{ height:"360px"}}  class="card-img-top ig image"  />
                           <div class="middle">
                             <p className="cc">{castt.title }</p>
                             <p className="cc">{castt.release_date}</p>
                             <p className="cc">{castt.vote_average }/10</p>
                           </div>
                       </div>
                       </a>
                   </div>
                   
                   )}
                   </Row>
            </Container>
        )
    }
}

export default MovieList;
