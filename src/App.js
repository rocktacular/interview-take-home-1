import React from "react";
import "./App.css";
import "./colors.css";

import Header from "./components/Header";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <Header title="Movies" />
      <Home />
    </div>
  );
}

export default App;
