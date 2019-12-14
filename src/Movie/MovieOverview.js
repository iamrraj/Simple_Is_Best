import React, { Component } from "react";
import Navbarr from "./Layout/Navbar";
import { Container, Col, Row } from "react-bootstrap";
// import axios from 'axios'
import StarRatings from "react-star-ratings";
import Spinner from "../common/Spinner";
import CurrencyFormat from "react-currency-format";
import ReactPlayer from "react-player";

const POSTER_PATH = "http://image.tmdb.org/t/p/original";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/original";
const IMBD = "http://www.imdb.com/title/";

class MovieOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&append_to_response=videos,details,similar,credits,recommendations`
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

  // async componentDidMount() {
  //     try {
  //         const movie = (await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&append_to_response=videos,details,similar,credits`)).data;
  //         console.log(movie)
  //         this.setState({
  //             movie,
  //         });
  //     } catch (e) {
  //         console.log(e);
  //       }
  //   }

  onClickRecomendation = async id => {
    this.props.history.push("/overview/" + id);
    window.location.reload();
  };

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
            src={`${BACKDROP_PATH}${movie.backdrop_path}`}
            alt={movie.title}
            style={move}
          />
          <Container>
            <Row md={12}>
              <Col sm={5}>
                <img
                  src={`${POSTER_PATH}${movie.poster_path}`}
                  alt={movie.title}
                  style={MovieInfo}
                  className="ig"
                />
              </Col>
              <Col sm={6}>
                <h3>{movie.original_title}</h3>
                <h5>{movie.tagline}</h5>
                <h5>
                  <StarRatings
                    rating={movie.vote_average}
                    starRatedColor="black"
                    starDimension="20px"
                    numberOfStars={5}
                    name="Rating"
                  />
                  &nbsp;{movie.vote_average}
                  &nbsp;&nbsp;&nbsp;{" "}
                  <i class="fa fa-heart " aria-hidden="true"></i>{" "}
                  {movie.vote_count}
                </h5>
                <h5>
                  {" "}
                  <i
                    class="fa fa-clock-o "
                    aria-hidden="true"
                  ></i> Runtime: {movie.runtime} Mins &nbsp;&nbsp;&nbsp;
                  <span>
                    {" "}
                    <i class="fa fa-calendar " aria-hidden="true"></i>{" "}
                    {movie.release_date}
                  </span>{" "}
                </h5>
                {/* Get Overview */}
                <h4>DESCRIPTION:</h4>
                <p>{movie.overview}</p>
                <h5>
                  DIRECTOR:{" "}
                  <a href={"/star/" + movie.credits.crew[0].id}>
                    {movie.credits.crew[0].name}
                  </a>
                </h5>
                {/* Get Geners */}
                {/* <p className="btn btn-secondary">{movie.genres[0].name}</p> */}
                {movie.genres.map(genre => (
                  <a href={"/genere/" + genre.id}>
                    {" "}
                    <p
                      key={genre.id}
                      className="btn btn-secondary"
                      style={{ marginRight: "10px" }}
                    >
                      {genre.name}{" "}
                    </p>
                  </a>
                ))}
                <br></br>
                {/* Get Trailer */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <i class="fa fa-film" aria-hidden="true"></i> Watch Trailer
                </button>
                &nbsp;&nbsp;&nbsp;
                <a href={`${IMBD}${movie.imdb_id}`} class="btn btn-warning">
                  <i class="fa fa-film" aria-hidden="true"></i> IMDb
                </a>
                <h5 style={{ fontWeight: "bold" }}>
                  Budget:{" "}
                  <CurrencyFormat
                    value={movie.budget}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />{" "}
                </h5>
                {/* <!-- Modal --> */}
                <div
                  class="modal fade bd-example-modal-lg "
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                  >
                    <div class="modal-content bg-dark">
                      <div class="modal-header">
                        <h3
                          class="modal-title text-white"
                          id="exampleModalLongTitle"
                        >
                          {movie.tittle}
                        </h3>
                        <button
                          type="button"
                          class="close text-white"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span ariaHidden="true ">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        {movie.videos["results"].length > 0 ? (
                          <ReactPlayer
                            width="100%"
                            height="480px"
                            url={`https://www.youtube.com/watch?v=${movie.videos["results"][0].key}`}
                          />
                        ) : (
                          <p>Trailer not available</p>
                        )}
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        {/* {% comment %} <button type="button" class="btn btn-primary">Save changes</button> {% endcomment %} */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Modal ENd --> */}
              </Col>
            </Row>
          </Container>
          <Container>
            {/* This iS For Cast And Crews Section */}
            <h2> Casts And Crews </h2> <hr />
            <div class="row ">
              {movie.credits.cast.slice(0, 12).map(castt => (
                <div
                  class="col-sm-2"
                  key={castt.id}
                  style={{ marginTop: "15px" }}
                >
                  <a href={"/star/" + castt.id}>
                    <div class="card">
                      <img
                        src={
                          castt.profile_path
                            ? `${POSTER_PATH}${castt.profile_path}`
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4I8WjSih2pBUuErcVPFj7G_Zn2xvNVWqvlMvHtb3M1JOtJUU"
                        }
                        alt={castt.name}
                        style={{ height: "210px" }}
                        class="card-img-top ig image"
                      />
                      <div class="middle">
                        <p className="c">{castt.name}</p>
                        <p className="c">
                          {castt.gender === 1 ? "Female" : "Male"}
                        </p>
                        <p className="c">{castt.character}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            {/* This iS For Recommended Movie Section */}
            <h2> Recommended Movie </h2> <hr />
            <div class="row ">
              {movie.recommendations.results.slice(0, 8).map(castt => (
                <div
                  class="col-sm-3"
                  key={castt.id}
                  style={{ marginTop: "15px" }}
                >
                  <button onClick={() => this.onClickRecomendation(castt.id)}>
                    <div class="card">
                      <img
                        src={
                          castt.poster_path
                            ? `${POSTER_PATH}${castt.poster_path}`
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4I8WjSih2pBUuErcVPFj7G_Zn2xvNVWqvlMvHtb3M1JOtJUU"
                        }
                        alt={castt.name}
                        style={{ height: "360px" }}
                        class="card-img-top ig image"
                      />
                      <div class="middle">
                        <p className="cc">{castt.title}</p>
                        <p className="cc">{castt.release_date}</p>
                        <p className="cc">{castt.vote_average}/10</p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default MovieOverview;

const move = {
  width: "100%",
  height: "400px",
  marginTop: "0px"
};

const MovieInfo = {
  position: "relative",
  top: "-6rem",
  width: "340px",
  height: "500px",
  borderRadius: "7px"
};
