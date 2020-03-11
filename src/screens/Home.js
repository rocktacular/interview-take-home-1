import React, { useEffect, useState } from "react";
import "./Home.css";
import MovieCard from "../components/MovieCard";
import TMDB from "../services/TMDB";

function Home({ year }) {
  useEffect(() => {
    TMDB.discover(year).then(res => {
      setResults(res);
    });
  }, []);
  const [results, setResults] = useState([]);
  return (
    <div className="home-page">
      <h3>Home Page Stuff</h3>
      <div className="results">
        {results.map((movie, idx) => {
          return <MovieCard key={`movie-${idx}`} title={movie.title} />;
        })}
      </div>
    </div>
  );
}

export default Home;
