import React, { Component } from 'react'
import { Row ,Container} from 'react-bootstrap'
import '../css/custome.css'


export class Genre extends Component {
    constructor(props){
        super(props);
        this.state ={
            movies:[],
            // nextPageURl: ''
        };
    }


    async componentDidMount() {
        try {
          const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US');
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
                           <div class="middle">
                           
                             
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

export default Genre;
