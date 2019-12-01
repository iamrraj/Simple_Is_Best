import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import Spinner from "../../common/Spinner";

const POSTER_PATH = "http://image.tmdb.org/t/p/original";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/original";

class Season extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviee: null
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${this.props.match.params.id}/season/${this.props.match.params.season_number}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&append_to_response=videos,details,similar,credits,recommendations`
      );
      const moviee = await res.json();
      console.log(moviee);
      this.setState({
        moviee
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { moviee } = this.state;
    if (moviee === null)
      return (
        <p>
          <Spinner />
        </p>
      );
    return (
      <div>
        <img
          src={`${BACKDROP_PATH}${moviee.poster_path}`}
          alt={moviee.name}
          style={move}
        />
        <Container>
          <h3>Overview</h3>
          <p>{moviee.overview}</p>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i class="fa fa-film" aria-hidden="true"></i> Watch Trailer
          </button>

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
                  <h3 class="modal-title text-white" id="exampleModalLongTitle">
                    {moviee.tittle}
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
                  {moviee.videos["results"].length > 0 ? (
                    <ReactPlayer
                      width="100%"
                      height="480px"
                      url={`https://www.youtube.com/watch?v=${moviee.videos["results"][0].key}`}
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

          <div>
            <h3>EPISODE LIST</h3>
            <hr></hr>
            <Row>
              {moviee.episodes.map(castt => (
                <div
                  class="col-sm-3"
                  key={castt.id}
                  style={{ marginTop: "15px" }}
                >
                  <a
                    href={`/tv/episode/${moviee.id}/${castt.season_number}/${castt.episode_number}`}
                  >
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

          <div style={{ marginTop: "40px" }}>
            <h2> Casts And Crews </h2> <hr />
            <div class="row ">
              {moviee.credits.cast.slice(0, 12).map(castt => (
                <div
                  class="col-sm-2"
                  key={castt.id}
                  style={{ marginTop: "15px" }}
                >
                  <a href={"/tv/star/" + castt.id}>
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
          </div>
        </Container>
      </div>
    );
  }
}

export default Season;

const move = {
  width: "100%",
  height: "400px",
  marginTop: "0px"
};
