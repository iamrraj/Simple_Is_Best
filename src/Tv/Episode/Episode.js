import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Navbarr from "../Layout/Navbar";
import Spinner from "../../common/Spinner";

// const POSTER_PATH = 'http://image.tmdb.org/t/p/original';
const BACKDROP_PATH = "http://image.tmdb.org/t/p/original";

class Episode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${this.props.match.params.id}/season/${this.props.match.params.season_number}/episode/${this.props.match.params.episode_number}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { movie } = this.state;
    if (movie === null)
      return (
        <p>
          <Spinner />
        </p>
      );
    return (
      <div>
        <Navbarr />
        <div>
          <img
            src={`${BACKDROP_PATH}${movie.poster_path}`}
            alt={movie.name}
            style={move}
          />
          <Container>
            <h3>Overview</h3>
            <p>{movie.overview}</p>

            <div>
              <h3>EPISODE LIST</h3>
              <hr></hr>
              <Row>
                {movie.episodes.map(castt => (
                  <div
                    class="col-sm-3"
                    key={castt.id}
                    style={{ marginTop: "15px" }}
                  >
                    <a href={"overview/" + castt.id}>
                      <div class="card">
                        <img
                          src={
                            castt.still_path
                              ? `${BACKDROP_PATH}${castt.still_path}`
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4I8WjSih2pBUuErcVPFj7G_Zn2xvNVWqvlMvHtb3M1JOtJUU"
                          }
                          alt={castt.name}
                          style={{ height: "360px" }}
                          class="card-img-top ig image"
                        />
                        <div class="middle">
                          <p className="cc">{castt.name}</p>
                          <p className="cc">{castt.air_date}</p>
                          <p className="cc">Episode: {castt.episode_number}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Episode;

const move = {
  width: "100%",
  height: "400px",
  marginTop: "0px"
};
