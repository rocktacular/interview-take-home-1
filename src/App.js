import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StoreProvider from "./stores/AppStore";
import Header from "./components/Header";
import Home from "./screens/Home";
import Details from "./screens/Details";

import "./App.css";
import "./colors.css";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <Home year={2017} />
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
