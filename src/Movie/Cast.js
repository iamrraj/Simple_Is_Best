import React, { Component } from 'react'
import { Row ,Container,Col} from 'react-bootstrap'
const POSTER_PATH = 'http://image.tmdb.org/t/p/original';


class Cast extends Component {

    state = {
        movie: null,
      }
    
      async componentDidMount() {
        try {
          const res = await fetch(`https://api.themoviedb.org/3/movie/429203/credits?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`);
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
        return (
            <Container>
                <Row>
                    <Col sm={2}>
                     {movie.crew[0].name}
                    
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Cast;

const c ={
    padding: "10px",
    color: "white"
}


