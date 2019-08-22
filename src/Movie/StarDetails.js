// https://api.themoviedb.org/3/person/35776?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US
import React, { Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";

import Spinner from '../common/Spinner'
// const POSTER_PATH = 'http://image.tmdb.org/t/p/original';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/original';
const IMBD = 'http://www.imdb.com/title/'


class StarDetails extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          movie: null,
        };
      }
    
      async componentDidMount() {
        try {
          const res = await fetch(`https://api.themoviedb.org/3/person/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`);
          const movie = await res.json();
          console.log(movie);
          this.setState({
            movie,
          });
        } catch (e) {
          console.log(e);
        }
      }
    render() {
        const { movie } = this.state;
        if (movie === null) return <p><Spinner /></p>;
        return (
            <Container>
                <Row>
                    <Col sm={5}>
                        <img src=
                        {
                            movie.profile_path ?
                            `${BACKDROP_PATH}${movie.profile_path}`
                            :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4I8WjSih2pBUuErcVPFj7G_Zn2xvNVWqvlMvHtb3M1JOtJUU"
                          }
                        alt={movie.name} style={moviee}  /><br></br><br></br>
                        <a href={`${IMBD}${movie.imdb_id}`} class="btn btn-warning" style={{ padding: "12px", width:"170px",height:"50px",fontSize:"20px"}}>
                            <i class="fa fa-film" aria-hidden="true"></i> IMDb
                        </a>
                    </Col>
                    <Col sm={7}>
                        <h2>{movie.name}</h2>
                        <h5>Profession: {movie.known_for_department}</h5>
                        <h5>Birth Place: {movie.place_of_birth}</h5>
                        <h5>Date Of Birth: {movie.birthday}</h5>

                        

                        {/* Get Overview */}
                        <h5>BIOGRAPHY:</h5>
                        <p>{movie.biography}</p>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default StarDetails;

const moviee ={
    width:"450px",
    height:"500px",
    borderRadius:"7px"
}
