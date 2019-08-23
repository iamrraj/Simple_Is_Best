import React from 'react';
import './App.css';
import { BrowserRouter,Switch } from 'react-router-dom';
import { Provider } from "unstated";
import { Route } from 'react-router-dom';

import Navbarr from './Movie/Layout/Navbar'
import Footer from './Movie/Layout/Footer'

import GenreOverview  from './Movie/genre/GenreOverview'
import StarDetails from './Movie/Star/StarDetails'
import MovieList from './Movie/playing/MovieList'
import Popular from './Movie/popular/Popular'
import TopRating from './Movie/toprating/TopRating'
import MovieOverview from './Movie/MovieOverview';

// import Genre from './Movie/Genre'



const BaseLayout = () => (

  <div>
  <Navbarr />
    
          <Provider>     
              <Switch>

                <Route path="/" exact  component={MovieList} />
                <Route path="/toprating" component={TopRating} />
                <Route path="/popular" component={Popular} />

                {/* <Route path="/genre" component={Genre} /> */}
                
                
                <Route path="/overview/:id" component={MovieOverview} />
                <Route path="/star/:id" component={StarDetails} />
                <Route path="/genere/:id" component={GenreOverview} />

              </Switch>
            </Provider>
<Footer />

  </div>
  
  )

function App() {
  return (
    <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
  );
}



export default App;
