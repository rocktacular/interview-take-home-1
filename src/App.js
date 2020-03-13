import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./screens/Home";
import Details from "./screens/Details";

import "./App.css";
import "./colors.css";

function App() {
  // HEADER STATE
  const [title, setTitle] = useState("Movies");
  const [showBack, setShowBack] = useState(false);

  // MOVIE LIST STATE (HOME)
  const [movies, setMovies] = useState([]);

  // FAVORITES (DETAILS)
  const [favorites, setFavorites] = useState({});
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
            />
          </Route>
          <Route path="/">
            <Home
              year={2016}
              setShowBack={setShowBack}
              setTitle={setTitle}
              movies={movies}
              setMovies={setMovies}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
