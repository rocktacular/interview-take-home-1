import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./screens/Home";
import Details from "./screens/Details";
import TMDB from "./services/TMDB";

import "./App.css";
import "./colors.css";

function App() {
  // YEAR STATE
  const [year] = useState(2016);

  // HEADER STATE
  const [title, setTitle] = useState("Movies");
  const [showBack, setShowBack] = useState(false);

  // MOVIE LIST STATE (HOME)
  const [movies, setMovies] = useState([]);

  // DETAILS LIST
  // duplicate movies list into object for easy reference in /details route
  const [details, setDetails] = useState({});

  // FAVORITES (DETAILS)
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    // if not already loaded, fetch movies
    if (!movies.length) {
      TMDB.discover(year).then(res => {
        setMovies(res);
        // pre-populate details
        const newDetails = {};
        res.forEach(movie => {
          newDetails[movie.id] = movie;
        });
        setDetails(newDetails);
      });
      // handle error with fetch
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <Header title={title} showBack={showBack} />
        <Switch>
          <Route path="/details/:id">
            <Details
              setShowBack={setShowBack}
              setTitle={setTitle}
              favorites={favorites}
              setFavorites={setFavorites}
              movies={movies}
              details={details}
            />
          </Route>
          <Route path="/">
            <Home
              setShowBack={setShowBack}
              setTitle={setTitle}
              movies={movies}
              setMovies={setMovies}
              setDetails={setDetails}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
