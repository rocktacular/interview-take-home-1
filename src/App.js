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
  // maintain order/sort for home page display
  const [movies, setMovies] = useState([]);

  // DETAILS LIST
  // duplicate movies list into object for easy reference in /details route. store favorites here
  const [details, setDetails] = useState({});

  useEffect(() => {
    TMDB.discover(year)
      .then(res => {
        setMovies(res);
        // pre-populate details
        const newDetails = {};
        res.forEach(movie => {
          newDetails[movie.id] = movie;
        });
        setDetails(newDetails);
      })
      .catch(err => alert(err)); // basic error handling. would probably have some state variable for dynamic error presentation to fit with design
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
              movies={movies}
              details={details}
              setDetails={setDetails}
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
