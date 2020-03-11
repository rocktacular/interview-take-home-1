import React from "react";
import "./App.css";
import "./colors.css";

import Header from "./components/Header";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <Header title="Movies" />
      <Home year={2016} />
    </div>
  );
}

export default App;
