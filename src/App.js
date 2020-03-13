import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./screens/Home";
import Details from "./screens/Details";

import "./App.css";
import "./colors.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home year={2016} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
