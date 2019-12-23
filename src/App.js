import React from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "unstated";
import { Route } from "react-router-dom";
// import { Redirect } from "react-router";

// import Navbarr from "./Movie/Layout/Navbar";
import Footer from "./Movie/Layout/Footer";

import GenreOverview from "./Movie/genre/GenreOverview";
import StarDetails from "./Movie/Star/StarDetails";
import MovieList from "./Movie/playing/MovieList";
import Popular from "./Movie/popular/Popular";
import TopRating from "./Movie/toprating/TopRating";
import MovieOverview from "./Movie/MovieOverview";
import SearchResults from "./Movie/Search/SearchResults";
import Upcoming from "./Movie/Upcoming/Upcoming";

import TGenreOverview from "./Tv/genre/GenreOverview";
import TStarDetails from "./Tv/Star/StarDetails";
import TMovieList from "./Tv/playing/MovieList";
import TPopular from "./Tv/popular/Popular";
import TTopRating from "./Tv/toprating/TopRating";
import TMovieOverview from "./Tv/MovieOverview";
import TSearchResults from "./Tv/Search/SearchResults";
import Season from "./Tv/Season/Season";
import Episode from "./Tv/Episode/Episode";
import MainPage from "./common/MainPage";

// import Genre from './Movie/Genre'

const BaseLayout = () => (
  <div>
    {/* <Navbarr /> */}

    <Provider>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/movie" exact component={MovieList} />
        <Route path="/results/:query" component={SearchResults} />
        <Route path="/movie/toprating" component={TopRating} />
        <Route path="/movie/upcoming" component={Upcoming} />
        <Route path="/movie/popular" component={Popular} />
        <Route path="/overview/:id" component={MovieOverview} />
        <Route path="/star/:id" component={StarDetails} />
        <Route path="/genere/:id" component={GenreOverview} />

        <Route path="/tv" exact component={TMovieList} />
        <Route path="/result/:query" component={TSearchResults} />
        <Route path="/tv/toprating" component={TTopRating} />
        <Route path="/tv/popular" component={TPopular} />
        <Route path="/tv/overview/:id" component={TMovieOverview} />
        <Route path="/tv/star/:id" component={TStarDetails} />
        <Route path="/tv/genere/:id" component={TGenreOverview} />
        <Route path="/tv/season/:id/:season_number" component={Season} />
        <Route
          path="/tv/episode/:id/:season_number/:episode_number"
          component={Episode}
        />
      </Switch>
    </Provider>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  );
}

export default App;
